const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { unauthorized } = require("@hapi/boom");

const { config } = require("../../config/config");

const UsersService = require("./users.service");
const service = new UsersService();

class AuthService {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) throw unauthorized();
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw unauthorized();
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

  async sendRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) throw unauthorized();
    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "15min" });
    const link = `https://myFrontend.com/recovery?token=${token}`;
    await service.update(user.id, { recoveryToken: token });
    const mail = {
      from: config.nodeMailerUser, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Email para recuperar contraseña", // Subject line
      html: `<b>Ingrese a este link => ${link} </b>`, // html body
    };
    const rta = await this.sendMail(mail);
    return rta;
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.nodeMailerUser,
        pass: config.nodeMailerPass,
      },
    });
    await transporter.sendMail(infoMail);
    return { message: "Mail sent 😗" };
  }
}

module.exports = AuthService;

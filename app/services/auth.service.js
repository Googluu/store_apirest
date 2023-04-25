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

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) throw unauthorized();
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true, // true for 465, false for other ports
      port: 465,
      auth: {
        user: config.nodeMailerUser,
        pass: config.nodeMailerPass,
      },
    });
    await transporter.sendMail({
      from: config.nodeMailerUser, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Este es un nuevo correo", // Subject line
      text: "Buenos días AMIGAZO!!", // plain text body
      html: "<b>Hello compa?</b>", // html body
    });
    return { message: "Mail sent 😗" };
  }
}

module.exports = AuthService;

const path = require('path');
require('dotenv').config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT ,
  database_url: `mongodb+srv://saifur22:gPq02O7O47Ijyzgy@cluster0.g79cke1.mongodb.net/academiadb?retryWrites=true&w=majority`,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
  default_faculty_pass: process.env.DEFAULT_FACULTY_PASS,
  default_admin_pass: process.env.DEFAULT_ADMIN_PASS,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};
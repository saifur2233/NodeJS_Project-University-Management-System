const mongoose = require('mongoose');
const http = require('http');
const config = require('./config/index');
const app = require('./app');

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server;

async function boostrap() {
  try {
    await mongoose.connect(config.database_url);
    console.log(`🛢 Database is connected successfully`);

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('Failed to connect database', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

boostrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});

var config = {
  BD: {
    PATH: 'mongodb://' + process.env.DB_1_PORT_27017_TCP_ADDR + ':' + process.env.DB_1_PORT_27017_TCP_PORT,
  },
  APP_PORT: process.env.PORT
};

module.exports = config;
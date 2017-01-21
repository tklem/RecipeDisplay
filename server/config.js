const config = {
  mongoURL: (process.env.NODE_ENV === 'development' && 'mongodb://localhost:27017/mern-starter') ||
  			(process.env.NODE_ENV === 'production' && 'mongodb://heroku_7g1wzzsv:7j5c23b314n15he49ek86fagj9@ds117869.mlab.com:17869/heroku_7g1wzzsv'),
  port: process.env.PORT || 8000,
};

export default config;

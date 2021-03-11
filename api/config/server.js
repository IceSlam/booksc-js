module.exports = ({ env }) => ({
  host: env('HOST', '127.0.6.68'),
  port: env.int('PORT', 50377),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7eeaea10008c974868ad170bf966e3ef'),
    },
  },
});

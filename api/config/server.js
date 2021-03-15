module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 50377),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});

module.exports = ({ env }) => ({
  host: env('APP_IP'),
  port: env.int('APP_PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});

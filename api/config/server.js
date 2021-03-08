module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a5ef6810b89043ccf719dfc82069f054'),
    },
  },
});

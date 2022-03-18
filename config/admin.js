module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd950e42299d062bffc058548a309ada5'),
  },
});

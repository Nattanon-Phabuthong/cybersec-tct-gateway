module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'E0cdw1ISll9aHoy4GsQ7Xg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'WMyAvMswUq8ckfF+1ageig=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '291wlPuDFcyoKEqXFU4/dw=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

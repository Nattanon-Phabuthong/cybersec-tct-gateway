module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5432),
  app: {
    keys: env.array('APP_KEYS', ['9DTx/gQUQxcak2FRKrQ8eQ==', 'O8JP7s8pRsEBIOViFXHz1A==', 'dCBg4OqzVJHinqfH3Cozjg==', 'AKtSkLH9uxczFmsoD7w0Aw==']),
  },
});

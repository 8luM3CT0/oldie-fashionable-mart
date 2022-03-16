/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    stripe_publish_key: 'pk_test_51JA5aeJx9wXnBmy1arwyDQL4KeuVsSktOPSothxhWHkXnuSrGHssCnlajpHzTg7pWprqFrF4HqsXAYNeVskDYLmU00Boqpmnjy',
    stripe_secret_key: 'sk_test_51JA5aeJx9wXnBmy1NNm2XxTCBPnMqmi7Mv2aHQaRhxLvbCsNI8kVJjcp4x9yoXClw1Uuv6wx7s10gQw9U2MKBbwM00fgBfVIJo',
    stripe_signing_secret: 'whsec_29gNtaDMOcYsEBqxeu0B3yEjw86Wnm0o',
    google_id:  '128684784930-78cpm5v0oueg9lo6v2ftbh924j6f1al5.apps.googleusercontent.com',
    google_secret: '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',
    web_host: 'https://retro-gamestore.vercel.app'
  }
}

module.exports = nextConfig

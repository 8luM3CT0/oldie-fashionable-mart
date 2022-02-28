/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    stripe_publish_key: 'pk_test_51JA5aeJx9wXnBmy1arwyDQL4KeuVsSktOPSothxhWHkXnuSrGHssCnlajpHzTg7pWprqFrF4HqsXAYNeVskDYLmU00Boqpmnjy',
    stripe_secret_key: 'sk_test_51JA5aeJx9wXnBmy1NNm2XxTCBPnMqmi7Mv2aHQaRhxLvbCsNI8kVJjcp4x9yoXClw1Uuv6wx7s10gQw9U2MKBbwM00fgBfVIJo'
  }
}

module.exports = nextConfig

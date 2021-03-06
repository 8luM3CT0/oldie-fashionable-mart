/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    stripe_public_key: 'pk_test_51KfiANG9oXPtBckMFH7AjmtP8jwinag4dBB49b94lK5B0RNnMLy6WEDNIJ0fy5UxqFEGlfVMJrPkEGZ6PVOrZ4eB00CNMHsvOv',
    stripe_secret_key: 'sk_test_51KfiANG9oXPtBckM2fNbf69nZHHyD63uzOm8U4I2KB8A0WNSKlqDkfESo3GMxMR7TNbJcUaLT3u1Z6QMdKAmhDmv00qfF16sZY',
    stripe_signing_secret: 'whsec_3210097cf80bfbb6c5a681aca6248b42cf50eb22d05ceef5bdb8444b6fe3d411',
    google_id:  '128684784930-78cpm5v0oueg9lo6v2ftbh924j6f1al5.apps.googleusercontent.com',
    google_secret: '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',
    web_host: 'https://retro-gamestore.vercel.app',
    test_host: 'http://localhost:3000'
  }
}

module.exports = nextConfig

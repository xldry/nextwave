require('dotenv').config();

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aldryv.files.wordpress.com',
        port: '',
        pathname: '/2023/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'f4.bcbits.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}
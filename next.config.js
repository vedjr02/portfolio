/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vedantambre.com'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.vedantambre.com',
          },
        ],
        destination: 'https://vedantambre.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

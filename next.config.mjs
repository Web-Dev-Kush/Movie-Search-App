/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/w220_and_h330_face/*',
          },
        ],
      },
};

export default nextConfig;

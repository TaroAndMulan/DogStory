/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true, // Set to true if you want a permanent redirect
          },
        ];
      },
};

export default nextConfig;

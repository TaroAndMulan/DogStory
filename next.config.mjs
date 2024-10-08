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
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'bozdlcvcmvligocahzrc.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/images/**',
          },
        ],
      }
};

export default nextConfig;

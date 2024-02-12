/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/en/sample-page",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

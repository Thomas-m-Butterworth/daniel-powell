if (!URL.canParse(process.env.NEXT_PUBLIC_WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL
)

console.log({protocol}, {hostname}, {port}, {pathname})

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: '**',
      },
      {
        protocol: protocol.slice(0, -1),
        hostname: '2.gravatar.com',
        port,
        pathname: '**',
      },
    ],
  },
  compiler: {
    styledComponents: true
  },
}

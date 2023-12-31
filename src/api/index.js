import ky from 'ky'

export const strapi = ky.extend({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_URL + '/api',
  hooks: {
    beforeRequest: [
      (req) => {
        req.headers.set(
          'Authorization',
          `Bearer ${process.env.STRAPI_API_TOKEN}`,
        )
      },
    ],
  },
})

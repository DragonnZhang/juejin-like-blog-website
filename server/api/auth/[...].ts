import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'

const { clientId, clientSecret, authSecret } = useRuntimeConfig()
export default NuxtAuthHandler({
  secret: authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId,
      clientSecret
    })
  ]
})

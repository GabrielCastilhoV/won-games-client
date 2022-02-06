import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    id: number
    expires: string
    jwt: string
    user: {
      name: string
      email: string
      image: string
    }
  }
}

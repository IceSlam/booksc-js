export default async function ({ app, redirect }) {
  const user = await app.$cookies.get('booksc._token.local')
  if (user) {
  } else {
    redirect('/admin/auth')
  }
}

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.auth.user.role.id === '6148cb5a15248f00ca3e882a') {
    return redirect('/admin')
  } else {
  }
}

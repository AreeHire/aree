import { auth } from 'firebase/auth'

export default function ({ store, redirect }) {
  if (!store.getters.isLoggedIn) {
    return redirect('/')
  }
}

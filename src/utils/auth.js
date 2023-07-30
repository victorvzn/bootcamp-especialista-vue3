export const isAuthenticated = () => {
  const isAuth = localStorage.getItem('auth')

  return !!isAuth
}
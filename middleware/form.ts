//このファイルは使用していません
export default defineNuxtRouteMiddleware((to, from) => {
  const formData = formState()
  if (formData.value.flag === false) {
    return { path: '/contact' }
  }
})

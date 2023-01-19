export default defineNuxtRouteMiddleware((to, from) => {

  if(to.path !== '/projects/best') {
    navigateTo('/projects/best', { redirectCode: 301 })
  }
})

// import { useUserStore } from "~/store/user";
// const userStore = useUserStore();

export default defineNuxtRouteMiddleware((to, from) => {

  const logged = useState('logged')
  console.log(logged.value)// userStore.isLogged)
  if (!logged.value) { // userStore.isLogged)
    console.log('redirect!')
    return abortNavigation()
  }

})
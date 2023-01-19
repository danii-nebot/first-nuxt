import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref('')
  const logged = ref(false)

  const isLogged = computed(() => logged.value)
  const fullName = computed(() => name.value)

  function login(_name: string) {
    name.value = _name
    logged.value = true
  }

  return { name, isLogged, fullName, login }
})
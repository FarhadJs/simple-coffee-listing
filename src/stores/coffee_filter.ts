import {
  ref
  //  computed
} from 'vue'
import { defineStore } from 'pinia'

export const useCoffeeFilter = defineStore('coffeeFilter', () => {
  const isCoffeeAvailable = ref(true)
  // const setCoffeeAvailable = computed(() => count.value * 2)
  function setCoffeeAvailable(value: boolean) {
    isCoffeeAvailable.value = value
  }

  return {
    isCoffeeAvailable,
    //  doubleCount,
    setCoffeeAvailable
  }
})

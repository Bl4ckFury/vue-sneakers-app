import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLayStore = defineStore('lay', () => {
  const showDrawer = ref(false)
  const cart = ref([])

  const openDrawer = () => {
    showDrawer.value = true
  }

  const closeDrawer = () => {
    showDrawer.value = false
  }

  const addToCart = (item) => {
    if (item.isAdded) {
      cart.value.push(item)
      item.isAdded = true
    } else {
      cart.value.splice(cart.value.indexOf(item), 1)
      item.isAdded = false
    }
  }

  return { showDrawer, openDrawer, closeDrawer, addToCart }
})

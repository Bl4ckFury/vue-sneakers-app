import axios from 'axios'

import { ref, computed, onMounted, reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useLayStore = defineStore('lay', () => {
  const showDrawer = ref(false)
  const cart = ref([])
  const items = ref([])
  const filters = reactive({
    sortBy: '',
    searchQuery: ''
  })

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

  const getItems = async () => {
    try {
      const params = {
        sortBy: filters.sortBy
      }
      if (filters.searchQuery) {
        params.title = `*${filters.searchQuery}*`
      }
      const { data } = await axios.get('https://3cafada1a49a5862.mokky.dev/items', {
        params
      })
      items.value = data
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeSelect = (event) => {
    filters.sortBy = event.target.value
  }

  watch(filters, async () => {
    try {
      const { data } = await axios.get('https://3cafada1a49a5862.mokky.dev/items' + filters.sortBy)
      items.value = data
    } catch (error) {
      console.log(error)
    }
  })

  const onChangeSearchInput = (event) => {
    filters.searchQuery = event.target.value
  }

  return {
    showDrawer,
    openDrawer,
    closeDrawer,
    addToCart,
    items,
    getItems,
    filters,
    onChangeSelect
  }
})

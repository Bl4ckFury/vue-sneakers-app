<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProductsListItem from '../products/ProductsListItem.vue'
import { useLayStore } from '../../stores/storeLay'

const layStore = useLayStore()

onMounted(layStore.getItems)
</script>

<template>
  <ul class="flex flex-row flex-wrap items-center justify-center p-10">
    <ProductsListItem
      v-for="item in layStore.items"
      :key="item.id"
      :item="item"
      :isFavorite="false"
      :isAdded="false"
    />
  </ul>
</template>

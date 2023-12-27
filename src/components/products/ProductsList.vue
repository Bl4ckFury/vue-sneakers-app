<script setup>
import ProductsListItem from '../products/ProductsListItem.vue'
</script>

<template>
  <ul class="flex flex-row flex-wrap p-10">
    <li>
      <ProductsListItem :isFavorite="false" :isAdded="false" />
    </li>
  </ul>
</template>

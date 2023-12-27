<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/header/NavBar.vue'
import CartDrawer from './components/cart/CartDrawer.vue'
import { useLayStore } from './stores/storeLay'

const layStore = useLayStore()
</script>

<template>
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <CartDrawer v-if="layStore.showDrawer" />
    <NavBar />
    <RouterView />
  </div>
</template>

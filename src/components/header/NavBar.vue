<script setup>
import IconCart from '../icons/IconCart.vue'
import IconFavorite from '../icons/IconFavorite.vue'
import IconProfile from '../icons/IconProfile.vue'
import { useLayStore } from '../../stores/storeLay'

const layStore = useLayStore()
</script>

<template>
  <header class="flex flex-row items-center justify-between border-b border-slate-200 px-8 p-8">
    <div>
      <RouterLink class="flex flex-row items-center" to="/">
        <img src="../../assets/image/png/logo.png" alt="logo-app" />
        <div class="ml-2">
          <h2 class="text-2xl font-bold">VUE SNEAKERS</h2>
          <p class="font-normal text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </RouterLink>
    </div>

    <div class="flex flex-row items-center">
      <button
        @click="layStore.openDrawer"
        class="flex items-center text-slate-900 font-medium mr-4 rounded-xl p-2 transition hover:bg-slate-100"
      >
        <IconCart />
        <b>1205 руб.</b>
      </button>
      <RouterLink
        class="flex items-center text-slate-500 font-medium mr-4 rounded-xl p-2 transition hover:bg-slate-100"
        to="/favorite"
      >
        <IconFavorite />
        Закладки</RouterLink
      >
      <RouterLink
        class="flex items-center text-slate-500 font-medium mr-4 rounded-xl p-2 transition hover:bg-slate-100"
        to="/profile"
      >
        <IconProfile />
        Профиль</RouterLink
      >
    </div>
  </header>
</template>

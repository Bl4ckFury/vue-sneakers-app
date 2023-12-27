<script setup>
import IconArrowBlack from '../icons/IconArrowBlack.vue'
import CartDrawerOrder from './CartDrawerOrder.vue'
import CartList from './CartList.vue'
import { useLayStore } from '../../stores/storeLay'

const layStore = useLayStore()
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-full bg-black z-10 opacity-70"></div>
  <div class="bg-white z-20 h-full w-1/4 fixed right-0 top-0 p-10">
    <div class="flex flex-row justify-between items-center">
      <button @click="layStore.closeDrawer" class="hover:-translate-x-1 transition">
        <IconArrowBlack class="rotate-180" />
      </button>
      <h3 class="font-bold text-2xl">Корзина</h3>
    </div>
    <div>
      <CartList />
    </div>
    <div>
      <CartDrawerOrder />
    </div>
  </div>
</template>

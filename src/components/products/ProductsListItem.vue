<script setup>
import IconLikeItem from '../icons/IconLikeItem.vue'
import IconAddItemCart from '../icons/IconAddItemCart.vue'
import IconNotLikeItem from '../icons/IconNotLikeItem.vue'
import { useLayStore } from '../../stores/storeLay'

const layStore = useLayStore()
</script>

<template>
  <li class="flex flex-col border border-l-slate-300 rounded-3xl p-6">
    <button>
      <IconNotLikeItem />
    </button>
    <img src="../../assets/image/jpg/sneakers-1.jpg" alt="sneakers-1" class="w-44" />
    <h3 class="w-44 my-2 font-medium">Мужские Кроссовки Nike Blazer Mid Suede</h3>
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-col">
        <span class="text-slate-300">Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button @click="layStore.addItemCart">
        <IconAddItemCart @click="layStore.addToCart" />
      </button>
    </div>
  </li>
</template>

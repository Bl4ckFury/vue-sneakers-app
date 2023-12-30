<script setup>
import IconLikeItem from '../icons/IconLikeItem.vue'
import IconAddItemCart from '../icons/IconAddItemCart.vue'
import IconNotLikeItem from '../icons/IconNotLikeItem.vue'
import { useLayStore } from '../../stores/storeLay'

const layStore = useLayStore()

defineProps({
  item: Object
})
</script>

<template>
  <li class="flex flex-col border border-l-slate-300 rounded-3xl p-6 m-4">
    <button>
      <IconNotLikeItem />
    </button>
    <img :src="item.image" :alt="item.title" class="w-44" />
    <h3 class="w-44 my-2 font-medium">{{ item.title }}</h3>
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:</span>
        <b>{{ item.price }} руб.</b>
      </div>
      <button @click="layStore.addItemCart">
        <IconAddItemCart @click="layStore.addToCart" />
      </button>
    </div>
  </li>
</template>

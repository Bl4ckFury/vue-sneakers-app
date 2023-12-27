<script setup>
import IconArrowWhite from '../icons/IconArrowWhite.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-row mb-4">
      <span class="font-medium">Итого: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> 21 498 руб.</b>
    </div>
    <div class="flex flex-row mb-6">
      <span class="font-medium">Налог 5%: </span>
      <div class="flex-1 border-b border-dashed"></div>
      <b> 1 088 руб.</b>
    </div>
    <button
      disabled=""
      class="flex flex-row items-center justify-center cursor-pointer py-4 px-12 mb-12 rounded-2xl text-white bg-lime-300 hover:bg-lime-500 transition text-xl disabled:bg-slate-300 disabled:pointer-events-none"
    >
      Оформить заказ <IconArrowWhite class="ml-3 mt-1" />
    </button>
  </div>
</template>

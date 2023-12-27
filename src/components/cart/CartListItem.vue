<script setup>
import IconClosed from '../icons/IconClosed.vue'
</script>

<template>
  <li class="border border-slate-200 rounded-xl my-6 p-6">
    <div class="flex flex-row items-center justify-between">
      <img src="../../assets/image/jpg/sneakers-8.jpg" class="w-24" alt="sneakers-8" />
      <div class="flex flex-col items-start">
        <h4 class="w-44">Мужские Кроссовки Nike Air Max 270</h4>
        <b>12 999 руб.</b>
      </div>
      <button class="opacity-40 hover:opacity-100 transition">
        <IconClosed />
      </button>
    </div>
  </li>
</template>

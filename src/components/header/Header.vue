<script setup></script>

<template>
  <div class="bg flex items-center justify-between rounded-3xl m-8 pl-20 relative">
    <img
      class="absolute top-4 left-4"
      src="../../assets/image/png/adidas-logo.png"
      alt="adidas-logo"
    />
    <div class="flex flex-col">
      <h1 class="font-bold text-5xl text-lime-500 my-12">
        Stan Smith<span class="text-black">,</span> <br /><span class="text-black">Forever!</span>
      </h1>
      <button
        class="text-xl uppercase py-4 px-12 mb-12 rounded-3xl text-white bg-lime-300 hover:bg-lime-500 transition"
      >
        Купить
      </button>
    </div>
    <div>
      <img class="rounded-3xl" src="../../assets/image/jpg/header-image.jpg" alt="header-image" />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #f4efe9;
}
</style>

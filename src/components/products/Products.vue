<script setup>
import IconSearch from '../icons/IconSearch.vue'
import ProductsList from '../products/ProductsList.vue'
</script>

<template>
  <div>
    <div class="flex flex-row justify-between p-10">
      <h2 class="text-4xl font-bold">Все кроссовки</h2>
      <div class="flex flex-row">
        <select
          class="border border-slate-200 text-slate-400 rounded-md outline-none py-2 px-2 mr-4"
        >
          <option>По названию</option>
          <option>По цене (возрастанию)</option>
          <option>По цене (убыванию)</option>
        </select>
        <div class="relative">
          <IconSearch class="absolute top-3 left-3" />
          <input
            type="search"
            placeholder="Поиск..."
            class="border border-slate-200 rounded-md outline-none py-2 pl-9 pr-2"
          />
        </div>
      </div>
    </div>

    <div class="">
      <ProductsList />
    </div>
  </div>
</template>

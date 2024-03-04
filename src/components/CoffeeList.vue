<script lang="ts" setup>
import { onMounted, ref, type Coffee, type Ref } from 'vue'
import CoffeeItem from './CoffeeItem.vue'
import { useCoffeeFilter } from '@/stores/coffee_filter'
const coffee_filter = useCoffeeFilter()
const coffee_item: Ref<Coffee[]> = ref([])

const getCoffeeList = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
  )
  response.json().then((res) => {
    console.log(res)
    coffee_item.value = res
  })
}

onMounted(() => {
  getCoffeeList()
})
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="flex gap-10 my-10 mx-auto">
      <button
        @click="coffee_filter.setCoffeeAvailable(true)"
        class="transition-all duration-500"
        :class="coffee_filter.isCoffeeAvailable ? 'bg-[#6F757C]' : ''"
      >
        All Products
      </button>
      <button
        @click="coffee_filter.setCoffeeAvailable(false)"
        class="transition-all duration-500"
        :class="!coffee_filter.isCoffeeAvailable ? 'bg-[#6F757C]' : ''"
      >
        Available Now
      </button>
    </div>
    <div class="flex flex-wrap justify-center items-center gap-20">
      <CoffeeItem
        v-for="coffee in coffee_item.filter((coffee) =>
          coffee_filter.isCoffeeAvailable ? true : coffee.available
        )"
        :coffee="coffee"
        :key="coffee.id"
      />
    </div>
  </div>
</template>

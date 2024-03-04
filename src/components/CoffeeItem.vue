<script lang="ts" setup>
import type { Coffee } from 'vue'
import FullRateSVG from '@/assets/svgs/Star_fill.svg'
import RateSVG from '@/assets/svgs/Star.svg'

const { coffee } = defineProps({
  coffee: {
    type: Object as () => Coffee
  }
})
</script>

<template>
  <div v-if="coffee" class="relative">
    <div
      v-if="coffee?.popular"
      class="absolute top-2 left-2 rounded-full bg-[#F6C768] px-3 py-2 DM_Sans_Label"
    >
      Popular
    </div>
    <img :src="coffee?.image" alt="coffee_pic" class="rounded-2xl mb-4" />
    <div class="flex justify-between">
      <div class="flex flex-col gap-2">
        <label> {{ coffee?.name }}</label>
        <div v-if="coffee?.rating" class="flex gap-2 items-center">
          <img :src="FullRateSVG" alt="" />{{ coffee?.rating }}
          <span v-if="coffee.votes" class="DM_Sans_SmallText">({{ coffee.votes }} votes)</span>
        </div>
        <span v-else class="text-[#6F757C] text-xs flex items-center gap-2"
          ><img :src="RateSVG" alt="" /> No Ratings</span
        >
      </div>
      <div class="flex flex-col gap-2">
        <div class="bg-[#BEE3CC] px-3 py-2 rounded-lg DM_Sans_PriceText">{{ coffee?.price }}</div>
        <span v-if="!coffee?.available" class="text-[#ED735D]">Sold out</span>
      </div>
    </div>
  </div>
  <div v-else class="bg-[#ED735D] p-10 rounded-xl text-black">The coffee information is not correct!</div>
</template>

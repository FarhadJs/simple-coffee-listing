<script lang="ts" setup>
import LineIcon from '@/assets/svgs/vector.svg'
</script>

<template>
  <div class="w-full flex flex-col items-center relative overflow-hidden p-10">
    <img :src="LineIcon" class="relative -top-5 -right-36" />
    <div class="absolute top-20 flex flex-col items-center justify-center">
      <h1 class="DM_Sans_Heading relative z-10">Our Collection</h1>
      <p class="DM_Sans_Body text-center relative z-10 lg:w-[500px]">
        Introducing our Coffee Collection, a selection of unique coffees from different roast types
        and origins, expertly roasted in small batches and shipped fresh weekly.
      </p>
    </div>
  </div>
</template>
<style></style>

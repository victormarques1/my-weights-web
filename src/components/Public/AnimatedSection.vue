<template>
  <section
    class="hidden md:flex w-1/2 items-center opacity-90 justify-center bg-gradient-to-br from-primary-800 via-primary to-purple-300 relative overflow-hidden"
  >
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl z-0"></div>
    <Vue3Lottie
      :animation-data="animatedVideo"
      :loop="true"
      :auto-play="true"
      class="w-3/4 relative z-20"
    />
  </section>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import animatedVideo from '../../assets/images/gif.json'

defineOptions({
  name: 'AnimatedSection',
})
</script>

<template>
  <div>

    <NuxtPage />

  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 3Scode` : '3Scode';
  }
})
</script>
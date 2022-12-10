<template>

  <NuxtLayout name="blog">
    <BlogArchiveContent :content="content.contents" />
  </NuxtLayout>

</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const config = useRuntimeConfig()
const { data: content }: any = await useFetch("/blog?limit=1000", {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});



</script>

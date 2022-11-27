<template>
  
  <NuxtLayout name="blog">
    <BlogArchiveContent :content="content.contents"/>
  </NuxtLayout>
  
</template>

<script setup>
  definePageMeta({
  layout: false
 })

  const { data:content } = await useFetch("/blog?limit=1000", {
    baseURL: "https://30leasp9ut.microcms.io/api/v1",
    headers: {
      "X-MICROCMS-API-KEY": "7972d8450d564811ab69ecebd5e3dda2bb7d",
    },
  });
  
  
 



</script>

<template>
  
  <NuxtLayout name="blog">
    <BlogCategoryTitle :category="category"/>
    <BlogArchiveContent :content="content"/>
  </NuxtLayout>
  
</template>

<script setup>
  definePageMeta({
  layout: false
 })

  const route = useRoute();
  const slug = route.params.slug;

  const { data:contents } = await useFetch(`/blog?filters=category[equals]${slug};limit=1000`, {
    baseURL: "https://30leasp9ut.microcms.io/api/v1",
    headers: {
      "X-MICROCMS-API-KEY": "7972d8450d564811ab69ecebd5e3dda2bb7d",
    },
  });
  const { data:category } = await useFetch(`/categories/${slug}`, {
    baseURL: "https://30leasp9ut.microcms.io/api/v1",
    headers: {
      "X-MICROCMS-API-KEY": "7972d8450d564811ab69ecebd5e3dda2bb7d",
    },
  });



  const contentsObj = contents.value.contents
  const content = []
  for (let i = 0; i < contentsObj.length; i++) {
    if(contentsObj[i].category.id === slug) {
      content.push(contentsObj[i])
    }
  }
  




 



</script>

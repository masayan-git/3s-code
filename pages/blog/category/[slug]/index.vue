<template>
  <NuxtLayout name="blog">
    <BlogCategoryTitle :category="category" />
    <BlogArchiveContent :content="content" />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

const config = useRuntimeConfig()
const route = useRoute();
const slug = route.params.slug;

const { data: contents }: any = await useFetch(`/blog?filters=category[equals]${slug};limit=1000`, {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
const { data: category }: any = await useFetch(`/categories/${slug}`, {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});

const contentsObj = contents.value.contents
const content: string[] = []
for (let i = 0; i < contentsObj.length; i++) {
  if (contentsObj[i].category.id === slug) {
    content.push(contentsObj[i])
  }
}
</script>

<template>
  <section class="blog">
    <div class="inner blog__inner">
      <div class="blog__titleContainer">
        <ModulesSectionTitle />
      </div>
      <div class="blog__cards">
        <BlogCard v-for="content in data.contents" :content="content" />
      </div>
      <div class="blog__button">
        <ModulesButton />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const lowerMainViewTitle: string = 'ブログ'
const lowerMainViewTitleRuby: string = 'BLOG'
provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)

const buttonText: string = '記事一覧を見る'
const buttonSlug: string = '/blog'
provide('buttonText', buttonText)
provide('buttonSlug', buttonSlug)

const { data } = await useFetch("/blog?limit=3", {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});

</script>

<style lang="scss">
.blog {
  padding-top: rem(130);
  padding-bottom: rem(100);

  @include mq(md) {
    padding-top: rem(200);
    padding-bottom: rem(120);
  }
}

.blog__inner {
  @include mq(md) {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: auto auto;
  }
}

.blog__titleContainer {
  @include mq(md) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
}


.blog__cards {
  margin-top: rem(60);
  display: grid;
  row-gap: rem(30);

  @include mq(md) {
    margin-top: rem(130);
    grid-template-columns: repeat(3, 1fr);
    column-gap: rem(45);
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
}

.blog__button {
  margin-top: rem(75);
  text-align: right;

  @include mq(md) {
    margin-top: 0;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
}
</style>
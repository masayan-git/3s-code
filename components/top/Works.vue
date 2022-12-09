
<template>
  <div class="works">
    <div class="inner works__inner">
      <div class="works__titleContainer">
        <ModulesSectionTitle />
      </div>
      <div class="works__cards">
        <WorksCard v-for="content in data.contents" :content="content" />
      </div>
      <div class="works__button">
        <ModulesButton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const lowerMainViewTitle: string = '制作実績'
const lowerMainViewTitleRuby: string = 'WORKS'
provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)

const buttonText: string = '実績一覧を見る'
const buttonSlug: string = '/blog'
provide('buttonText', buttonText)
provide('buttonSlug', buttonSlug)

//microCMSから引っ張ってきた記事情報
const { data } = await useFetch("/works?limit=3", {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});



</script>

<style lang="scss">
.works {
  background-color: $white;
  padding-top: rem(130);
  padding-bottom: rem(175);
  border-radius: 0px 100px 0px 0px;
  margin-top: rem(-70);

  @include mq(md) {
    padding-top: rem(210);
    margin-top: rem(-200);
    padding-bottom: rem(370);
    border-radius: 0px 200px 0px 0px;
  }
}

.works__inner {
  @include mq(md) {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-template-rows: auto auto;

  }
}

.works__titleContainer {
  @include mq(md) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
}



.works__button {
  margin-top: rem(75);
  text-align: right;

  @include mq(md) {
    margin-top: 0;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
}
</style>
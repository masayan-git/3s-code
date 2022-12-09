<template>

  <NuxtLayout name="works">
    <div class="lowerWorks">
      <div class="inner lowerWorks__inner">
        <WorksCard v-for="content in worksCardItems" :content=content />
      </div>
      <div class="moreButton">
        <button class="moreButton__button" v-if="(worksCardItems.length - worksCount) >= 0"
          @click="worksIsMore">もっとみる</button>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { data }: any = await useFetch("/works?limit=100", {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
const worksCount = ref(9)
const worksCardItems = computed(() => {
  const worksCard = data.value.contents
  return worksCard.slice(0, worksCount.value)
})

const worksIsMore = () => {
  worksCount.value += 6
}

</script>

<style lang="scss">
.moreButton {
  text-align: center;
  margin-top: rem(40);
}

.moreButton__button {
  display: inline-block;
  color: $white;
  padding: rem(20);
  width: rem(300);
  background-color: $main-color;
  border-radius: 30px;
}

.lowerWorks {
  margin-top: rem(50);
  padding-bottom: rem(140);

  @include mq(md) {
    padding-bottom: rem(260);
    margin-top: rem(80);
  }
}

.lowerWorks__inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(300), 1fr));
  row-gap: rem(30);
  column-gap: rem(30);
}
</style>


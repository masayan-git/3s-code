<template>
  <article class="works__card">
    <NuxtLink :to="`/works/${content.content.id}`" class="works__cardLink">
      <div class="works__cardImage">
        <img :src=content.content.eyecatch.url alt="">
      </div>
      <div class="works__cardTextArea">
        <h1 class="works__cardTitle">{{ content.content.title }}</h1>
        <p class="works__cardTextUrl">{{ content.content.url }}</p>
      </div>
      <p>{{ content.content.content }}</p>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">

const content = defineProps({
  content: Object
})

</script>

<style lang="scss">
.works__cards {
  margin-top: rem(65);
  display: grid;
  row-gap: rem(30);

  @include mq(md) {
    grid-row: 2 / 3;
    grid-column: 1 / 3;
    margin-top: rem(120);
    grid-template-columns: repeat(3, 1fr);
    column-gap: rem(30);
  }
}

.works__card {
  box-shadow: 0px 5px 25px #1B6C871A;
  border-radius: 30px;
}

.works__cardLink {
  display: block;
}

.works__cardImage {
  aspect-ratio: 335 / 230;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    border-radius: 30px 30px 0 0;
  }
}

.works__cardTextArea {
  padding: rem(20) rem(30);
  display: grid;
  row-gap: rem(10);
}

.works__cardTitle {
  font-size: rem(20);
  font-weight: $medium;
}

.works__cardTextUrl {
  font-size: rem(12);
  color: $t-blue;
}
</style>
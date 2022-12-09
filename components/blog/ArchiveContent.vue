<template>
  <div class="blogContents__cards">
    <BlogCard v-for="content in cardItems" :content="content" />
    <div class="moreButton">
      <button class="moreButton__button" v-if="(cardItems.length - count) >= 0" @click="isMore">もっとみる</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = defineProps({
  content: Object
})

const count = ref(5)
const cardItems = computed(() => {
  const card: any = content.content
  return card.slice(0, count.value)
})

const isMore = () => {
  count.value += 5
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

.blogContents__cards {
  margin-top: rem(30);
  display: grid;
  row-gap: rem(30);

  @include mq(md) {
    .blog__card {}

    .blog__cardLink {
      display: flex;
    }

    .blog__cardImage {
      aspect-ratio: 380 / 270;
      width: rem(380);
      flex-shrink: 0;

    }

    .blog__cardContent {
      padding: rem(30);
    }

    .blog__cardTitle {}

    .blog__cardCategoryArea {
      margin-top: rem(5);
    }

    .blog__cardCategory {}

    .blog__cardText {
      margin-top: rem(5);
    }

  }

}
</style>
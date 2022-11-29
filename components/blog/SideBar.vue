<template>
<section class="sideBar">
  <BlogSideBarProfile />
  <div class="sideBar__category">
    <div class="sideBar__categoryInner">
      <h2 class="sideBar__categoryName">カテゴリー</h2>
      <ul class="sideBar__categoryItems">
        <li v-for="category in category.contents" class="sideBar__categoryItem">
          <NuxtLink :to="`/blog/category/${category.id}`" class="sideBar__categoryItemLink">{{category.name}}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- <div class="sideBar__category">
    <div class="sideBar__categoryInner">
      <h2 class="sideBar__categoryName">タグ</h2>
      <ul class="sideBar__tagItems">
        <li class="sideBar__tagItem">
          <a href="" class="sideBar__tagItemLink">オススメ機能</a>
        </li>
        <li class="sideBar__tagItem">
          <a href="" class="sideBar__tagItemLink">オススメ機能</a>
        </li>
        <li class="sideBar__tagItem">
          <a href="" class="sideBar__tagItemLink">スマホ</a>
        </li>
        <li class="sideBar__tagItem">
          <a href="" class="sideBar__tagItemLink">デザイン</a>
        </li>
      </ul>
    </div>
  </div> -->
</section>
</template>

<script setup>
const config = useRuntimeConfig()
const { data:category } = await useFetch("/categories", {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
</script>

<style lang="scss">
.sideBar {
  display: grid;
  row-gap: rem(30);

  @include mq(md) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
}

.sideBar__category {
  box-shadow: 0px 5px 25px #1B6C871A;
  border-radius: 40px;
}

.sideBar__categoryInner {
  padding: rem(35) rem(30);
}

.sideBar__categoryName {
  font-size: rem(16);
  font-weight: $bold;
  line-height: 1;
  padding-bottom: rem(10);
  position: relative;
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: $main-color;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 2px;
    background-color: $accent-color;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.sideBar__categoryItems {
  margin-top: rem(22);
  display: grid;
  row-gap: rem(30);
}

.sideBar__categoryItem {

}

.sideBar__categoryItemLink {
  font-size: rem(16);
  line-height: 1;
  padding-left: rem(30);
  position: relative;

  &::before {
    content: "";
    display: block;
    width: rem(16);
    height: rem(16);
    background-image: url("@/public/blog/category-arrow.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}



.sideBar__tagItems {
  margin-top: rem(15);
  display: flex;
  flex-wrap: wrap;
  column-gap: rem(10);
  row-gap: rem(5);
}

.sideBar__tagItem {
  width: fit-content;
}

.sideBar__tagItemLink {
  font-size: rem(12);
  font-weight: $normal;
  color: $t-blue;
  line-height: 1;
  padding: rem(5) rem(10) rem(6) rem(20);
  display: block;
  border: 1px solid $t-blue;
  border-radius: 3px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: rem(12);
    height: rem(12);
    background-image: url("@/public/blog/tag-icon.svg");
    position: absolute;
    left: rem(5);
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
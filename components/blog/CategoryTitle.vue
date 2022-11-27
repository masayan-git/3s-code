<template>
  <div class="blogContents__category">
    <h2 data-category="カテゴリー" class="blogContents__categoryTitle">{{category.category.name}}</h2>
    
  </div>
</template>

<script setup>
const category = defineProps({
  category: Object
})
</script>

<style lang="scss">
.blogContents__category {
  
}

.blogContents__categoryTitle {
  font-size: rem(24);
  font-weight: $bold;
  padding-top: rem(25);
  position: relative;
  &::before {
    content: attr(data-category);
    font-size: rem(11);
    font-weight: $bold;
    color: $t-blue;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
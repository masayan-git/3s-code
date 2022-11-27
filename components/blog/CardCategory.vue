<template>
  <span class="blog__cardCategory">{{category.category.name}}</span>
</template>

<script setup>
  const category = defineProps({
    category: Object
  })
  
</script>

<style lang="scss">
.blog__cardCategory {
  display: inline-block;
  font-size: rem(12);
  font-weight: $normal;
  line-height: 1;
  padding: rem(5) rem(8);
  background-color: $main-color;
  border-radius: 12px;
  color: $white;
}
</style>
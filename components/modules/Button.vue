<template>
  <NuxtLink :to=buttonSlug class="button">{{ buttonText }}<span></span></NuxtLink>
</template>

<script setup land="ts">
const buttonText = inject('buttonText')
const buttonSlug = inject('buttonSlug')
</script>

<style lang="scss">
.button {
  display: inline-block;
  font-size: rem(16);
  line-height: 1;
  padding-right: rem(100);
  position: relative;
  font-weight: $bold;

  &::before {
    content: "";
    display: block;
    width: rem(55);
    height: 2px;
    background-color: $t-blue;
    position: absolute;
    right: rem(35);
    top: rem(4);
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  &::after {
    content: "";
    display: inline-block;
    width: rem(15);
    height: rem(15);
    border-right: 2px solid $t-blue;
    position: absolute;
    right: rem(36);
    top: rem(4);
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    transform: rotate(-45deg);
  }

  span {
    display: block;
    width: rem(60);
    height: rem(60);
    position: absolute;
    border-radius: 50%;
    border: 2px solid $t-blue;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>
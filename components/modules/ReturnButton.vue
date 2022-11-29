<template>
  <NuxtLink :to="returnButtonSlug" class="returnButton">{{returnButtonText}}<span></span></NuxtLink>
  
</template>

<script setup>
  const returnButtonText = inject('returnButtonText')
  const returnButtonSlug = inject('returnButtonSlug')

  
</script>

<style lang="scss">
.returnButton {
  display: inline-block;
  font-size: rem(16);
  line-height: 1;
  padding-left: rem(100);
  position: relative;
  font-weight: $bold;

  &::before {
    content: "";
    display: block;
    width: rem(55);
    height: 2px;
    background-color: $t-blue;
    position: absolute;
    left: rem(35);
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
    border-top: 2px solid $t-blue;
    position: absolute;
    left: rem(36);
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
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }
}

</style>
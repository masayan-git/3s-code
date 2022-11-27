
<template>
  <h2 :data-ruby=lowerMainViewTitleRuby class="section__title">{{ lowerMainViewTitle}}</h2>
</template>

<script setup>
  const lowerMainViewTitle = inject('lowerMainViewTitle')
  const lowerMainViewTitleRuby = inject('lowerMainViewTitleRuby')
</script>

<style lang="scss">

//セクションタイトル
.section__title {
  font-size: rem(16);
  line-height: 1;
  padding-left: rem(30);
  position: relative;
  z-index: 1;
  letter-spacing: rem(1.7);
  &::before {
    content: "";
    display: block;
    height: rem(20);
    width: 2px;
    background-color: $accent-color;
    position: absolute;
    left: rem(5);
    top: 50%;
    transform: translateY(-50%) rotate(30deg);
  }
}

.section__title[data-ruby] {
  &::after {
    content: attr(data-ruby);
    display: block;
    font-family: $alphabet-font-family;
    font-weight: $semi-bold;
    font-size: rem(64);
    color: #E3F4F9B3;
    position: absolute;
    top: rem(-75);
    left: 0;

    @include mq(md) {
      font-size: rem(180);
      top: rem(-100);
      left: 0;
      letter-spacing: .04em;
      text-indent: -.04em;
      z-index: -1;
    }
  }
}




</style>
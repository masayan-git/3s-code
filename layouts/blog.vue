<template>
  <NuxtLoadingIndicator />
  <ModulesHeader />
  <ModulesLowerMainView />
  <main class="blogContents">
    <div class="inner blogContents__inner">
      <div class="blogContents__contents">
        <slot />
      </div>
      <BlogSideBar />
    </div>
  </main>
  <ModulesFooter />
</template>

<script setup>
const lowerMainViewTitle = 'ブログ'
const lowerMainViewTitleRuby = 'BLOG'

provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)
</script>

<style lang="scss">
.blogContents__contents {
  @include mq(md) {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }
}

.blogContents {
  padding-bottom: rem(120);
}

.blogContents__inner {
  display: grid;
  row-gap: rem(200);
  margin-top: rem(50);

  @include mq(md) {
    grid-template-columns: 1fr rem(370);
    grid-row: max-content auto;
    column-gap: rem(30);
    row-gap: 0;
    margin-top: rem(83);
  }
}
</style>
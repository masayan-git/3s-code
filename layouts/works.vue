<template>
  <NuxtLoadingIndicator />
  <div class="layoutsWorks">
    <ModulesHeader />
    <ModulesLowerMainView />
    <slot />
    <TopContact />
    <ModulesFooter />
  </div>

</template>

<script setup lang="ts">
const lowerMainViewTitle: string = '制作実績'
const lowerMainViewTitleRuby: string = 'WORKS'
provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)

//SEO対策
useHead({
  title: lowerMainViewTitle,
  meta: [
    //実績で公開しているサイトに影響が出ないようnoindexを設定
    { name: 'robots', content: 'noindex' }
  ]
})
</script>

<style lang="scss">
.layoutsWorks {
  .contact {
    background: transparent linear-gradient(180deg, #E3F4F9 0%, #F5FDFF 100%) 0% 0% no-repeat padding-box;
  }

  .contact__description,
  .contact__note {
    color: $t-black;
  }
}
</style>


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

<script setup>
  const lowerMainViewTitle = '制作実績'
  const lowerMainViewTitleRuby = 'WORKS'
  provide('lowerMainViewTitle', lowerMainViewTitle)
  provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)
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


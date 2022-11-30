<template>
  <div class="lowerMainView">
    <div class="lowerMainView__inner">
      <div class="wideInner">
        <ModulesSectionTitle />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.lowerMainView {

  .section__title[data-ruby] {
    &::after {
      color: $white;
    }
  }
}

.lowerMainView__inner {
  padding-top: rem(200);
  padding-bottom: rem(40);
  background: #E3F4F9 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 100px 0px;

  @include mq(md) {
    padding-top: rem(267);
    padding-bottom: rem(95);
    border-radius: 0px 0px 200px 0px;
  }
}
</style>
<template>
  <NuxtLayout name="lower">
    <div class="lowerContact">
      <div class="minInner lowerContact__inner">
        <div class="lowerContact__textArea">
          <p class="lowerContact__completeText">送信が完了しました。</p>
          <p class="lowerContact__text">お問い合わせいただきましてありがとうございます。</p>
          <p class="lowerContact__text">24時間以内にご連絡をいたしますので、今しばらくお待ちくださいませ。</p>
        </div>
        <div class="lowerContact__returnTop">
          <ModulesButton />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const lowerMainViewTitle: string = 'お問い合わせ'
const lowerMainViewTitleRuby: string = 'CONTACT'
provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)

const buttonText: string = 'TOPへ戻る'
const buttonSlug: string = '/'
provide('buttonText', buttonText)
provide('buttonSlug', buttonSlug)
</script>

<style lang="scss">
.lowerContact__completeText {
  font-size: rem(22);
  font-weight: $bold;
  line-height: 1.45;
  margin-bottom: rem(23);
}

.lowerContact__returnTop {
  margin-top: rem(60);
  text-align: right;
}
</style>
<template>

  <section class="service">
    <div class="inner">
      <ModulesSectionTitle />
      <div class="service__cards">
        <article class="service__card">
          <div class="service__cardInner">
            <h1 data-sub-title="SERVICE / 01" class="service__cardTitle">コーディング</h1>
            <div class="service__cardTextArea">
              <p class="service__cardText">HTML CSS JavaScriptを使用し、デザインカンプからのコーディングを行います。「予測しやすい」「再利用しやすい」「保守しやすい」「拡張しやすい」CSS設計を意識しメンテナンスしやすいコーディングを心がけております。</p>
            </div>
          </div>
        </article>
        <article class="service__card">
          <div class="service__cardInner">
            <h1 data-sub-title="SERVICE / 02" class="service__cardTitle">WordPress</h1>
            <div class="service__cardTextArea">
              <p class="service__cardText">カスタム投稿、カスタムフィールド、フォームの実装可能です。<br>クライアント様が利用しやすいよう配慮し実装致します。実装方法のご指示がない場合は私からご提案させて頂きます。</p>
            </div>
          </div>
        </article>
        <article class="service__card">
          <div class="service__cardInner">
            <h1 data-sub-title="SERVICE / 03" class="service__cardTitle">機能追加・修正作業</h1>
            <div class="service__cardTextArea">
              <p class="service__cardText">機能追加、サイトの画像差し替え、レイアウト調整、などの作業を行います。<br>どんな小さな作業でも承りますので、お気軽にお問い合わせください。</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

</template>

<script setup>
  const lowerMainViewTitle = 'サービス'
  const lowerMainViewTitleRuby = 'SERVICE'

  provide('lowerMainViewTitle', lowerMainViewTitle)
  provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)
</script>

<style lang="scss">
.service {
  padding-top: rem(240);
  padding-bottom: rem(180);
  margin-top: rem(-90);
  position: relative;
  z-index: -1;
  background: transparent linear-gradient(180deg, #E3F4F9 0%, #F5FDFF 100%) 0% 0% no-repeat padding-box;
  background: transparent linear-gradient(180deg, #E3F4F9 0%, #F5FDFF 100%) 0% 0% no-repeat padding-box;
  opacity: 1;

  @include mq(md) {
    padding-top: rem(462);
    padding-bottom: rem(400);
    margin-top: rem(-200);
  }
  .section__title {
    
  }
  .section__title[data-ruby] {
    &::after {
      color: white;
    }
  }

  .service__cards {
    margin-top: rem(50);
    display: grid;
    row-gap: rem(30);
    @include mq(md) {
      margin-top: rem(120);
      grid-template-columns: repeat(3, 1fr);
      column-gap: rem(30);
    }
  }

  .service__card {
    background-color: $white;
    border-radius: 30px;
    box-shadow: 0px 5px 25px #1B6C871A;

    @include mq(md) {
      &:nth-of-type(2) {
        
      }
    }
  }

  .service__cardInner {
    padding: rem(35) rem(30) rem(30) rem(30);
    @include mq(md) {
      padding: rem(60) rem(50) rem(50) rem(50);
    }
  }

  .service__cardTitle {
    font-size: rem(24);
    font-weight: $bold;
    padding-top: rem(20);
  }

  .service__cardTitle[data-sub-title] {
    position: relative;
    &::before {
      content: attr(data-sub-title);
      display: inline-block;
      font-size: rem(11);
      font-weight: $bold;
      color: $accent-color;
      position: absolute;
      left: 0;
      top: 0;
      letter-spacing: rem(0.55);
    }
  }

  .service__cardTextArea {
    margin-top: rem(24);
    @include mq(md) {
      margin-top: rem(40);
    }
  }

  .service__cardText {
    font-size: rem(20);
    line-height: 1.75;
  }





}

</style>
<template>
  <section id="about" class="about">
    <span class="mainView__subIconRight"></span>
    <div class="about__inner">
      <div class="about__sectionTitleInner">
        <ModulesSectionTitle />
      </div>
      <div class="aboutMessage">
        <div class="aboutMessage__inner">
          <div class="aboutMessage__imageArea">
            <div class="about__image">
              <img src="/top/about1.jpg" alt="">
            </div>
          </div>
          <div class="aboutMessage__content">
            <div class="inner aboutMessage__contentInner">
              <h3 class="about__title">代表メッセージ</h3>
              <div class="aboutMessage__textArea">
                <p class="about__text">Webコーダーとして活動しております。デザインは、「想い」そのものだと考えております。その「想い」をWebに表現できることを感謝し、日々業務に取り組んでおります。
                </p>
                <p class="about__text">屋号名の「3S」は三方良し（three way
                  satisfaction）を略したものです。私にとっての「三方」とは、制作会社様・クライアント様・Webサイトの利用者様です。こちらの方々に満足（satisfaction）して頂きたいという想いで名づけました。
                </p>
              </div>
              <div class="aboutMessage__signature">
                <p class="aboutMessage__signatureText">3Scode 代表 庄司雅幸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="aboutPromise">
        <div class="aboutPromise__inner">
          <div class="aboutPromise__imageArea">
            <div class="about__image">
              <img src="/top/about2.jpg" alt="">
            </div>
          </div>
          <div class="aboutPromise__contents">
            <div class="inner aboutPromise__contentsInner">
              <h3 class="about__title">3つのお約束</h3>
              <div class="aboutPromise__content">
                <h4 data-ruby="PROMISE / 01" class="aboutPromise__contentTitle">納期厳守</h4>
                <p class="about__text">御社のパートナーとしてプロジェクトの一端をお任せ頂いていることを強く意識し、納期を厳守致します。</p>
              </div>
              <div class="aboutPromise__content">
                <h4 data-ruby="PROMISE / 02" class="aboutPromise__contentTitle">報告・連絡・相談・再確認</h4>
                <p class="about__text">報告・連絡・相談に加えて再確認を行います。打ち合わせの議事録を取り、認識のずれがないか再確認をさせていただきます。</p>
              </div>
              <div class="aboutPromise__content">
                <h4 data-ruby="PROMISE / 03" class="aboutPromise__contentTitle">不明点を自己完結しない</h4>
                <p class="about__text">ご担当者様の意図しない実装をしないためにも不明点を明確にしご質問の上対応いたします。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const lowerMainViewTitle = '3scode について'
const lowerMainViewTitleRuby = 'ABOUT'

provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)
</script>

<style lang="scss">
.about {
  position: relative;
  z-index: 2;
}

.about__inner {
  padding-top: rem(170);
  padding-bottom: rem(80);
  background-color: $white;
  border-radius: 0 0 0 100px;

  @include mq(md) {
    padding-top: rem(210);
    padding-bottom: rem(140);
    border-radius: 0 0 0 200px;
  }
}

.about__sectionTitleInner {
  padding: 0 rem(20);

  @include mq(md) {
    max-width: 1050px;
    padding: 0 25px;
    width: 100%;
    margin: 0 auto;
  }
}

.about__title {
  font-size: rem(22);
  font-weight: $bold;
  letter-spacing: rem(2.86);
  color: $t-blue;
}

.about__text {
  font-size: rem(16);
  line-height: 2;
}



//代表メッセージ
.aboutMessage {
  margin-top: rem(55);

  @include mq(md) {
    margin-top: rem(120);
  }
}

.aboutMessage__inner {

  @include mq(md) {
    display: grid;
    grid-template-columns: 50% rem(460);
    grid-template-rows: auto max-content auto;
  }
}

.aboutMessage__imageArea {
  padding-right: rem(20);

  @include mq(md) {
    padding-right: 0;

    grid-row: 1 / 4;
    grid-column: 1 / 2;

  }

  .about__image {
    @include mq(md) {
      height: 100%;
    }

    img {
      border-radius: 0 30px 30px 0;

      @include mq(md) {
        object-fit: cover;
      }
    }
  }
}

.about__image {
  aspect-ratio: 355/ 230;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }
}

.aboutMessage__content {
  margin-top: rem(40);

  @include mq(md) {
    margin-top: 0;
    padding-left: rem(35);
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
}

.aboutMessage__contentInner {
  display: grid;
  row-gap: rem(25);

  @include mq(md) {}
}

.aboutMessage__textArea {
  display: grid;
  row-gap: rem(50);
}

.aboutMessage__signature {
  text-align: right;
}

.aboutMessage__signatureText {
  font-size: rem(18);
}

//３つの約束
.aboutPromise {
  margin-top: rem(50);

  @include mq(md) {
    margin-top: rem(100);
    max-width: rem(1050);
    padding-right: rem(25);
    padding-left: rem(25);
    margin-left: auto;
    margin-right: auto;


  }
}

.aboutPromise__inner {
  @include mq(md) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;

  }
}

.aboutPromise__imageArea {
  padding-left: rem(20);

  @include mq(md) {
    padding-left: rem(60);

    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  .about__image {

    @include mq(md) {
      height: 100%;
      aspect-ratio: 440 / 506;
    }

    img {
      border-radius: 30px 0 0 30px;

      @include mq(md) {
        border-radius: 30px;
      }
    }
  }
}



.aboutPromise__contents {
  margin-top: rem(40);

  @include mq(md) {
    margin-top: 0;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
}

.aboutPromise__contentsInner {}

.aboutPromise__content {
  margin-top: rem(50);
  display: grid;
  row-gap: rem(15);
}

.aboutPromise__contentTitle {
  font-size: rem(20);
  font-weight: $bold;
  letter-spacing: rem(2.6);
}

.aboutPromise__contentTitle[data-ruby] {
  position: relative;

  &::before {
    content: attr(data-ruby);
    display: block;
    font-size: rem(11);
    font-weight: $bold;
    letter-spacing: rem(0.55);
    color: $t-blue;
    position: absolute;
    left: 0;
    top: rem(-20);
  }
}
</style>
<template>
  <section class="contact">
    <h2 class="contact__title">CONTACT</h2>
    <div class="inner">
      <div class="contact__content">
        <p class="contact__description">Webコーディング業務の<br class="is-sp">お問い合わせはこちら</p>
        <p class="contact__note">お気軽にご相談ください。24時間以内に返答させていただきます。</p>
        <div class="contact__buttonArea">
          <a href="" class="contact__button">
            <span class="contact__buttonIcon"></span>
            <span class="contact__buttonText">お問い合わせする</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss">
.contact {
  background: transparent linear-gradient(180deg, #60BFDF 0%, #B6E2F0 100%) 0% 0% no-repeat padding-box;
  position: relative;
  padding-top: rem(90);
  padding-bottom: rem(90);
  @include mq(md) {
    padding-top: rem(170);
    padding-bottom: rem(100);
  }
}

.contact__title {
  font-size: rem(65);
  font-weight: $semi-bold;
  letter-spacing: rem(2.6);
  text-align: center;
  position: absolute;
  top: rem(-50);
  left: 0;
  right: 0;
  margin: 0 auto;
  color: $t-blue;
  font-family: $alphabet-font-family;

  @include mq(md) {
    font-size: rem(180);
    top: rem(-140);
  }
}

.contact__content {
  text-align: center;
 
}

.contact__description {
  font-size: rem(22);
  font-weight: $bold;
  line-height: 1.36;
  color: $white;

  @include mq(md) {
    font-size: rem(24);
  }
}

.contact__note {
  margin-top: rem(20);
  font-size: rem(16);
  font-weight: $normal;
  line-height: 1.187;
  color: $white;

  @include mq(md) {
    margin-top: rem(25);
  }
}

.contact__buttonArea {
  margin-top: rem(30);
  max-width: rem(335);
  margin-left: auto;
  margin-right: auto;
}

.contact__button {
  display: flex;
  column-gap: rem(15);
  justify-content: center;
  align-items: center;
  background-color: $accent-color;
  padding: rem(20) 0;
  border-radius: 40px;
}

.contact__buttonIcon {
  display: block;
  width: rem(24);
  height: rem(19);
  background-image: url("/top/contact-icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

.contact__buttonText {
  line-height: 1;
  font-size: rem(16);
  font-weight: $bold;
  color: $white;
}


</style>
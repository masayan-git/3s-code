<template>
  <NuxtLayout name="lower">
    <div class="lowerContact">
      <div class="minInner lowerContact__inner">
        <div class="lowerContact__textArea">
          <p class="lowerContact__text">以下の内容で送信します。</p>
          <p class="lowerContact__text">内容をご確認いただき、よろしければ送信ボタンを押してください。</p>
        </div>
        <div class="lowerContact__content">
          <form>
            <div class="lowerContact__contentForm">
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">会社名</p>
                <p class="lowerContact__confirmText">{{ formData.company }}</p>
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">ご担当社名</p>
                <p class="lowerContact__confirmText">{{ formData.name }}</p>
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">メールアドレス</p>
                <p class="lowerContact__confirmText">{{ formData.email }}</p>
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">電話番号</p>
                <p class="lowerContact__confirmText">{{ formData.email }}</p>
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">ご相談内容</p>
                <p class="lowerContact__confirmText">{{ formData.content }}</p>
              </div>
            </div>
            <div class="lowerContact__contentButton">
              <NuxtLink to="/contact" class="lowerContact__button lowerContact__button--return">入力画面に戻る</NuxtLink>
              <button type="submit" class="lowerContact__button">送信</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['form'],
})
const lowerMainViewTitle = 'お問い合わせ'
const lowerMainViewTitleRuby = 'CONTACT'
provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)

const formData = formState();


</script>

<style lang="scss">
[v-cloak] {
  display: none;
}

.lowerContact__confirmText {
  font-size: rem(16);
  color: #666666;
  margin-top: rem(18);
  line-height: 2;
}

.lowerContact {
  margin-top: rem(50);
  padding-bottom: rem(50);

  @include mq(md) {
    padding-bottom: rem(120);
  }
}

.lowerContact__inner {}

.lowerContact__textArea {}

.lowerContact__text {
  font-size: rem(18);
  font-weight: $normal;
  line-height: 1.77;
}

.lowerContact__content {
  margin-top: rem(40);
  padding: rem(30);
  border-radius: 40px;
  box-shadow: 0px 5px 25px #1B6C871A;

  @include mq(md) {
    padding: rem(60);
  }
}

.lowerContact__contentForm {
  display: grid;
  row-gap: rem(35);

  @include mq(md) {
    row-gap: rem(45);
  }
}

.lowerContact__inputText {
  input {
    width: 100%;
    display: block;
    margin-top: rem(10);
    background-color: #F7F6F6;
    padding: rem(15);

    @include mq(md) {
      margin-top: rem(15);
    }
  }

  textarea {
    display: block;
    width: 100%;
    height: rem(300);
    background-color: #F7F6F6;
    margin-top: rem(10);
    padding: rem(18);

    @include mq(md) {
      height: rem(240);
      margin-top: rem(15);

    }
  }
}

.lowerContact__inputTitle {
  font-size: rem(16);
  width: fit-content;
}

.lowerContact__inputTitle--required {
  position: relative;

  &::before {
    content: "必須";
    display: inline-block;
    font-size: rem(12);
    line-height: 1;
    padding: rem(3) rem(8);
    color: $white;
    background-color: $main-color;
    position: absolute;
    right: rem(-60);
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
  }
}

.lowerContact__note {
  margin-top: rem(10);
  font-size: rem(10);

  @include mq(md) {
    font-size: rem(14);
  }

}

.lowerContact__contentButton {
  margin-top: rem(30);
  text-align: center;
  display: flex;
  justify-content: center;
  column-gap: 30px;
}

.lowerContact__button {
  display: inline-block;
  font-size: rem(16);
  line-height: 1;
  font-weight: $bold;
  color: $white;
  max-width: rem(275);
  width: 100%;
  padding-top: rem(20);
  padding-bottom: rem(20);
  background-color: $accent-color;
  border-radius: 40px;
  text-align: center;
  letter-spacing: .07em;

  @include mq(md) {
    font-size: rem(12);
    max-width: rem(150);
    font-weight: $normal;
    padding-top: rem(12);
    padding-bottom: rem(12);
  }
}

.lowerContact__button--return {
  background-color: $main-color;
}
</style>
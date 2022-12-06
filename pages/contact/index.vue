<template>
  <NuxtLayout name="lower">
    <div class="lowerContact">
      <div class="minInner lowerContact__inner">
        <div class="lowerContact__textArea">
          <p class="lowerContact__text">3Scodeにご関心をお持ちいただきまして、ありがとうございます。</p>
          <p class="lowerContact__text">お見積りやサービスに関するお問い合わせ、ご相談はこちらから承っております。</p>
          <p class="lowerContact__text">24時間以内に返答させていただきます。</p>
        </div>
        <div class="lowerContact__content">
          <Form :validation-schema="schema">
            <div class="lowerContact__contentForm">
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">会社名</p>
                <Field type="text" name="company" v-model="formData.company" placeholder="個人事業主の方は屋号をご入力ください。" />
                <ErrorMessage class="error" name="company" />
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">ご担当社名</p>
                <Field type="text" name="name" v-model="formData.name" placeholder="例）山田太郎" />
                <ErrorMessage class="error" name="name" />
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">メールアドレス</p>
                <Field type="email" name="email" v-model="formData.email" placeholder="例）contact@3scode.co.jp" />
                <ErrorMessage class="error" name="email" />
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">電話番号</p>
                <Field type="tel" name="tel" v-model="formData.tel" placeholder="例）080-1234-5678" />
                <ErrorMessage class="error" name="tel" />
              </div>
              <div class="lowerContact__inputText">
                <p class="lowerContact__inputTitle lowerContact__inputTitle--required">ご相談内容</p>
                <Field as="textarea" row="30" cols="30" name="content" v-model="formData.content"
                  placeholder="お問い合わせやご相談内容をご入力ください。" />
                <ErrorMessage class="error" name="content" />
                <p class="lowerContact__note">※詳しく書いていただくとご希望に合ったご提案ができます。</p>
              </div>
            </div>
            <div class="lowerContact__contentButton">
              <button type="submit" class="lowerContact__button">入力内容を確認する</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

// 電話番号正規表現
const phoneRegExp = /^0[-0-9]{9,12}$/

const customErrorMessage = {
  required: '必須項目です。',
}

const schema = yup.object({
  name: yup.string().trim().required(customErrorMessage.required).max(100),
  company: yup.string().trim().required(customErrorMessage.required).max(100),
  email: yup.string().trim().required(customErrorMessage.required).email(),
  tel: yup.string().trim().required(customErrorMessage.required).matches(phoneRegExp, { message: '有効な電話番号を入力してください。' }),
  content: yup.string().trim().required(customErrorMessage.required).max(3000)
});


const lowerMainViewTitle: string = 'お問い合わせ'
const lowerMainViewTitleRuby: string = 'CONTACT'
provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)

const formData = formState();






const config = useRuntimeConfig()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(config.sendGridApiKey)
const msg = {
  to: '3scode.osaka@gmail.com', // Change to your recipient
  from: 'info@3s-code.jp', // Change to your verified sender
  subject: 'テストです',
  text: '環境変数のテストです。',

}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

</script>

<style lang="scss">
[v-cloak] {
  display: none;
}

.error {
  color: red;
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

    &:focus {
      outline: 3px solid $main-color;
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

    &:focus {
      outline: 3px solid $main-color;
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

  &:focus {
    outline: 5px solid $main-color;
  }
}

.lowerContact__button--return {
  background-color: $main-color;
}
</style>
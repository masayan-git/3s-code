<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__inner">
        <h2 class="footer__logo">
          <NuxtLink to="/" class="footer__logoLink">3Scode</NuxtLink>
        </h2>
        <nav class="footer__nav">
          <ul class="footer__navInner">
            <li class="footer__navList">
              <NuxtLink to="/#about" class="footer__navLink">3Scodeについて</NuxtLink>
            </li>
            <li class="footer__navList">
              <NuxtLink to="/works" class="footer__navLink">制作実績</NuxtLink>
            </li>
            <li class="footer__navList">
              <NuxtLink to="/blog" class="footer__navLink">ブログ</NuxtLink>
            </li>
            <li class="footer__navList">
              <NuxtLink to="/#service" class="footer__navLink">サービス</NuxtLink>
            </li>
            <li class="footer__navList">
              <NuxtLink to="/#price" class="footer__navLink">料金</NuxtLink>
            </li>
            <li class="footer__navList">
              <NuxtLink to="/contact" class="footer__navLink">お問い合わせ</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__copy">
        <small>©︎ 3Scode All Rights Reserved.</small>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">

</script>

<style lang="scss">
.footer {
  background: transparent linear-gradient(180deg, #559AB1 0%, #1D6D88 100%) 0% 0% no-repeat padding-box;
  color: $white;
}

.footer__wrap {
  @include mq(md) {
    display: grid;
    grid-template-columns: 1fr rem(370);
  }
}

.footer__inner {
  padding-top: rem(60);
  padding-right: rem(50);
  padding-left: rem(50);
  padding-bottom: rem(50);

  @include mq(md) {
    padding-top: rem(70);
    padding-bottom: rem(80);
    padding-left: rem(120);
    padding-right: 0;
  }
}

.footer__logo {}

.footer__logoLink {
  font-size: rem(40);
  font-weight: $bold;
}

.footer__nav {
  margin-top: rem(40);
}

.footer__navInner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: rem(13);
  row-gap: rem(20);

  @include mq(md) {
    display: flex;
    column-gap: rem(30);
  }
}

.footer__navList {}

.footer__navLink {
  font-size: rem(16);
  font-weight: $normal;
  letter-spacing: rem(0.64);
}

.footer__copy {
  width: 100%;
  padding-top: rem(50);
  padding-bottom: rem(50);
  padding-right: rem(50);
  border-radius: 100px 0px 0px 0px;
  background: transparent linear-gradient(359deg, #60BFDF 0%, #B6E2F0 100%) 0% 0% no-repeat padding-box;
  text-align: right;

  @include mq(md) {
    padding-top: rem(147);
    padding-bottom: rem(81);
    padding-right: 0;
    text-align: center;
    border-radius: 200px 0px 0px 0px;
  }

  small {
    font-size: rem(12);
    font-weight: $normal;
    color: $white;
  }
}
</style>
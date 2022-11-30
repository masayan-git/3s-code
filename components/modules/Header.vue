<template>
  <header class="header" :class="{ header__active: isActive }">
    <div class="inner header__inner">
      <nav class="header__nav">
        <h1 class="header__title">
          <NuxtLink to="/">3Scode</NuxtLink>
        </h1>
        <ul class="header__navLists">
          <li class="header__navList">
            <NuxtLink to="/#about" class="header__navLink">3S codeについて</NuxtLink>
          </li>
          <li class="header__navList">
            <NuxtLink to="/#service" class="header__navLink">サービス</NuxtLink>
          </li>
          <li class="header__navList">
            <NuxtLink to="/works" class="header__navLink">制作実績</NuxtLink>
          </li>
          <li class="header__navList">
            <NuxtLink to="/#price" class="header__navLink">料金</NuxtLink>
          </li>
          <li class="header__navList">
            <NuxtLink to="/blog" class="header__navLink">ブログ</NuxtLink>
          </li>
          <li class="header__navList">
            <NuxtLink to="/contact" class="header__navLink header__navLink--button">お問い合わせ</NuxtLink>
          </li>
        </ul>
        <button @click="isActive = !isActive" class="header__button">
          <span class="header__buttonLine"></span>
          <span class="header__buttonLine"></span>
          <span class="header__buttonLine"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
const isActive = ref(false)

</script>

<style lang="scss">
.header {
  position: absolute;
  z-index: 999;
  width: 100%;
  top: 20px;

  @include mq(md) {
    position: fixed;
  }
}

.header__inner {}

.header__nav {
  width: 100%;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @include mq(md) {
    padding: rem(20) rem(50);
    background-color: $white;
    border-radius: 45px;
    box-shadow: 0px 5px 25px #1B6C871A;
  }
}

.header__title {
  font-size: rem(25);
  font-weight: $bold;
  line-height: 1;
  font-family: $alphabet-font-family-2;

  @include mq(sp) {
    position: fixed;
    top: 42px;
    left: 23px;
    z-index: 1;
  }


}

.header__navLists {
  @include mq(sp) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $sub-color;
    padding-top: rem(160);

    visibility: hidden;
    opacity: 0;
    transition: .3s;
  }

  @include mq(md) {
    display: flex;
    align-items: center;
    column-gap: rem(30);
  }
}

.header__navList {
  @include mq(sp) {
    text-align: center;

    &+& {
      margin-top: rem(25);
    }

  }
}

.header__navLink {

  font-size: rem(15);
  font-weight: $bold;
  color: $t-blue;
  letter-spacing: rem(0.6);
  display: inline-block;


  @include mq(md) {
    letter-spacing: .04em;
  }
}

.header__navLink--button {
  color: $white;
  background-color: $accent-color;

  @include mq(sp) {
    width: rem(275);
    height: rem(50);
    padding: 0 rem(20);
    border-radius: 25px;
    line-height: rem(50);
  }

  @include mq(md) {
    font-size: rem(14);
    font-weight: $bold;
    padding: rem(12) rem(20);
    border-radius: 37px;

  }
}

.header__button {
  display: block;
  width: rem(74);
  height: rem(74);
  border-radius: 50%;
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: $accent-color;

  @include mq(md) {
    display: none;
  }

}

.header__buttonLine {
  width: rem(30);
  height: 3px;
  background-color: $white;
  display: block;
  border-radius: 3px;
  position: absolute;
  left: 0;
  right: 0;
  margin-right: auto;
  margin-left: auto;
  transition: .3s;

  &:nth-of-type(1) {
    top: rem(25);
  }

  &:nth-of-type(2) {
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  &:nth-of-type(3) {
    bottom: rem(25);
  }

}

.header__active {

  //ボタン
  .header__buttonLine {
    transition: .3s;

    &:nth-of-type(1) {
      top: rem(33);
      left: rem(-1);
      transform: rotate(-45deg);

    }

    &:nth-of-type(2) {
      display: none;

    }

    &:nth-of-type(3) {
      left: 0;
      bottom: rem(37);
      transform: rotate(45deg);

    }
  }

  .header__navLists {
    @include mq(sp) {
      visibility: visible;
      opacity: 1;
      transition: .3s;
    }
  }




}
</style>
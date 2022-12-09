<template>
  <div class="sideBar__profile">
    <div class="sideBar__profileInner">
      <div class="sideBar__profileImage">
        <img src="/top/noimage1.png" alt="">
      </div>
      <h2 class="sideBar__profileName">まさやん</h2>
      <div class="sideBar__profileTextArea">
        <div class="sideBar__profileTextBox">
          <p class="sideBar__profileText">iPad大好きなiPadブロガー</p>
          <p class="sideBar__profileText">猫4匹と暮らしつつiPadメインのガジェット活用ブログを運営しています。</p>
        </div>
        <div class="sideBar__profileTextBox">
          <p class="sideBar__profileText"> iPadでのブログ運営やiPadのおすすめアクセサリー、アプリや使い方を中心に、iPhoneやMacBook、デスク周りの情報も発信中です。</p>
        </div>
      </div>
      <div class="sideBar__profileSns">
        <a href="" class="sideBar__profileSnsIcon">
          <img src="/blog/Instagram.svg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.sideBar__profile {
  border-radius: 40px;
  box-shadow: 0px 5px 25px #1B6C871A;
}

.sideBar__profileInner {
  padding: rem(30) rem(30) rem(40) rem(30);
}

.sideBar__profileImage {
  width: rem(130);
  height: rem(130);
  border-radius: 50%;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;

  img {
    object-fit: cover;
    object-position: center;
  }
}

.sideBar__profileName {
  font-size: rem(20);
  margin-top: rem(25);
  font-weight: $medium;
  text-align: center;

}

.sideBar__profileTextArea {
  margin-top: rem(30);
  display: grid;
  row-gap: rem(30);
}

.sideBar__profileTextBox {}

.sideBar__profileText {
  font-size: rem(16);
  line-height: 1.75;
}

.sideBar__profileSns {
  margin-top: rem(30);
  display: flex;
  justify-content: center;
  column-gap: rem(20);
}

.sideBar__profileSnsIcon {
  width: rem(40);
  height: rem(40);
  display: block;

  img {
    object-fit: contain;
  }
}
</style>
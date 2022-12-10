<template>
  <div class="sideBar__profile">
    <div class="sideBar__profileInner">
      <div class="sideBar__profileImage">
        <img src="/blog/profile.jpeg" alt="">
      </div>
      <h2 class="sideBar__profileName">庄司 雅幸</h2>
      <div class="sideBar__profileTextArea">
        <div class="sideBar__profileTextBox">
          <p class="sideBar__profileText">Webコーダーとして活動しています。</p>
        </div>
        <div class="sideBar__profileTextBox">
          <p class="sideBar__profileText">Web制作会社様5社と提携し、主にコーディング業務を請け負っています。</p>
          <p class="sideBar__profileText">技術系をメインに発信しています。</p>
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
    height: 100%;
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
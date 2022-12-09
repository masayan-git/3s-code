<template>
  <div class="mainView">
    <div class="mainView__subIcon"></div>
    <div class="mainView__IconLeft"></div>
    <div class="inner mainView__inner">
      <div class="mainView__messageArea">
        <div class="mainView__messageAreaInner">
          <h1 class="mainView__title">
            <span class="indent">あなたの想いを、</span>
            <span class="indent">Webに表現します。</span>
          </h1>
        </div>
        <p class="mainView__text">大阪を拠点にコーディング業務を請け負っております。</p>
      </div>
      <div class="mainView__mainIcon"></div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.mainView {
  width: 100%;
  height: rem(650);
  position: relative;

  background: transparent linear-gradient(150deg, #E3F4F9 0%, #F5FDFF 100%) 0% 0% no-repeat padding-box;
  overflow: hidden;

  @include mq(md) {
    height: rem(900);
  }

}

.mainView__inner {

  height: 100%;
  width: 100%;
  position: relative;

  // z-index: 2;
  @include mq(md) {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: rem(230) max-content max-content auto;
  }
}

.mainView__IconLeft {
  @include mq(md) {
    aspect-ratio: 500 / 532;
    width: rem(500);
    background-image: url("/top/triangle-right-pc.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: rem(-230);
    right: calc(50% + rem(420));

  }
}

.mainView__subIconRight {
  display: block;
  aspect-ratio: 500 / 532;
  width: rem(500);
  background-image: url("/top/triangle-right-pc.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: rem(-280);
  right: calc(50% + rem(420));
  z-index: 2;
}

.mainView__subIcon {
  aspect-ratio: 246 / 250;
  width: rem(246);
  background-image: url("/top/triangle-left-sp.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 1;
  right: rem(-76);
  top: 0;

  @include mq(md) {
    aspect-ratio: 500 / 532;
    width: rem(500);
    background-image: url("/top/triangle-left-pc.png");
    right: calc(50% - rem(930));
    top: rem(-230);

  }
}

.mainView__messageArea {
  position: absolute;
  top: rem(160);
  z-index: 1;

  @include mq(md) {
    position: static;
    padding-left: rem(100);
    grid-row: 2/ 3;
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
}

.mainView__messageAreaInner {
  @include mq(md) {
    margin-top: rem(-25);
  }
}

.mainView__title {
  font-size: rem(35);
  font-weight: $bold;
  line-height: 1.7;
  letter-spacing: rem(1.4);

  @include mq(md) {
    font-size: rem(48);
    letter-spacing: .06em;

  }
}

.mainView__text {
  margin-top: rem(20);
  font-size: rem(16);
  line-height: 1.1875;
}

.mainView__mainIcon {
  aspect-ratio: 256 / 260;
  width: rem(256);
  background-image: url("/top/main-icon-sp.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  left: rem(50);
  bottom: rem(30);

  @include mq(md) {
    background-image: url("/top/main-icon-pc.png");
    width: 100%;
    // height: rem(532);
    background-size: contain;
    aspect-ratio: 550 / 532;
    position: static;
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
}
</style>
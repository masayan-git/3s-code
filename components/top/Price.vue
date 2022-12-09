<template>
  <section id="price" class="price">
    <div class="inner">
      <ModulesSectionTitle />
      <div class="price__card">
        <table class="price__table">
          <tr>
            <th>コーディング（トップ）</th>
            <td>40000円〜</td>
          </tr>
          <tr>
            <th>コーディング（下層）</th>
            <td>15000円〜</td>
          </tr>
          <tr>
            <th>コーディング（LP）</th>
            <td>50000円〜</td>
          </tr>
          <tr>
            <th>コーディング ＋ WordPress構築</th>
            <td>150,000円〜</td>
          </tr>
          <tr>
            <th>WordPress構築</th>
            <td>100,000円〜</td>
          </tr>
        </table>
      </div>
      <p class="price__note">※ 内容や量によって、価格が変動いたします。デザイン料は含まれておりません。</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const lowerMainViewTitle: string = '料金'
const lowerMainViewTitleRuby: string = 'PRICE'

provide('lowerMainViewTitle', lowerMainViewTitle)
provide('lowerMainViewTitleRuby', lowerMainViewTitleRuby)
</script>

<style lang="scss">
.price {
  background: transparent linear-gradient(156deg, #E3F4F9 0%, #F5FDFF 100%) 0% 0% no-repeat padding-box;
  border-radius: 100px 0px 0px 0px;
  padding-top: rem(170);
  margin-top: rem(-70);
  padding-bottom: rem(100);

  @include mq(md) {
    padding-top: rem(220);
    border-radius: 200px 0px 0px 0px;
    margin-top: rem(-140);
    padding-bottom: rem(200);

  }

  .section__title[data-ruby] {
    &::after {
      color: white;
    }
  }

  .inner {
    @include mq(md) {
      max-width: rem(1000);
    }
  }
}

.price__card {
  margin-top: rem(50);
  padding: rem(10) rem(40);
  border-radius: 30px;
  box-shadow: 0px 5px 25px #1B6C871A;
  background-color: $white;

  @include mq(md) {
    margin-top: rem(120);
    padding: rem(20) rem(40);

    // max-width: rem(930);
    // width: 100%;
    // margin-right: auto;
    // margin-left: auto;
  }
}

.price__table {
  width: 100%;

  @include mq(sp) {

    display: block;

    tr,
    td,
    th,
    tbody {
      display: block;
    }

    th,
    td {
      text-align: left;
      font-size: rem(18);
    }

    th {
      font-weight: $medium;
    }

    td {
      font-weight: $normal;
      margin-top: rem(11);

    }

    tr {
      padding-top: rem(20);
      padding-bottom: rem(16);

    }
  }

  tr:not(:last-child) {
    border-bottom: 1px dashed #60BFDF;
  }

  @include mq(md) {
    border-collapse: collapse;

    th {
      text-align: left;
      padding: rem(20) 0;
    }

    td {
      text-align: right;
      padding: rem(20) 0;
    }


  }
}

.price__note {
  margin-top: rem(20);
  font-size: rem(12);
  color: $t-blue;

  @include mq(md) {
    text-align: right;
  }
}
</style>
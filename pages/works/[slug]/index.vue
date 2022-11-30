
<template>
  <div>
    <NuxtLayout name="works">
      <div class="worksSingle">
        <div class="inner worksSingle__inner">
          <article class="worksSingle__article">
            <div class="worksSingle__articleImage">
              <img :src=content.screenshot.url alt="">
            </div>
            <div class="worksSingle__articleContent">
              <div class="worksSingle__articleTitleArea">
                <h1 class="worksSingle__articleTitle">{{ content.title }}</h1>
                <a :href="content.url" class="worksSingle__articleUrl" target="_blank" rel="noopener noreferrer">{{
                    content.url
                }}</a>
              </div>
              <div class="worksSingle__articleInfo">
                <dl>
                  <dt>業種</dt>
                  <dd>{{ content.industry }}</dd>
                </dl>
                <dl>
                  <dt>提供サービス</dt>
                  <dd>{{ content.service }}</dd>
                </dl>
                <dl>
                  <dt>サイト種別</dt>
                  <dd>{{ content.kinds }}</dd>
                </dl>
                <dl>
                  <dt>制作期間</dt>
                  <dd>{{ content.period }}</dd>
                </dl>
                <dl>
                  <dt>コメント</dt>
                  <dd>{{ content.comment }}</dd>
                </dl>
              </div>
            </div>
          </article>
          <div class="worksSingle__other">
            <h2 class="worksSingle__otherTitle">その他の実績</h2>
            <div class="worksSingle__otherContents">
              <WorksCard v-for="content in content.related" :content="content" />
            </div>
            <div class="worksSingle__otherButton">
              <ModulesButton />
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const buttonText = '制作実績一覧を見る'
const buttonSlug = '/works'
provide('buttonText', buttonText)
provide('buttonSlug', buttonSlug)

const config = useRuntimeConfig()
const route = useRoute();
const slug = route.params.slug;
const { data: content } = await useFetch(`/works/${slug}`, {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});


</script>


<style lang="scss">
.worksSingle {
  margin-top: rem(50);
  padding-bottom: rem(156);

  @include mq(md) {
    margin-top: rem(80);
    padding-bottom: rem(260);
  }
}

.worksSingle__inner {}

.worksSingle__article {
  border-radius: 30px;
  box-shadow: 0px 5px 25px #1B6C871A;
  padding: rem(30);

  @include mq(md) {
    border-radius: 40px;
    padding: rem(100);
  }
}

.worksSingle__articleImage {
  aspect-ratio: 275 / 181;
  width: 100%;
  overflow-y: scroll;

  @include mq(md) {
    aspect-ratio: 1000/ 650;
  }
}

.worksSingle__articleContent {
  margin-top: rem(27);

  @include mq(md) {
    margin-top: rem(60);
  }
}

.worksSingle__articleTitleArea {}

.worksSingle__articleTitle {
  font-size: rem(22);
  font-weight: $bold;
}

.worksSingle__articleUrl {
  margin-top: rem(10);
  display: inline-block;
  font-size: rem(16);
  color: $t-blue;
}

.worksSingle__articleInfo {
  margin-top: rem(35);
  display: grid;
  row-gap: rem(40);

  @include mq(md) {
    margin-top: rem(65);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto auto;
    row-gap: rem(60);
    column-gap: rem(47);
  }

  dt {
    font-size: rem(15);
    font-weight: $normal;
    color: #666666;
    padding-bottom: rem(15);
    line-height: 1;
    border-bottom: 1px solid #707070;
  }

  dd {
    padding-top: rem(15);
    font-size: rem(16);
    font-weight: $normal;

    white-space: pre-wrap;
  }

  dl {
    @include mq(md) {
      &:nth-of-type(1) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }

      &:nth-of-type(2) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
      }

      &:nth-of-type(3) {
        grid-row: 2 / 3;
        grid-column: 1 / 2;
      }

      &:nth-of-type(4) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
      }

      &:nth-of-type(5) {
        grid-row: 3 / 4;
        grid-column: 1 / 3;
      }

    }
  }
}

.worksSingle__other {
  margin-top: rem(87);

  @include mq(md) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    row-gap: rem(60);
    margin-top: rem(180);
  }
}

.worksSingle__otherTitle {
  font-size: rem(22);
  line-height: 1;

  @include mq(md) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
}

.worksSingle__otherContents {
  margin-top: rem(33);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(300), 1fr));
  row-gap: rem(30);
  column-gap: rem(30);

  @include mq(md) {
    margin-top: 0;
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
}

.worksSingle__otherButton {
  margin-top: rem(50);
  text-align: right;

  @include mq(md) {
    margin-top: 0;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
}
</style>
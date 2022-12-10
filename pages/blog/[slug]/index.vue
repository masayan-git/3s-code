<template>
  <NuxtLayout name="blog">
    <div class="blogSingle">
      <article class="blogSingle__article">
        <BlogCardCategory :category="content.category" />
        <h1 class="blogSingle__articleTitle">{{ content.title }}</h1>
        <time class="blogSingle__time">{{ publishedDate }}</time>
        <div class="blogSingle__articleImage">
          <img :src="content.eyecatch.url" alt="">
        </div>
        <!-- eslint-disable-next-line -->
        <div v-html="content.content" class="blogSingle__articleContent">
        </div>
        <!-- <div class="blogSingle__articleTagArea">
          <a href="" class="sideBar__tagItemLink">デザイン</a>
          <a href="" class="sideBar__tagItemLink">デザイン</a>
        </div> -->
      </article>
    </div>
    <div class="blogSingle__pageNation">
      <div class="blogSingle__pageNationReturnArea">
        <ModulesReturnButton v-if="prev.totalCount != 0" />
      </div>
      <div class="blogSingle__pageNationNextArea">
        <ModulesButton v-if="next.totalCount != 0" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">


const config = useRuntimeConfig()
const route = useRoute();
const slug = route.params.slug;
const { data: content }: any = await useFetch(`/blog/${slug}`, {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
const publishedAt = content.value.publishedAt
const publishedDate = publishedAt.substring(0, publishedAt.indexOf("T")).replace(/-/g, '.')

const { data: prev }: any = await useFetch(`/blog?orders=publishedAt;filters=publishedAt[less_than]${content.value.publishedAt};limit=1`, {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});

const { data: next }: any = await useFetch(`/blog?orders=publishedAt;filters=publishedAt[greater_than]${content.value.publishedAt};limit=1`, {
  baseURL: config.serviceDomain,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});


const returnButtonText = '前の記事'
provide('returnButtonText', returnButtonText)

if (prev.value.contents[0] != null) {
  const returnButtonSlug = `/blog/${prev.value.contents[0].id}`
  provide('returnButtonSlug', returnButtonSlug)
}

const buttonText = '次の記事'
provide('buttonText', buttonText)

if (next.value.contents[0] != null) {
  const buttonSlug = `/blog/${next.value.contents[0].id}`
  provide('buttonSlug', buttonSlug)
}


//SEO対策
useHead({
  title: content.value.title,
  meta: [
    { name: 'description', content: content.value.description }
  ]
})


</script>

<style lang="scss">
.blogSingle__pageNation {
  margin-top: rem(70);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include mq(md) {
    margin-top: rem(105);
  }
}

.blogSingle__pageNationReturnArea {
  text-align: left;
}

.blogSingle__pageNationNextArea {
  text-align: right;
}

.blogSingle {
  padding: rem(30);
  box-shadow: 0px 5px 25px #1B6C871A;
  border-radius: 30px;
}

.blogSingle__article {}

.blogSingle__articleTitle {
  margin-top: rem(10);
  font-size: rem(26);
  font-weight: $bold;
  line-height: 1.2;

  @include mq(md) {
    font-size: rem(32);
    line-height: 1.18;
  }
}

.blogSingle__time {
  display: block;
  width: fit-content;
  margin-top: rem(15);
  margin-left: auto;
  font-size: rem(13);
  color: #666666;
  font-weight: $bold;
}

.blogSingle__articleImage {
  aspect-ratio: 275 / 179;
  margin-top: rem(10);

  @include mq(md) {
    aspect-ratio: 700 / 490;
  }

  img {
    height: 100%;
    object-fit: contain;
  }

}

.blogSingle__articleContent {
  h2 {
    margin-top: rem(50);
    margin-bottom: rem(30);
    font-size: rem(20);
    font-weight: $bold;
    line-height: 1.2;
    padding: rem(10) rem(10) rem(10) rem(45);
    position: relative;
    border-radius: 50px 0px 0px 50px;
    background-color: $main-color;
    color: $white;

    @include mq(md) {
      font-size: rem(22);
      padding: rem(15) rem(15) rem(18) rem(50);
    }

    &::before {
      content: "";
      display: block;
      width: rem(20);
      height: rem(20);
      background-color: $white;
      position: absolute;
      top: 0;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
      left: rem(14);
      border-radius: 50%;
    }
  }

  h3 {
    font-size: rem(18);
    font-weight: $bold;
    line-height: 1.2;
    margin-top: rem(50);
    margin-bottom: rem(30);
    border-bottom: 3px dotted $main-color;
    padding-bottom: rem(7);

    @include mq(md) {
      font-size: rem(20);
    }
  }

  h4 {
    margin-top: rem(40);
    margin-bottom: rem(30);
    font-size: rem(16);
    font-weight: $bold;
    line-height: 1.18;

    @include mq(md) {
      font-size: rem(18);
    }
  }

  h5 {
    margin-top: rem(40);
    margin-bottom: rem(30);
    font-size: rem(15);
    font-weight: $bold;
    line-height: 1.2;

    @include mq(md) {
      font-size: rem(16);
    }
  }

  h6 {
    font-size: rem(14);
    margin-top: rem(40);
    margin-bottom: rem(30);
    font-weight: $bold;

    @include mq(md) {
      font-size: rem(15);
    }
  }

  a {
    color: $main-color;
    display: inline-block;
    border-bottom: 1px solid $main-color;
  }

  p,
  i {
    font-size: rem(15);
    font-weight: $normal;
    line-height: 2;
    margin-top: rem(20);
    margin-bottom: rem(20);

    @include mq(md) {
      font-size: rem(16);
    }
  }

  br {
    // display: none;
  }

  strong {
    font-weight: $bold;
  }

  img {
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: rem(20);
    margin-bottom: rem(20);
  }

  ol {
    padding: rem(15);
    background-color: $sub-color;
    border-radius: 10px;
    display: grid;
    row-gap: rem(10);
    margin-top: rem(20);
    margin-bottom: rem(20);

    @include mq(md) {
      padding: rem(25);
    }

    li {
      padding-left: rem(35);
      font-size: rem(14);
      line-height: 2;
      position: relative;

      @include mq(md) {
        font-size: rem(16);
        padding-left: rem(50);
      }

      &::before {
        font-size: rem(7);
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
        width: rem(20);
        height: rem(20);
        background-color: $main-color;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: rem(3);

        @include mq(md) {
          width: rem(30);
          height: rem(30);
          font-size: rem(11);
          top: rem(2);
        }
      }

      &:nth-of-type(1) {
        &::before {
          content: "1";
        }
      }

      &:nth-of-type(2) {
        &::before {
          content: "2";
        }
      }

      &:nth-of-type(3) {
        &::before {
          content: "3";
        }
      }

      &:nth-of-type(4) {
        &::before {
          content: "4";
        }
      }

      &:nth-of-type(5) {
        &::before {
          content: "5";
        }
      }

      &:nth-of-type(6) {
        &::before {
          content: "6";
        }
      }

      &:nth-of-type(7) {
        &::before {
          content: "7";
        }
      }

      &:nth-of-type(8) {
        &::before {
          content: "8";
        }
      }

      &:nth-of-type(9) {
        &::before {
          content: "9";
        }
      }
    }
  }

  ul {
    padding: rem(25) rem(15);
    background-color: $sub-color;
    border-radius: 10px;
    display: grid;
    row-gap: rem(10);
    margin-top: rem(20);
    margin-bottom: rem(20);

    @include mq(md) {
      padding: rem(25);

    }

    li {
      padding-left: rem(23);
      font-size: rem(14);
      line-height: 2;
      font-weight: $normal;
      position: relative;

      @include mq(md) {
        padding-left: rem(27);
        font-size: rem(16);
      }

      &::before {
        content: "";
        display: block;
        width: rem(8);
        height: rem(8);
        border-radius: 50%;
        background-color: $main-color;
        position: absolute;
        left: 0;
        top: rem(10);

        @include mq(md) {
          top: rem(12);
        }
      }
    }
  }

}

.blogSingle__articleTagArea {
  margin-top: rem(20);
  display: flex;
  column-gap: rem(10);
  row-gap: rem(10);
  flex-wrap: wrap;

  @include mq(md) {
    margin-top: rem(30);
  }
}
</style>
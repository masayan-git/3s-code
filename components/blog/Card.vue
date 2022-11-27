<template>
  <article class="blog__card">
    <nuxt-link :to="`/blog/${content.content.id}`" class="blog__cardLink">
      <div class="blog__cardImage">
        <img :src="content.content.eyecatch.url" alt="">
      </div>
      <div class="blog__cardContent">
        <h1 class="blog__cardTitle">{{content.content.title}}</h1>
        <div class="blog__cardCategoryArea">
          <BlogCardCategory :category="content.content.category"/>
        </div>
        <p class="blog__cardText">{{cardDescriptionText}}</p>
      </div>
    </nuxt-link>
  </article>
</template>

<script setup>
const content = defineProps({
  content: Object
})

const cardDescriptionHtml = content.content.content
const cardDescriptionText = cardDescriptionHtml.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'').substring(0,58).concat('…')


</script>

<style lang="scss">
.blog__card {
  border-radius: 40px 40px;
  box-shadow: 0px 5px 25px #1B6C871A;
  overflow: hidden;
}

.blog__cardLink {
  display: block;
}

.blog__cardImage {
  aspect-ratio: 335 / 235;
  width: 100%;
  
  @include mq(md) {
    aspect-ratio: 370 / 260;
  }
  img {
    height: 100%;
    object-fit: cover;
    
  }
}

.blog__cardContent {
  padding: rem(20) rem(30) rem(30) rem(30);
}

.blog__cardTitle {
  font-size: rem(20);
  font-weight: $medium;
  line-height: 1.2;
}

.blog__cardCategoryArea {
  margin-top: rem(25);
}



.blog__cardText {
  margin-top: rem(15);
  font-size: rem(16);
  font-weight: $normal;
  line-height: 1.75;
}
</style>
<template>
  <div class="container">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id"
        class="col-12 m-3 p-2 border border-secondary rounded-3 d-flex justify-content-between align-items-center">
        <div class="blog-text w-75">
          <div class="creator-tag d-flex align-items-center mt-0">
            <img :src="blog.creator.picture" :alt="blog.creator.name" class="creator-picture">
            <p class="ms-2 pb-0 pt-2">{{ blog.creator.name }}</p>
          </div>
          <p class="fw-bold">{{ blog.title }}</p>
          <p class="body-preview">{{ blog.body }}</p>
          <p>{{ blog.createdAt }}</p>
        </div>
        <img :src="blog.imgUrl" :alt="blog.title" class="blog-image rounded-3 ">
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from "../AppState.js"


export default {
  setup() {

    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {

      }
    }


    onMounted(() => {
      getBlogs()
    })


    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.blog-image {
  height: 13vh;
  width: 20vh;
  object-fit: cover;
}

.creator-picture {
  height: 4vh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.body-preview {

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  // max-width: 50ch;
  // white-space: wrap;
  // overflow: hidden;
  // text-overflow: ellipsis;
}
</style>

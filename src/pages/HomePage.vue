<template>
  <div class="container">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id" class="col-12 m-3 p-2 border rounded-3 d-flex justify-content-between">
        <div class="blog-text">
          <p>{{ blog.title }}</p>

        </div>
        <img :src="blog.imgUrl" :alt="blog.title" class="blog-image rounded-3">
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
</style>

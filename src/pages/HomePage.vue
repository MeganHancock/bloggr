<template>
  <div class="container">
    <section class="row">
      <div class="col-12 m-3 p-2 border rounded-3">
        <p>{{ blogs }}</p>
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

<style scoped lang="scss"></style>

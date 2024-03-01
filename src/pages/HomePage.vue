<template>
  <div class="container">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id">
        <BlogCard :blog="blog" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { blogsService } from '../services/BlogsService.js'
import { AppState } from "../AppState.js"
import FullBlogModal from '../components/FullBlogModal.vue';
import BlogCard from '../components/BlogCard.vue';
import Pop from '../utils/Pop.js';


export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss"></style>

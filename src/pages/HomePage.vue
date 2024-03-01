<template>
  <div class="container">
    <section class="row">
      <div v-for="blog in blogs" :key="blog.id">


        <!-- <div class="col-12 m-3 p-2 border border-secondary rounded-3 d-flex justify-content-between align-items-center">
          <div class="blog-text w-75">
            <div class="creator-tag d-flex align-items-center mt-0 w-auto">

              <router-link :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
                <img role="button" @click="console.log('this will go to profile page')" title="View Profile"
                  :src="blog.creator.picture" :alt="blog.creator.name" class="creator-picture">
              </router-link>

              <p class="ms-2 pb-0 pt-2">{{ blog.creator.name }}</p>
            </div>

            <p role="button" @click="console.log('is this a modal')" title="View Full Blog" data-bs-toggle="modal"
              data-bs-target="#blogModal" class="fw-bold">{{ blog.title }}
            </p>

            <p class="body-preview me-1">{{ blog.body }}</p>
            <p>{{ blog.createdAt }}</p>
          </div>
          <img :src="blog.imgUrl" :alt="blog.title" class="blog-image rounded-3 ">
        </div> -->

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

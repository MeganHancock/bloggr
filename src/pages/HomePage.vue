<template></template>

<script>
import { onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { blogsService } from '../services/BlogsService.js'

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

    }
  }
}
</script>

<style scoped lang="scss"></style>

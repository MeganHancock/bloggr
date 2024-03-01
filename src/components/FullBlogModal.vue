<template>
    <!-- Button trigger modal -->


    <!-- Modal -->
    <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModal" aria-hidden="true">
        <div class="modal-dialog">
            <div v-if="blog" class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ blog.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <!-- <BlogCard :blog="blog" /> -->

                    <div class="blog-text w-75">
                        <div class="creator-tag d-flex align-items-center mt-0 w-auto">

                            <router-link :to="{ name: 'Profile', params: { profileId: blog.creator.id } }">
                                <img role="button" @click="console.log('this will go to profile page')" title="View Profile"
                                    :src="blog.creator.picture" :alt="blog.creator.name" class="creator-picture">
                            </router-link>

                            <p class="ms-2 pb-0 pt-2">{{ blog.creator.name }}</p>
                        </div>

                        <!-- TODO modal -->
                        <p @click="setActiveBlog()" role="button" title="View Full Blog" data-bs-toggle="modal"
                            data-bs-target="#blogModal" class="fw-bold">
                            {{ blog.title }}
                        </p>

                        <p class="body-preview me-1">{{ blog.body }}</p>
                        <!-- <button type="button" class="btn btn-primary" data-bs-toggle="blogModal" data-bs-target="#blogModal">
                read more...
            </button> -->



                        <p>{{ blog.createdAt }}</p>
                    </div>
                    <img :src="blog.imgUrl" :alt="blog.title" class="blog-image rounded-3 ">
                </div>
            </div>
            <div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';
import BlogCard from './BlogCard.vue';
export default {
    props: {
        blog: { type: Blog, required: true }
    },
    setup() {
        return {
            blog: computed(() => AppState.activeBlog)
        };
    },
    components: { BlogCard }
}
</script>


<style lang="scss" scoped>
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
</style>
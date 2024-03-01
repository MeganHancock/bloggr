<template>
    <div class="col-12 m-3 p-2 border border-secondary rounded-3 d-flex justify-content-between align-items-center">
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
</template>


<script>
import { Blog } from '../models/Blog.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';


export default {
    props: {
        blog: { type: Blog, required: true }
    },
    setup(props) {
        return {
            setActiveBlog() {
                logger.log(props.blog)
                blogsService.setActiveBlog(props.blog)
            }

        }
    }
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
<template>
    <div class="container">
        <section class="row">
            <div class="col-12 m-3 p-2 border border-secondary rounded-3 w-100">
                <div v-if="profile" class="col-12 p-4 text-center">
                    <img :src="profile.coverImg" alt="" class="cover-img w-100">
                    <img :src="profile.picture" :alt="profile.name" class="profile-picture">
                    <h1 class="mt-2">{{ profile.name }}</h1>
                    <p>{{ profile.bio }}</p>
                </div>
            </div>
        </section>


        <section class="row">
            <div v-for="blog in blogs" :key="blog.id">
                <BlogCard :blog="blog" />
            </div>
        </section>

    </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { useRoute } from 'vue-router';
import { profilesService } from '../services/ProfilesService.js'
import BlogCard from '../components/BlogCard.vue';
import { blogsService } from '../services/BlogsService.js';


export default {


    setup() {
        const route = useRoute();

        async function getProfileById() {
            try {
                const profileId = route.params.profileId;
                // logger.log(profileId)
                await profilesService.getProfileById(profileId);
            }
            catch (error) {
                Pop.error(error);
            }
        }

        async function getBlogsByCreatorId() {
            try {
                const profileId = route.params.profileId;
                await blogsService.getBlogsByCreatorId(profileId);
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            getProfileById();
            getBlogsByCreatorId();
        });
        return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogCard }
}
</script>


<style lang="scss" scoped>
.cover-img {
    height: 30vh;
    width: 60vh;
    object-fit: cover;
    position: relative;
}

.profile-picture {

    height: 15vh;
    width: 15vh;
    object-fit: cover;
    border-radius: 50%;
    // position: absolute;
    transform: translateY(-8vh);
    margin-bottom: -8vh;
}
</style>
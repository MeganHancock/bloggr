<template>
    <div class="col-12 m-3 p-2 border border-secondary rounded-3">
        <section class="row p-3">
            <div class="col-12">
                <!-- <img :src="blog.imgUrl" alt=""> -->
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

export default {
    setup() {
        const route = useRoute()

        async function getProfileById() {
            try {
                const profileId = route.params.profileId
                // logger.log(profileId)
                await profilesService.getProfileById(profileId)

            } catch (error) {
                Pop.error(error)

            }
        }

        onMounted(() => {
            getProfileById()

        }
        )

        return {
            blogs: computed(() => AppState.blog),
        }
    }
}
</script>


<style lang="scss" scoped></style>
import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

    async getBlogs() {
        const response = await api.get('api/blogs')
        // logger.log('response data frm service', response.data)
        const foundBlogs = response.data.map(blogPOJO => new Blog(blogPOJO))
        // logger.log('found blogs', foundBlogs)
        AppState.blogs = foundBlogs
    }

    async getBlogsByCreatorId(profileId) {
        const response = await api.get(`api/blogs?creatorId=${profileId}`)
        // logger.log('blogs found?', response.data)
        const foundBlogs = response.data.map(blogPOJO => new Blog(blogPOJO))
        // logger.log('mapped', foundBlogs)
        AppState.blogs = foundBlogs
    }

}

export const blogsService = new BlogsService()
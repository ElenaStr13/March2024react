const baseURL = 'https://jsonplaceholder.typicode.com'

const posts:string = '/posts'

const urls = {
    posts: {
        base: posts,
        byId: (id :number) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}
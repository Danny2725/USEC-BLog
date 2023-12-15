export interface Post {
    id: number,
    title: string,
    image: string,
    category: string,
    author: string,
    authorPic: string,
    published_date: string,
    content: string,
    tags: string[],
}
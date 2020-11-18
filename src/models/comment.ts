export interface Comment {
    id: number,
    postId: number,
    userId: number,
    text: string,
    createdDate: Date,
    updatedDate: Date,
    Likes: any[]
}
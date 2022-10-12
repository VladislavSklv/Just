import Post, { IPost } from "./Post";

interface postListProps {
    posts: IPost[];
}

const PostList = ({posts}: postListProps) => {
    return (
        <div className="posts">
            {posts !== undefined && posts.length > 0 && posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
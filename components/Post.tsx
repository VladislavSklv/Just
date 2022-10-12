import postStyles from '../styles/Posts.module.scss';
import MyButton from './MyButton';

export interface IPost{
    id: number;
    author: string;
    time: string;
    title: string;
    subtitle: string;
    descr: string;
    body: string;
    preview: string;
}

interface PostProps{
    post: IPost;
}

const Post = ({post}: PostProps) => {
    return (
        <div className={postStyles.post}>
            <div className={postStyles.post__about}>
                <p className={postStyles.post__author}>{post.author}</p>
                <p className={postStyles.post__time}>{post.time}</p>
            </div>
            <h3 className={postStyles.post__title}>{post.title}</h3>
            <h4 className={postStyles.post__subtitle}>{post.subtitle}</h4>
            <div className={postStyles.post__preview}><img src={post.preview} alt="preview" /></div>
            <div className={postStyles.post__descr}>{post.descr}</div>
            <MyButton>Читать дальше</MyButton>
        </div>
    );
};

export default Post;
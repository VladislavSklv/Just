import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { IPost } from "../components/Post";
import PostList from "../components/PostList";

const HomePage = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const getPosts = async () => {
		const response = await fetch('api/posts');
		const data = await response.json();
		console.log(data);
		setPosts(data.posts);
	}

	useEffect(() => {
		getPosts();
	}, [])

	return (
		<>
			<Navbar/>
			<div className="container">
				<div className="main">
					<PostList posts={posts} />
				</div>
			</div>
		</>
	);
};

export default HomePage;
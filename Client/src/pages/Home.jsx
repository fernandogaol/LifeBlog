import axios from 'axios';
import {useEffect, useState} from 'react';
import './Home.css';
import Header from '../Components/header/Header';
import Posts from '../Components/posts/Posts';
import SideBar from '../Components/sidebar/SideBar';

export default function Home() {
	const [posts, setposts] = useState([]);

	useEffect(() => {
		const fecthPosts = async () => {
			const postsRes = await axios.get('posts');
			setposts(postsRes.data);
		};
		fecthPosts();
	}, []);

	return (
		<>
			<Header />
			<div className='home'>
				<Posts posts={posts} />
				<SideBar />
			</div>
		</>
	);
}

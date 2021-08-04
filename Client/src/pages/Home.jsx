import axios from 'axios';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import './Home.css';
import Header from '../Components/header/Header';
import Posts from '../Components/posts/Posts';
import SideBar from '../Components/sidebar/SideBar';

export default function Home() {
	const [posts, setposts] = useState([]);
	const {search} = useLocation();
	console.log(search);
	useEffect(() => {
		const fecthPosts = async () => {
			const postsRes = await axios.get('/posts' + search);
			setposts(postsRes.data);
			// console.log(postsRes);
		};
		fecthPosts();
	}, [search]);

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

import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './SinglePost.css';

export default function SinglePost() {
	const location = useLocation();
	const postPath = location.pathname.split('/')[2];
	const [post, setPost] = useState({});

	useEffect(() => {
		const getPost = async () => {
			const getPostRes = await axios.get('/posts/' + postPath);
			setPost(getPostRes.data);
		};
		getPost();
	}, [postPath]);
	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && (
					<img className='singlePostImage' src={post.photo} alt='' />
				)}

				<h1 className='singlePostTitle'>
					{post.title}
					<div className='singlePostOptions'>
						<i className='singlePostIcon far fa-edit'></i>
						<i className='singlePostIcon fas fa-minus-circle'></i>
					</div>
				</h1>

				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Author: <b>Safak</b>
					</span>
					<span className='singlePostDate'>
						{new Date(post.createdAt).toDateString}
					</span>
				</div>
				<p className='singlePostDesc'>{post.desc}</p>
			</div>
		</div>
	);
}

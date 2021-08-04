import {useLocation, Link} from 'react-router-dom';
import {useEffect, useState, useContext} from 'react';
import {Context} from '../../context/Context';
import axios from 'axios';
import './SinglePost.css';

export default function SinglePost() {
	const location = useLocation();
	const postPath = location.pathname.split('/')[2];
	const [post, setPost] = useState({});
	const {user} = useContext(Context);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [updateMod, setUpdateMode] = useState(false);

	useEffect(() => {
		const getPost = async () => {
			const getPostRes = await axios.get('/posts/' + postPath);
			setPost(getPostRes.data);
		};
		getPost();
	}, [postPath]);

	const handleDelete = async () => {
		try {
			await axios.delete('/posts/' + postPath, {
				data: {username: user.username},
			});
			window.location.replace('/');
		} catch (err) {}
	};

	const PF = 'http://localhost:5000/images/';
	return (
		<div className='singlePost'>
			<div className='singlePostWrapper'>
				{post.photo && (
					<img className='singlePostImage' src={PF + post.photo} alt='' />
				)}

				<h1 className='singlePostTitle'>
					{post.title}
					{post.username === user?.username && (
						<div className='singlePostOptions'>
							<i className='singlePostIcon far fa-edit'></i>
							<i
								className='singlePostIcon fas fa-minus-circle'
								onClick={handleDelete}
							></i>
						</div>
					)}
				</h1>

				<div className='singlePostInfo'>
					<span className='singlePostAuthor'>
						Author:&nbsp;
						<Link
							to={`/?user=${post.username}`}
							className='singlePostAuthorLink'
						>
							<b>{post.username}</b>
						</Link>
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

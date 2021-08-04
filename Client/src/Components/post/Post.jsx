import {Link} from 'react-router-dom';
import './Post.css';

export default function Post({post}) {
	const PF = 'http://localhost:5000/images/';
	return (
		<div className='post'>
			{post.photo && <img className='postImage' src={PF + post.photo} alt='' />}

			<div className='postInfo'>
				<div className='postCats'>
					{post.categories.map((c) => (
						<span className='postCat'>{c.name}</span>
					))}
					<Link to={`/post/${post._id}`} className='PostTitleLink'>
						<span className='postTitle'>{post.title}</span>
					</Link>
				</div>

				<hr />
				<span className='postDate'>
					{new Date(post.createdAt).toDateString()}
				</span>
				<p className='postDesc'>{post.desc}</p>
			</div>
		</div>
	);
}

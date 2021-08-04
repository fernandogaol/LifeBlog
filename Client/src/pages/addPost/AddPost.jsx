import axios from 'axios';
import {useState, useContext} from 'react';
import {Context} from '../../context/Context';
import './AddPost.css';

export default function AddPost() {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [file, setFile] = useState('');
	const {user} = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newPost = {
			username: user.username,
			title,
			desc,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append('name', filename);
			data.append('file', file);
			newPost.photo = filename;
			try {
				await axios.post('/upload', data);
			} catch (err) {}
		}
		try {
			const res = await axios.post('/posts', newPost);
			window.location.replace('/post/' + res.data._id);
		} catch (err) {}
	};

	return (
		<div className='addPost'>
			{file && (
				<img className='addPostImage' src={URL.createObjectURL(file)} alt='' />
			)}
			<form action='' className='addPostForm' onSubmit={handleSubmit}>
				<div className='addPostGroup'>
					<label htmlFor='fileInput'>
						<i class='addImageIcon fas fa-file-upload'>&nbsp;Upload Image</i>
					</label>
					<input
						type='file'
						id='fileInput'
						style={{display: 'none'}}
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</div>
				<div className='addPostGroup'>
					<input
						type='text'
						placeholder='Title'
						className='addPostInput'
						autoFocus={true}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						placeholder='Write your post here....'
						className='addPostInput writeText'
						type='text'
						onChange={(e) => setDesc(e.target.value)}
					></textarea>
				</div>
				<button type='submit' className='publishPost'>
					Publish
				</button>
			</form>
		</div>
	);
}

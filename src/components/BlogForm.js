import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BlogForm = () =>{
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = () =>{
        axios.post("http://localhost:5000/posts", {
        title,
        body
        }).then(()=>{
            navigate('/blogs');
        });
    }
    return(
        <div>
            <h1 className='d-flex justify-content-center'>Create a blog post</h1>
            <div className='mb-3'>
                <label className='form-label'>Title</label>
                <input
                className='form-control'
                value={title}
                onChange={(e) =>{
                    setTitle(e.target.value);
                }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Body</label>
                <textarea
                className='form-control'
                value={body}
                onChange={(e) =>{
                    setBody(e.target.value);
                }}
                rows={20}
                />
            </div>
            <button className='btn btn-primary' onClick={onSubmit}>Post</button>
        </div>
    );
}

export default BlogForm;
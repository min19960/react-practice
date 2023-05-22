import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogForm = ({ editing }) =>{
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [originalTitle, setOriginalTitle] = useState('');
    const [body, setBody] = useState('');
    const [originalBody, setOriginalBody] = useState('');
    const [publish, setPublish] = useState(false);
    const [originalPublish, setOriginalPublish] = useState(false);

    useEffect(() =>{
        if(editing){
            axios.get(`http://localhost:5000/posts/${id}`).then(res =>{
                setTitle(res.data.title);
                setOriginalTitle(res.data.title);
                setBody(res.data.body);
                setOriginalBody(res.data.body);
                setPublish(res.data.publish);
                setOriginalPublish(res.data.publish);
            })
        }
    }, [id, editing]);

    const isEdited = () =>{
        return title !== originalTitle || body !== originalBody || publish !== originalPublish;
    }

    const goBack = () =>{
        if(editing){
            navigate(`/blogs/${id}`);
        }else{
            navigate('/blogs');
        }
    }

    const onSubmit = () =>{
        if(editing){
            axios.patch(`http://localhost:5000/posts/${id}`,{
                title,
                body,
                publish
            }).then(res =>{
                navigate(`/blogs/${id}`);
            });
        } else{
            axios.post("http://localhost:5000/posts", {
                title,
                body,
                publish,
                createdAt: Date.now()
            }).then(()=>{
                navigate('/blogs');
            });
        }
    }

    const onChangePublish = (e) =>{
        setPublish(e.target.checked);
    };

    return(
        <div>
            <h1 className='d-flex justify-content-center'>{editing ? 'Edit' : 'Create'} a blog post</h1>
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
            <div className='form-check mb-3'>
                <input 
                    className='form-check-input'
                    type='checkbox'
                    checked={publish}
                    onChange={onChangePublish}
                />
                <label className='form-check-label'>
                    Publish
                </label>
            </div>
            <button className='btn btn-primary' onClick={onSubmit} disabled={editing && !isEdited()}>
                {editing ? 'Edit' : 'Post'}
            </button>
            <button className='btn btn-danger ms-2' onClick={goBack}>
                Cancel
            </button>
        </div>
    );
}

BlogForm.propTypes = {
    editing: PropTypes.bool
}

BlogForm.defaultProps = {
    editing: false
}

export default BlogForm;
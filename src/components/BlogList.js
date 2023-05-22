import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from "./LoadingSpinner";
import Card from "./Card"
import propTypes from 'prop-types';

const BlogList = ({ isAdmin }) =>{
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    const getPosts = () => {
        axios.get('http://localhost:5000/posts').then((res) => {
            setPosts(res.data);
            setLoading(false);
        })
    }

    const deleteBlog = (e, id) => {
        e.stopPropagation();
        axios.delete(`http://localhost:5000/posts/${id}`).then(() => {
            setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
        });
    };

    useEffect(() => {
        getPosts();
    }, []);
    if(loading){
        return (
            <LoadingSpinner />
        );
    }

    if(posts.length === 0){
        return (
            <h3 className='d-flex justify-content-center mt-5'>No blog posts found</h3>
        );
    }

    return posts.filter(post =>{
        return isAdmin || post.publish
    }).map(post => {
        return (
            <Card
                key={post.id}
                title={post.title}
                onClick={() => navigate(`/blogs/${post.id}`)}
            >
                {isAdmin ? (<div>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={(e) => deleteBlog(e, post.id)}
                    >
                        Delete
                    </button>
                </div>) : null}
            </Card>
        );
    });
};

BlogList.propTypes = {
    isAdmin : propTypes.bool
}

BlogList.defaultProps = {
    isAdmin : false
}

export default BlogList;
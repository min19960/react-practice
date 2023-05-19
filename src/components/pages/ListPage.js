import axios from "axios";
import { useState, useEffect } from 'react';
import Card from "../Card";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from "../LoadingSpinner";

const ListPage = () => {
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

    const renderBlogList = () =>{
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

        return posts.map(post => {
            return (
                <Card
                    key={post.id}
                    title={post.title}
                    onClick={() => navigate('/blogs/edit')}
                >
                    <div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={(e) => deleteBlog(e, post.id)}
                        >
                            Delete
                        </button>
                    </div>
                </Card>
            );
        });
    };

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">Blogs</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-dark">
                        Create New
                    </Link>
                </div>
            </div>
            {renderBlogList()}
        </div>
    );
}

export default ListPage;
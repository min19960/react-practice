import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";

const ShowPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPost = (id) => {
        axios.get(`http://localhost:5000/posts/${id}`).then((res) => {
            setPost(res.data);
            setLoading(false);
        });
    };

    const printDate = (timestamp) => {
        return new Date(timestamp).toLocaleString();
    }

    useEffect(() => {
        getPost(id);
    }, [id]);

    if (loading) {
        return <LoadingSpinner />
    }
    return (
        <div>
            <div className="d-flex">
                <h1 className="flex-grow-1">{post.title}</h1>
                <div>
                    <Link className="btn btn-dark" to={`/blogs/${id}/edit`}>
                        Edit
                    </Link>
                </div>
            </div>
            <small className="text-muted">CreatedAt : {printDate(post.createdAt)}</small>
            <hr />
            <p>{post.body}</p>
        </div>
    )
};

export default ShowPage;
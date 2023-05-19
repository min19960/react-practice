import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner";

const ShowPage = () =>{
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    const getPost = (id) =>{
        axios.get(`http://localhost:5000/posts/${id}`).then((res)=>{
            setPost(res.data);
            setLoading(false);
        });
    };

    useEffect(()=>{
        getPost(id);
    }, [id]);

    if(loading){
        return <LoadingSpinner />
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
};

export default ShowPage;
import { Link } from 'react-router-dom';
import BlogList from "../BlogList";

const AdminPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">Admin</h1>
                <div>
                    <Link to="/blogs/create" className="btn btn-dark">
                        Create New
                    </Link>
                </div>
            </div>
            <BlogList isAdmin={true}/>
        </div>
    );
}

export default AdminPage;
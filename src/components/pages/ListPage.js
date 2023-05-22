import BlogList from "../BlogList";

const ListPage = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="mb-3">Blogs</h1>
            </div>
            <BlogList />
        </div>
    );
}

export default ListPage;
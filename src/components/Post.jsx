import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store.jsx";

function Post({ post }) {
    const {deletePost} = useContext(PostList);

    return (
        <>
            <div className="card post-card mb-3">
                <div className="card-body">
                    <h5 className="card-title">
                        {post.title}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                            <MdDelete />
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {
                        post.tags.map((tag) => <span key={tag} className="badge text-bg-primary me-1">{tag}</span>)
                    }
                    <div className="alert alert-success mt-2 mb-0" role="alert">
                        This post has been reacted by {post.reacton} people.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post;
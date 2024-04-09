import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store.jsx";

function PostList() {
    const { postList } = useContext(PostListData);
    return (
        <>
            <div className="container px-4 my-4">
                <div className="row">
                    {
                        postList.map((post) => (
                            <div className="col-md-6" key={post.id}>
                                <Post post={post} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PostList;
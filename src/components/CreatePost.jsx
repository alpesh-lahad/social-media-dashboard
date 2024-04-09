import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const { addPost } = useContext(PostList);
    const navigate = useNavigate();

    const userIDElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const userID = userIDElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value;
        const reactions = reactionsElement.current.value;
        const tags = tagsElement.current.value.split(" ");

        userIDElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        addPost(userID, postTitle, postBody, reactions, tags);

        navigate('/');
    }

    return (
        <>
            <div className="post-form-cont">
                <div className="container my-3">
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                            <form className="create-post" onSubmit={ handleSubmit }>
                                <div className="mb-3">
                                    <label htmlFor="userID" className="form-label">User ID</label>
                                    <input type="text" ref={userIDElement} className="form-control" id="userID" placeholder="Your user ID" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Post Title</label>
                                    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="body" className="form-label">Post Body</label>
                                    <textarea className="form-control" ref={postBodyElement} id="body" rows="3" placeholder="tell us more about yourself"></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="reactions" className="form-label">Reactions</label>
                                    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tags" className="form-label">Enter your tags here</label>
                                    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags using space" />
                                </div>

                                <button type="submit" className="btn btn-primary">Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreatePost;
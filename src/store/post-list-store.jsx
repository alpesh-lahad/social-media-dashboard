import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postID)
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispachPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userID, postTitle, postBody, reactions, tags) => {
        dispachPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reacton: reactions,
                userID: userID,
                tags: tags,
            }
        })
    };

    const deletePost = (postID) => {
        dispachPostList({
            type: "DELETE_POST",
            payload: {
                postID,
            }
        })
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
};

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Akola',
        body: 'Hi Friends, I am going to my hometown for summer vacation',
        reacton: 2,
        userID: 'user-7',
        tags: ['Vacation', 'Akola', 'Enjoying'],
    },
    {
        id: '2',
        title: 'Pass ho gai hai bhai...',
        body: 'Chhar saal ke masti ke baad bhi pappu pass ho gaya',
        reacton: 15,
        userID: 'user-9',
        tags: ['Graduating', 'Unbelievable'],
    },
];

export default PostListProvider;
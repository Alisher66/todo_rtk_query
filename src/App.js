import './App.css';
import {useGetGoodsQuery, useAddNewPostMutation, useDeletePostMutation} from "./redux";
import {useState} from "react";

function App() {
    const {data = [], isLoading} = useGetGoodsQuery(5);
    const [text, setText] = useState("");
    const [addNewPost, {}] = useAddNewPostMutation();
    const [deletePost, {}] = useDeletePostMutation();
    const addPostHendler = async () => {
        await addNewPost({body:text, name:text})
        setText("")
    }
    const deletePostHendler = async (id) => {
        await deletePost(id);
    }
    return (
        <div>
            <input type="text" value={text} onChange={(e) => {setText(e.target.value)}}/>
            <button onClick={addPostHendler}>add</button>
            <ul>
                {isLoading && <h1>Loading...</h1>}
                {data.map(item => (
                    <li key={item.id}>{item.name}<span onClick={() => {deletePostHendler(item.id)}}>&times;</span></li>
                ))}
            </ul>
        </div>
    );
}

export default App;

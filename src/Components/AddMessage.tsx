import { useState } from 'react';
import PostComment from '../Hooks/PostComment';

const AddMessage = ({id}) => {

    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        PostComment(message, id);
    }

    return ( 
        <form className="w-full flex justify-end" onSubmit={handleSubmit}>
            <textarea
            className="mr-4 px-2 flex-1 border-2 border-champagne-100 rounded focus:outline-none resize-none placeholder-champagne-100"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button 
            className="bg-champagne-100 px-4 py-2 h-fit my-auto rounded-lg text-white"
            type="submit">Submit
            </button>
        </form>
    );
}
 
export default AddMessage;
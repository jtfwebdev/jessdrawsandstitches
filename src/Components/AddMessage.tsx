import { useState } from 'react';
import PostComment from '../Hooks/PostComment';

const AddMessage = ({itemView}) => {

    const [message, setMessage] = useState("");
    const [placeholderMessage, setPlaceholderMessage] = useState("Write a message...")

    const handleSubmit = (e) => {
        e.preventDefault();
        PostComment(message, itemView.id, setMessage, setPlaceholderMessage);
    }

    return ( 
        <form className="w-full flex justify-end" onSubmit={handleSubmit}>
            <textarea
            className="mr-4 px-2 flex-1 py-2 border-2 border-champagne-100 text-[#C95D63] rounded focus:outline-none resize-none placeholder-champagne-100"
            placeholder={placeholderMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
            <button 
            className="bg-champagne-100 px-4 py-2 h-fit my-auto rounded-lg text-[#C95D63] hover:opacity-80"
            type="submit">Submit
            </button>
        </form>
    );
}
 
export default AddMessage;
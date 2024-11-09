import { Link } from 'react-router-dom';
import './chatList.css';

const ChatList = ({ isOpen }) => {
  return (
    <div className={`chatList ${isOpen ? '' : 'closed'}`}>
        <span className='title'>DASHBOARD</span>
        <Link to="/dashboard">Create a new Chat</Link>

        <label htmlFor="file" className='fileupload'>
          <span>Upload Document</span> 
          <img src="attachment.png" alt="" className="attachment-icon" />
        </label>
        <input id="file" type="file" multiple={false} hidden/>

        <hr />
        <span className='title'>RECENT CHATS</span>
        <div className="list">
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
            <Link to="/">My chat title</Link>
        </div>
        <hr />
        <div className="support">
            <img src="/support.png" alt="" />
            <div className="texts">
                <span>Support</span>
            </div>
        </div>
    </div>
  );
}

export default ChatList;

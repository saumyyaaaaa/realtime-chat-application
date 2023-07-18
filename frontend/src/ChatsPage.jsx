import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import './ChatsPage.css'; 

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'c02445f2-63a2-4413-8312-72395fde75b3',
        props.user.username,
        props.user.secret
    );

    return (
        <div className="chats-page">
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} />
        </div>
    );
};

export default ChatsPage;
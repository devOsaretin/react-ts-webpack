import "./styles.css";
import Logo from "./foodlogo.png";
import { useState } from "react";
import Chat from "./Chat";

export const App = () => {
	const [showChat, setShowChat] = useState(false);

	const handleShowChat = () => setShowChat(x => !x);
	return (
		<>
			{showChat ? (
				<Chat showChat handleShowChat={handleShowChat} />
			) : (
				<button className="chat-btn" onClick={() => setShowChat(true)}>
					CHAT
				</button>
			)}
		</>
	);
};

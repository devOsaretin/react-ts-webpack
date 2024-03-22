export default function Chat({
	showChat,
	handleShowChat,
}: {
	showChat: boolean;
	handleShowChat: () => void;
}) {
	return (
		<div className="chat-box">
			<span onClick={handleShowChat}>X</span>
			<p>Hello Chat with </p>
			<button>Great</button>
		</div>
	);
}

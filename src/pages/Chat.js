import React, { useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';

export default function Chat() {
	const [user] = useState(auth().currentUser);
	const [chatData, setChatData] = useState({
		chats: [],
		content: '',
		readError: null,
		writeError: null,
	});
	useEffect(() => {
		(async function () {
			try {
				db.ref('chats').on('value', (snapshot) => {
					let chats = [];
					snapshot.forEach((snap) => {
						chats.push(snap.val());
					});
					setChatData({
						...chatData,
						chats,
					});
				});
			} catch (error) {
				console.log(error);
			}
		})();
		// eslint-disable-next-line
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setChatData({
			...chatData,
			writeError: null,
		});
		try {
			await db.ref('chats').push({
				content: chatData.content,
				timestamp: Date.now(),
				uid: user.uid,
			});

			// setChatData({
			// 	...chatData,
			// 	content: '',
			// });
		} catch (error) {
			setChatData({
				...chatData,
				writeError: error.message,
			});
		}
	};

	const handleChange = (e) => {
		setChatData({
			...chatData,
			content: e.target.value,
		});
	};

	return (
		<>
			<div className='chats'>
				<div className='flex'>
					{chatData.chats.map((chat) => {
						return (
							<p key={chat.timestamp} className='chat'>
								{chat.content}
							</p>
						);
					})}
				</div>
			</div>
			<div className='bottom'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={chatData.content}
						onChange={handleChange}
					/>
					{chatData.writeError && <p>{chatData.writeError}</p>}
					<button type='submit'>Send</button>
				</form>
				<div>
					Login in as: <strong>{user.email}</strong>
				</div>
			</div>
		</>
	);
}

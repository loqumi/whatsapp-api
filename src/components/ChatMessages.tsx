import React from 'react';

interface Message {
    sender: string;
    text: string;
}

interface ChatMessagesProps {
    chat: Message[];
}

export function ChatMessages({ chat }: ChatMessagesProps) {
    return (
        <div className="chat-messages">
            {chat.map((msg, index) => (
                <div key={index} className={`message ${msg.sender === "me" ? "messages-output" : "messages-input"}`}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
}
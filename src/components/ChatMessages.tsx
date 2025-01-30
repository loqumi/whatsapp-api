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
        <div className="border p-2 h-60 overflow-auto my-2 rounded-md bg-gray-100">
            {chat.map((msg, index) => (
                <div key={index} className={`my-1 p-2 rounded-lg ${msg.sender === "me" ? "bg-blue-300 ml-auto" : "bg-gray-300"}`}>
                    {msg.text}
                </div>
            ))}
        </div>
    );
}
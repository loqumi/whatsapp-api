import React, { useState } from "react";
import { ChatInput } from "../components/ChatInput";
import { ChatMessages } from "../components/ChatMessages";
import { Input } from "../components/Input";
import {sendMessageAPI} from "../utils/api";

interface Message {
    sender: string;
    text: string;
}

const Chat = ({ idInstance, apiTokenInstance }: { idInstance: string; apiTokenInstance: string }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [chat, setChat] = useState<Message[]>([]);

    const sendMessage = async (message: string) => {
        if (!phoneNumber || !message) return;
        try {
            await sendMessageAPI(idInstance, apiTokenInstance, phoneNumber, message);
            setChat((prevChat) => [...prevChat, { sender: "me", text: message }]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div>
            <Input placeholder="Recipient Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <ChatMessages chat={chat} />
            <ChatInput onSend={sendMessage} />
        </div>
    );
}

export default Chat;
import React, { useState, useEffect } from "react";
import { ChatInput } from "../components/ChatInput";
import { ChatMessages } from "../components/ChatMessages";
import { Input } from "../components/Input";
import { useDebounce } from "@uidotdev/usehooks";
import {sendMessageAPI, receiveMessagesAPI, deleteNotificationAPI} from "../utils/api";
import '../styles/chatPage.css'

interface Message {
    sender: string;
    text: string;
}

const Chat = ({ idInstance, apiTokenInstance }: { idInstance: string; apiTokenInstance: string }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const debouncedPhoneNumber = useDebounce(phoneNumber, 500);
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

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const data = await receiveMessagesAPI(idInstance, apiTokenInstance);
                if (data?.body?.messageData?.textMessageData?.textMessage) {
                    setChat((prevChat) => [...prevChat, { sender: "other", text: data.body.messageData.textMessageData.textMessage }]);
                    await deleteNotificationAPI(idInstance, apiTokenInstance, data.receiptId);
                }
            } catch (error) {
                console.error("Error receiving message:", error);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [idInstance, apiTokenInstance]);

    useEffect(() => {
        setChat([])
    }, [debouncedPhoneNumber]);

    return (
        <div className="chat-page">
            <div className="header">
                <div className="avatar"></div>
                <Input placeholder="Recipient Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div className="chat-container">
                <ChatMessages chat={chat} />
                <ChatInput onSend={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;
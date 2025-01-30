import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface ChatInputProps {
    onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
    const [message, setMessage] = useState("");

    return (
        <form onSubmit={() => onSend(message)} className="chat-input">
            <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button disabled={!message} onClick={() => {
                onSend(message);
                setMessage("");
            }}>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className=""
                     version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title>
                    <path fill="currentColor"
                          d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path>
                </svg>
            </Button>
        </form>
    );
}
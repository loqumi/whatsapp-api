import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface ChatInputProps {
    onSend: (message: string) => void;
}

export function ChatInput({ onSend }: ChatInputProps) {
    const [message, setMessage] = useState("");

    return (
        <div>
            <Input
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={() => { onSend(message); setMessage(""); }}>Send</Button>
        </div>
    );
}
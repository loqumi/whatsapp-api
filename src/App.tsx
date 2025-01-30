import React, { useState } from "react";
import AuthPage from "./pages/Auth";
import Chat from "./pages/Chat";

export default function App() {
    const [idInstance, setIdInstance] = useState<string | null>(localStorage.getItem("idInstance"));
    const [apiTokenInstance, setApiTokenInstance] = useState<string | null>(localStorage.getItem("apiTokenInstance"));

    if (!idInstance || !apiTokenInstance) {
        return <AuthPage onAuth={(id, token) => { setIdInstance(id); setApiTokenInstance(token); }} />;
    }

    return <Chat idInstance={idInstance} apiTokenInstance={apiTokenInstance} />;
}
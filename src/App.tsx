import React, { useState } from "react";
import AuthPage from "./pages/Auth";

export default function App() {
    const [idInstance, setIdInstance] = useState<string | null>(localStorage.getItem("idInstance"));
    const [apiTokenInstance, setApiTokenInstance] = useState<string | null>(localStorage.getItem("apiTokenInstance"));

    if (!idInstance || !apiTokenInstance) {
        return <AuthPage onAuth={(id, token) => { setIdInstance(id); setApiTokenInstance(token); }} />;
    }

    return <div>chat</div>;
}
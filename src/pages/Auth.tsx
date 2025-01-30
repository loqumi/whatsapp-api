import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import "../styles/authPage.css";

const AuthPage = ({ onAuth }: { onAuth: (id: string, token: string) => void }) => {
    const [idInstance, setIdInstance] = useState("");
    const [apiTokenInstance, setApiTokenInstance] = useState("");

    const handleLogin = () => {
        localStorage.setItem("idInstance", idInstance);
        localStorage.setItem("apiTokenInstance", apiTokenInstance);
        onAuth(idInstance, apiTokenInstance);
    };

    return (
        <form onSubmit={handleLogin} className="auth-container">
            <h1>Sign Up</h1>
            <Input placeholder="idInstance" value={idInstance} onChange={(e) => setIdInstance(e.target.value)} />
            <Input type='password' placeholder="apiTokenInstance" value={apiTokenInstance} onChange={(e) => setApiTokenInstance(e.target.value)} />
            <Button disabled={!(idInstance && apiTokenInstance)} onClick={handleLogin}>Sign Up</Button>
        </form>
    );
}

export default AuthPage;
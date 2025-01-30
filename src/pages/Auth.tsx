import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const AuthPage = ({ onAuth }: { onAuth: (id: string, token: string) => void }) => {
    const [idInstance, setIdInstance] = useState("");
    const [apiTokenInstance, setApiTokenInstance] = useState("");

    const handleLogin = () => {
        localStorage.setItem("idInstance", idInstance);
        localStorage.setItem("apiTokenInstance", apiTokenInstance);
        onAuth(idInstance, apiTokenInstance);
    };

    return (
        <div>
            <h2>Login</h2>
            <Input placeholder="idInstance" value={idInstance} onChange={(e) => setIdInstance(e.target.value)} />
            <Input placeholder="apiTokenInstance" value={apiTokenInstance} onChange={(e) => setApiTokenInstance(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
}

export default AuthPage;
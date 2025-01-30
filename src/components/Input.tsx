import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`${className}`}
            {...props}
        />
    );
}
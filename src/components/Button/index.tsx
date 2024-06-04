"use client";
import React from 'react'

interface Props {
    text: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'warning';
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, variant = 'primary', onClick = () => {} }) => {
    const variants = {
        primary: 'bg-primary text-white rounded p-3 font-medium hover:bg-opacity-90 text-gray',
        secondary: 'bg-secondary text-white rounded p-3 font-medium hover:bg-opacity-90 text-gray',
        outline: 'border border-gray-300 text-black rounded p-3 font-medium hover:bg-opacity-90',
        danger: 'bg-red text-white rounded p-3 font-medium hover:bg-opacity-90',
        warning: 'bg-orange-400 text-white rounded p-3 font-medium hover:bg-opacity-90',
    }

    return (
        <button onClick={onClick} className={`flex w-full justify-center ${variants[variant]}`}>
            {text}
        </button>
    )
}

export default Button

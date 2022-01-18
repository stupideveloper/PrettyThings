import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
export default function Input({ className, ...props }: InputProps): JSX.Element;
export {};

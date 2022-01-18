import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}


export default function Input({ className, ...props }: InputProps) {
	return (
		<input className={`focus:rounded-lg border-0 w-full sm:w-1/2 md:w-auto border-b-2 focus:border-blue-500 transition ${className ? className : ''}`} {...props} />
	)
}

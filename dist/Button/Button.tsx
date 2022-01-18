import React from 'react';
import PropTypes from 'prop-types';
import LoadingIcon from '../LoadingIcon';

interface ButtonProps {
  //icon: React.ReactNode;
  label: string;
  loading?: boolean;
  disabled?: boolean;
  varient?: 'outline' | 'ghost' | 'default';
  onClick: () => void;
}


export default function Button({ label, loading, varient, disabled, ...props }: ButtonProps) {
  const baseStyles = `h-10 mt-6 md:mt-0 transition border font-bold rounded-lg px-8 text-white `;
  if (varient === 'outline') {
    return (
      <button 
        {...props}
        disabled={loading || disabled ? true : false} 
        className={`border-blue-500 ${loading || disabled ? 'cursor-not-allowed text-blue-400' : 'hover:bg-blue-600 hover:text-blue-100 text-blue-500'} ${baseStyles}`}
      >
        {loading ? (<LoadingIcon />): label}
      </button>
    )
  }
  if (varient === 'ghost') {
    return (
      <button 
        {...props}
        disabled={loading || disabled ? true : false} 
        className={`${baseStyles} border-0 text-blue-500 hover:text-blue-900 ${loading || disabled ? 'cursor-not-allowed bg-blue-400' : 'hover:bg-blue-200'} `}
      >
        {loading ? (<LoadingIcon />): label}
      </button>
    )
  }
  return (
    <button 
      {...props}
      disabled={loading || disabled ? true : false} 
      className={` ${loading || disabled ? 'cursor-not-allowed bg-blue-400 border-0' : 'hover:bg-blue-600 bg-blue-500 hover:text-blue-100'} ${baseStyles}`}
    >
     {loading ? (<LoadingIcon />): label}
    </button>
    
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  varient: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: undefined,
  loading: false,
  disabled: false,
};

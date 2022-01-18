import React from 'react';
import PropTypes from 'prop-types';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
 
}


export default function Input({ ...props }: InputProps) {
	return (
		<input {...props} className='focus:rounded-lg border-0 w-full sm:w-1/2 md:w-auto border-b-2 focus:border-blue-500 transition' />
	)
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  varient: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  onClick: undefined,
  loading: false,
  disabled: false,
};

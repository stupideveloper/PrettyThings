import React from 'react';
import PropTypes from 'prop-types';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
 	label: string;
	htmlFor?: string;
  className?: string;
}


export default function Label({label, htmlFor, className, ...props }: LabelProps) {
	return (
		<label className={`block text-gray-500 mb-2 ${className ? className : ''}`} htmlFor={htmlFor ? htmlFor : undefined} {...props}>{label}</label>
	)
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  varient: PropTypes.string,
  disabled: PropTypes.bool,
};

Label.defaultProps = {
  onClick: undefined,
  loading: false,
  disabled: false,
};

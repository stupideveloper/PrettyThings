import React from 'react';
import PropTypes from 'prop-types';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
 	label: string;
	 htmlFor?: string;
}


export default function Label({label, htmlFor, ...props }: LabelProps) {
	return (
		<label className='block text-gray-500 mb-2' htmlFor={htmlFor ? htmlFor : undefined}>{label}</label>
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

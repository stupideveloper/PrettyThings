import React from 'react';
import PropTypes from 'prop-types';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare function Input({ ...props }: InputProps): JSX.Element;
declare namespace Input {
    var propTypes: {
        label: PropTypes.Validator<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        loading: PropTypes.Requireable<boolean>;
        varient: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        onClick: any;
        loading: boolean;
        disabled: boolean;
    };
}
export default Input;

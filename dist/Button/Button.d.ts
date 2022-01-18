import React from 'react';
import PropTypes from 'prop-types';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    loading?: boolean;
    disabled?: boolean;
    varient?: 'outline' | 'ghost' | 'default';
}
declare function Button({ label, loading, varient, disabled, ...props }: ButtonProps): JSX.Element;
declare namespace Button {
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
export default Button;

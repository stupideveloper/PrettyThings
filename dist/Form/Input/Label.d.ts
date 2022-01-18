import React from 'react';
import PropTypes from 'prop-types';
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label: string;
    htmlFor?: string;
}
declare function Label({ label, htmlFor, ...props }: LabelProps): JSX.Element;
declare namespace Label {
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
export default Label;

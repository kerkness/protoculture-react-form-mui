import _ from "lodash";
import React from "react";
import { FormContext, withForm } from "protoculture-react-form";
import { ButtonProps } from "@material-ui/core/Button";


interface ComponentProps {

    children: React.ReactElement<ButtonProps>;
}

export type Props = ComponentProps & FormContext<any>;

class ButtonWrapperComponent extends React.PureComponent<Props> {

    public render() {

        const buttonElement = this.props.children;

        return React.cloneElement<ButtonProps>(buttonElement, {
            disabled: buttonElement.props.disabled || this.props.immutable,
            onClick: (e) => this.clicked(e),
        });
    }

    private async clicked(event: React.MouseEvent<HTMLElement>) {

        this.props.form.submit();
    }
}

export const ButtonWrapper = withForm(ButtonWrapperComponent);

import _ from "lodash";
import React from "react";
import { FormContext, withForm } from "protoculture-react-form";
import { TextFieldProps } from "@material-ui/core/TextField";


interface ComponentProps {

    children: React.ReactElement<TextFieldProps>;
}

type Props = ComponentProps & FormContext<any>;

class TextFieldWrapperComponent extends React.PureComponent<Props> {

    public render() {

        const textFieldElement = this.props.children;
        const fieldName = textFieldElement.props.name;
        const validationErrors = _.get(this.props.validationErrors, `${this.props.index}.${fieldName}`);

        return React.cloneElement<TextFieldProps>(textFieldElement, {
            defaultValue: this.props.data[fieldName],
            disabled: textFieldElement.props.disabled || this.props.immutable,
            error: !!validationErrors,
            helperText: !!validationErrors
                ? _.upperFirst(validationErrors.message) 
                : null,
            onBlur: (e: React.SyntheticEvent<HTMLInputElement>) => this.blurred(e),
            onKeyPress: (e: React.KeyboardEvent<any>) => this.keyPressed(e),
            onChange: (e: React.ChangeEvent<any>) => this.changed(e),
        });
    }

    private async blurred(event: React.SyntheticEvent<HTMLInputElement>) {

        // parentForm.trySetFieldValue(fieldMetadata.path, e.currentTarget.value);
    }

    private async keyPressed(event: React.KeyboardEvent<any>) {

        // event.persist();

        // if (event.nativeEvent.keyCode === 13) {

        //     await parentForm.setFieldValue(fieldMetadata.path, (e.target as any).value);
        // }

        // fieldMetadata.element.props.onKeyPress && await fieldMetadata.element.props.onKeyPress(e);
    }

    private async changed(event: React.ChangeEvent<any>) {

        this.props.form.setFieldValue(this.props.index, this.props.children.props.name, event.currentTarget.value);
        // if (debounce) {

        //     clearTimeout(debounce);
        // }

        // const newValue = e.currentTarget.value;

        // debounce = setTimeout(
        //     () => parentForm.trySetFieldValue(fieldMetadata.path, newValue),
        //     200
        // );
    }
}

export const TextFieldWrapper = withForm(TextFieldWrapperComponent);

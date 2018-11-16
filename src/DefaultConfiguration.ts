import { TextField, Button } from "@material-ui/core";
import { TextFieldWrapper } from "./Component/TextFieldWrapper";
import { ButtonWrapper } from "./Component/ButtonWrapper";


export const defaultConfiguration = [
    {
        type: TextField,
        with: [
            TextFieldWrapper,
        ],
    },
    {
        type: Button,
        with: [
            ButtonWrapper,
        ]
    }
];

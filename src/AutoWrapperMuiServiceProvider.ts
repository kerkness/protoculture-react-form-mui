import { ServiceProvider } from "protoculture";
import { WrappingConfiguration } from "auto-wrapper";
import { TextField } from "@material-ui/core";
import { TextFieldWrapper } from "./Component/TextFieldWrapper";


export class AutoWrapperMuiServiceProvider extends ServiceProvider {

    public async boot() {

        this.bundle.container
            .bind<WrappingConfiguration>(autoWrapperMuiSymbols.MuiAutoWrapper)
            .toConstantValue({
                type: TextField,
                with: [
                    TextFieldWrapper,
                ],
            });
    }
}

export const autoWrapperMuiSymbols = {
    MuiAutoWrapper: Symbol("MuiAutoWrapper"),
};

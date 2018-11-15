import { ServiceProvider } from "protoculture";
import { WrappingConfiguration } from "auto-wrapper";
import { defaultConfiguration } from "./DefaultConfiguration";


export class AutoWrapperMuiServiceProvider extends ServiceProvider {

    public async boot() {

        defaultConfiguration.forEach((configuration) => this.bundle.container
            .bind<WrappingConfiguration>(autoWrapperMuiSymbols.MuiAutoWrapper)
            .toConstantValue(configuration));
    }
}

export const autoWrapperMuiSymbols = {
    MuiAutoWrapper: Symbol("MuiAutoWrapper"),
};

import { Injector } from '@angular/core';

export class AppInjector {
    private static injector: Injector;

    static setInjector(injector: Injector) {
        AppInjector.injector = injector;
    }

    static getInjector(): Injector {
        debugger;
        return AppInjector.injector;
    }
}
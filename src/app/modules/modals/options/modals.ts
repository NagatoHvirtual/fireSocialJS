import { AlertComponent } from "../components/alert/alert.component";
import { Injector, Injectable, ComponentFactoryResolver, ApplicationRef, EmbeddedViewRef, ComponentRef } from "@angular/core";


@Injectable()
export class Modals {
    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver,
        private _appRef: ApplicationRef,
        private _injector: Injector
    ) { }

    public open = this._open;
    public alert = this._alert;

    private _alert(__message: string) {
        let componentRef = this._process(AlertComponent);
        componentRef.instance.message = __message;
        componentRef.hostView.detectChanges();
        return componentRef;
    }

    private _open(__component: any, __data?: any) {
        let componentRef = this._process(__component);
        Object.assign(componentRef.instance, __data);
        componentRef.hostView.detectChanges();
        return componentRef;
    }

    private _process(__component: any): ComponentRef<any> {
        let componentRef = this._componentFactoryResolver
            .resolveComponentFactory(__component)
            .create(this._injector);

        componentRef.hostView.detach();
        this._appRef.attachView(componentRef.hostView);
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;

        document.body.appendChild(domElem);
        return componentRef;
    }
}

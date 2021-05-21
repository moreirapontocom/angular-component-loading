import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class LoadingService {
    constructor() { }
}
LoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
LoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
LoadingService.ctorParameters = () => [];

class LoadingComponent {
    ngOnChanges(changes) {
        if (changes.loading) {
            this._loading = (typeof this.loading === 'boolean') ?
                this.loading :
                (changes.loading.currentValue >= 1) ? false : true;
        }
    }
    ngOnInit() {
        // Parent
        if (this.button !== undefined)
            this._parent = 'button';
        else if (this.page !== undefined)
            this._parent = 'page';
        else
            this._parent = 'page';
        // Size
        if (this.sm !== undefined)
            this._size = 'small';
        else if (this.md !== undefined)
            this._size = 'medium';
        else if (this.lg !== undefined)
            this._size = 'large';
        else
            this._size = (this._parent === 'page') ? 'medium' : 'small';
        // Color
        if (this.light === undefined)
            this._colorScheme = 'dark';
        else
            this._colorScheme = 'light';
        // Content
        this._content = (this.content === undefined) ? 'bootstrap' : this.content;
    }
}
LoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'ls-loading',
                template: "<ng-container>\n    <span [ngClass]=\"_parent\" class=\"ls-loading\">\n        <span \n            *ngIf=\"_loading && _content !== 'bootstrap'\"\n            [ngClass]=\"[_colorScheme == 'dark' ? 'dark' : 'light', _size]\">\n                {{ _content }}</span>\n\n        <i \n            *ngIf=\"_loading && _content === 'bootstrap'\" \n            [ngClass]=\"[_colorScheme == 'dark' ? 'dark' : 'light', _size]\"\n            class=\"fas fa-circle-notch fa-spin\"></i>\n    </span>\n</ng-container>",
                styles: [".ls-loading{font-size:1rem}.ls-loading.button{display:inline-block;margin-right:5px}.ls-loading.page{display:block;text-align:center;clear:both}.ls-loading .dark{color:var(--blue)}.ls-loading .light{color:#fff}.ls-loading .small{font-size:1rem}.ls-loading .medium{font-size:2rem}.ls-loading .large{font-size:3rem}"]
            },] }
];
LoadingComponent.propDecorators = {
    sm: [{ type: Input }],
    md: [{ type: Input }],
    lg: [{ type: Input }],
    light: [{ type: Input }],
    button: [{ type: Input }],
    page: [{ type: Input }],
    loading: [{ type: Input }],
    content: [{ type: Input }]
};

class LoadingModule {
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LoadingComponent],
                imports: [CommonModule],
                exports: [LoadingComponent]
            },] }
];

/*
 * Public API Surface of loading
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LoadingComponent, LoadingModule, LoadingService };
//# sourceMappingURL=criarti-loading.js.map

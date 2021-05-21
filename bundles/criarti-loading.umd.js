(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@criarti/loading', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.criarti = global.criarti || {}, global.criarti.loading = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var LoadingService = /** @class */ (function () {
        function LoadingService() {
        }
        return LoadingService;
    }());
    LoadingService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(); }, token: LoadingService, providedIn: "root" });
    LoadingService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    LoadingService.ctorParameters = function () { return []; };

    var LoadingComponent = /** @class */ (function () {
        function LoadingComponent() {
        }
        LoadingComponent.prototype.ngOnChanges = function (changes) {
            if (changes.loading) {
                this._loading = (typeof this.loading === 'boolean') ?
                    this.loading :
                    (changes.loading.currentValue >= 1) ? false : true;
            }
        };
        LoadingComponent.prototype.ngOnInit = function () {
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
        };
        return LoadingComponent;
    }());
    LoadingComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ls-loading',
                    template: "<ng-container>\n    <span [ngClass]=\"_parent\" class=\"ls-loading\">\n        <span \n            *ngIf=\"_loading && _content !== 'bootstrap'\"\n            [ngClass]=\"[_colorScheme == 'dark' ? 'dark' : 'light', _size]\">\n                {{ _content }}</span>\n\n        <i \n            *ngIf=\"_loading && _content === 'bootstrap'\" \n            [ngClass]=\"[_colorScheme == 'dark' ? 'dark' : 'light', _size]\"\n            class=\"fas fa-circle-notch fa-spin\"></i>\n    </span>\n</ng-container>",
                    styles: [".ls-loading{font-size:1rem}.ls-loading.button{display:inline-block;margin-right:5px}.ls-loading.page{display:block;text-align:center;clear:both}.ls-loading .dark{color:var(--blue)}.ls-loading .light{color:#fff}.ls-loading .small{font-size:1rem}.ls-loading .medium{font-size:2rem}.ls-loading .large{font-size:3rem}"]
                },] }
    ];
    LoadingComponent.propDecorators = {
        sm: [{ type: i0.Input }],
        md: [{ type: i0.Input }],
        lg: [{ type: i0.Input }],
        light: [{ type: i0.Input }],
        button: [{ type: i0.Input }],
        page: [{ type: i0.Input }],
        loading: [{ type: i0.Input }],
        content: [{ type: i0.Input }]
    };

    var LoadingModule = /** @class */ (function () {
        function LoadingModule() {
        }
        return LoadingModule;
    }());
    LoadingModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LoadingComponent],
                    imports: [common.CommonModule],
                    exports: [LoadingComponent]
                },] }
    ];

    /*
     * Public API Surface of loading
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LoadingComponent = LoadingComponent;
    exports.LoadingModule = LoadingModule;
    exports.LoadingService = LoadingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=criarti-loading.umd.js.map

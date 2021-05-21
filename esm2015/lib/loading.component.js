import { Component, Input } from '@angular/core';
export class LoadingComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jcmlhcnRpL2xvYWRpbmcvc3JjL2xpYi9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFPeEUsTUFBTSxPQUFPLGdCQUFnQjtJQW9CM0IsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDZCxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUN0RDtJQUNILENBQUM7SUFRRCxRQUFRO1FBRU4sU0FBUztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUE7YUFDakQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTs7WUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUE7UUFFMUIsT0FBTztRQUNQLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUE7YUFDMUMsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFNBQVM7WUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQTthQUNoRCxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUztZQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFBOztZQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7UUFFaEUsUUFBUTtRQUNSLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUE7O1lBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFBO1FBRWhDLFVBQVU7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzVFLENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLG1nQkFBdUM7O2FBRXhDOzs7aUJBSUUsS0FBSztpQkFDTCxLQUFLO2lCQUNMLEtBQUs7b0JBR0wsS0FBSztxQkFHTCxLQUFLO21CQUNMLEtBQUs7c0JBR0wsS0FBSztzQkFHTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xzLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xvYWRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAvLyBfc2l6ZSB8IERlZmF1bHQ6IG1kXG4gIEBJbnB1dCgpIHNtO1xuICBASW5wdXQoKSBtZDtcbiAgQElucHV0KCkgbGc7XG5cbiAgLy8gX2NvbG9yU2NoZW1lIHwgRGVmYXVsdDogZGFya1xuICBASW5wdXQoKSBsaWdodDtcblxuICAvLyBfcGFyZW50IHwgRGVmYXVsdDogcGFnZVxuICBASW5wdXQoKSBidXR0b247XG4gIEBJbnB1dCgpIHBhZ2U7XG5cbiAgLy8gX2xvYWRpbmdcbiAgQElucHV0KCkgbG9hZGluZztcblxuICAvLyBfY29udGVudCB8IERlZmF1bHQ6ICdib290c3RyYXAnXG4gIEBJbnB1dCgpIGNvbnRlbnQ7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSAodHlwZW9mIHRoaXMubG9hZGluZyA9PT0gJ2Jvb2xlYW4nKSA/IFxuICAgICAgICB0aGlzLmxvYWRpbmcgOiBcbiAgICAgICAgKGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWUgPj0gMSkgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX3NpemU6IHN0cmluZztcbiAgX2NvbG9yU2NoZW1lOiBzdHJpbmc7XG4gIF9wYXJlbnQ6IHN0cmluZztcbiAgX2xvYWRpbmc6IGJvb2xlYW47XG4gIF9jb250ZW50OiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICAvLyBQYXJlbnRcbiAgICBpZiAodGhpcy5idXR0b24gIT09IHVuZGVmaW5lZCkgdGhpcy5fcGFyZW50ID0gJ2J1dHRvbidcbiAgICBlbHNlIGlmICh0aGlzLnBhZ2UgIT09IHVuZGVmaW5lZCkgdGhpcy5fcGFyZW50ID0gJ3BhZ2UnXG4gICAgZWxzZSB0aGlzLl9wYXJlbnQgPSAncGFnZSdcblxuICAgIC8vIFNpemVcbiAgICBpZiAodGhpcy5zbSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9zaXplID0gJ3NtYWxsJ1xuICAgIGVsc2UgaWYgKHRoaXMubWQgIT09IHVuZGVmaW5lZCkgdGhpcy5fc2l6ZSA9ICdtZWRpdW0nXG4gICAgZWxzZSBpZiAodGhpcy5sZyAhPT0gdW5kZWZpbmVkKSB0aGlzLl9zaXplID0gJ2xhcmdlJ1xuICAgIGVsc2UgdGhpcy5fc2l6ZSA9ICh0aGlzLl9wYXJlbnQgPT09ICdwYWdlJykgPyAnbWVkaXVtJyA6ICdzbWFsbCdcblxuICAgIC8vIENvbG9yXG4gICAgaWYgKHRoaXMubGlnaHQgPT09IHVuZGVmaW5lZCkgdGhpcy5fY29sb3JTY2hlbWUgPSAnZGFyaydcbiAgICBlbHNlIHRoaXMuX2NvbG9yU2NoZW1lID0gJ2xpZ2h0J1xuXG4gICAgLy8gQ29udGVudFxuICAgIHRoaXMuX2NvbnRlbnQgPSAodGhpcy5jb250ZW50ID09PSB1bmRlZmluZWQpID8gJ2Jvb3RzdHJhcCcgOiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxufVxuIl19
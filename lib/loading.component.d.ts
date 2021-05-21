import { OnInit, SimpleChanges } from '@angular/core';
export declare class LoadingComponent implements OnInit {
    sm: any;
    md: any;
    lg: any;
    light: any;
    button: any;
    page: any;
    loading: any;
    content: any;
    ngOnChanges(changes: SimpleChanges): void;
    _size: string;
    _colorScheme: string;
    _parent: string;
    _loading: boolean;
    _content: string;
    ngOnInit(): void;
}

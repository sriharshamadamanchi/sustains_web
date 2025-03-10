// Copyright © 2025 Sustains AI, All Rights Reserved
export declare function isObject(o: any): boolean;
export declare function isEnabled(val: boolean | {
    enabled?: boolean;
}): boolean;
export declare function isShowEl(val: any, obj: any, el: any): boolean;
export declare function extend(target: any, src: any): void;
export declare function coerceBooleanProperty(value: any): boolean;
export declare const ignoreNgOnChanges: string[];
export declare function setProperty(val: any, obj?: {}): {} | false;

// Copyright © 2025 Sustains AI, All Rights Reserved
declare type KeyValueType = {
    [x: string]: any;
};
export declare const allowedParams: string[];
export declare function getParams(obj?: any): {
    params: any;
    passedParams: KeyValueType;
    rest: KeyValueType;
};
export {};

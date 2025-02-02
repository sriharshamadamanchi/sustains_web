// Copyright © 2025 Sustains AI, All Rights Reserved
import { action } from "../../common/store/typeSafe";

export type RegisterActionType = {
    email: string;
    password: string;
    name: string;
}

export const registerAction = (payload: RegisterActionType): any => action("src/auth/redux/registerAction", payload);

export type LoginActionType = Omit<RegisterActionType, "name">

export const loginAction = (payload: LoginActionType): any => action("src/auth/redux/loginAction", payload);

export const loggedInSuccessfullyAction = (): any => action("src/auth/redux/loggedInSuccessfullyAction");

export type StoreUserDetailsActionType = {
    email: string;
    name: string;
    id: string;
}

export const storeUserDetailsAction = (payload: StoreUserDetailsActionType): any => action("src/auth/redux/storeUserDetailsAction", payload);

export const logoutAction = (): any => action("src/auth/redux/logoutAction");

export const resetLoginReducerAction = (): any => action("src/auth/redux/resetLoginReducerAction");

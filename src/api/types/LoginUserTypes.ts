export type InvalidValueErrorType = {
    error: string;
    in: string;
    isEmailValid: boolean;
    isPassValid: boolean;
};

export type LoginErrorType = {
    error: string;
    password: string;
    in: string;
};

export type LoginResponseType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    token: string;
};

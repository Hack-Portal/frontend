
export type SignUpFormData={
    username: string;
    icon: string;
    locate_id: number;
}

export type EmailSignUpFormData={
    email: string;
    password: string;
}

export type SignUpFormErrors={
    [key:string]:string;
}
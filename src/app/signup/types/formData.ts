import { ReactNode } from "react";

export type SignUpFormData={
    username: string;
    icon: string;
    email: string;
    password?: string;
    locate_id: number;
}
export type SignUpFormErrors={
    [key:string]:string;
}
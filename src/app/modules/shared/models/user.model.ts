export interface IUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    authData?: string;
}

export class User implements IUser {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    authData?: string;

    constructor(id: number, username: string, password: string, firstName: string, lastName: string, authData: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.authData = authData;
    }
}
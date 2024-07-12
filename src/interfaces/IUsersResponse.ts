import {IUser} from "./userInterface";

export interface IUsersResponse {
    page: number,
    results: IUser[]
}
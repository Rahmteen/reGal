import { observable, action, configure, runInAction, computed } from "mobx";
import { createContext, SyntheticEvent, ChangeEvent } from "react";
import { IUser } from "../Models/User";

class UserStore {
    @observable user: IUser | null = null;
    @observable loadingInitial = false;
    @observable submitting = false;

    @action loadUser = async (id: number) => {
        
    }
}

export default createContext( new UserStore());
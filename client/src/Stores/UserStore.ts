import { observable, action, configure, runInAction, computed } from "mobx";
import { createContext, SyntheticEvent, ChangeEvent, useReducer } from "react";
import { IUser } from "../Models/User";
import agent from "../Api/agent";

class UserStore {
    @observable user: IUser | null = null;
    @observable loadingInitial = false;
    @observable submitting = false;

    @action loadUser = async (id: number) => {
        this.loadingInitial = true;
        if(this.user) {
            return this.user;
        }
        try {
            let res = await agent.User.get(id);
            runInAction(() => {
                if(res) {
                    this.user = res;
                    this.loadingInitial = false;
                }
            })
            return res;
        } catch (error) {
            runInAction(() => {
                this.loadingInitial = false;
            });
            console.log("Error: ", error);
        }
    }

    @action createUser = async (user: IUser) => {
        this.submitting = true;
        try {
            let response = await agent.User.create(user);
            runInAction(() => {
                if(response) {    
                    this.submitting = false;
                    this.user = {...response}
                }
            })
            return response;
        } catch (error) {
            runInAction(() => {
                this.submitting = false;
            });
            return error.message;
        }
    }

    @action updateUser = async (user: IUser) => {
        this.submitting = true;
        try {
            let response = await agent.User.update(user);
            runInAction(() => {
                if(response) {
                    this.user = response
                    this.submitting = false;
                }
            })
            return response;
        } catch (error) {
            runInAction(() => {
                this.submitting = false;
            });
            return error.message;
        }
    }
}

export default createContext( new UserStore());
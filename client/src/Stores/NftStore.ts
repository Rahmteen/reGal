import { observable, action, configure, runInAction, computed } from "mobx";
import { createContext, SyntheticEvent, ChangeEvent } from "react";

class NftStore {

}

export default createContext( new NftStore());
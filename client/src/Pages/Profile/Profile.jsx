//Modules
import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import UserStore from "../../Stores/UserStore";
//CSS
import './Profile.css';

const Profile = () => {
  const userStore = useContext(UserStore);
  //const { user } = userStore;
  // individual profile pic pages
    return (
    <div>Profile</div>
    )  
}

export default observer(Profile);
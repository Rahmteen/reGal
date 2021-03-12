import React, { useState } from 'react';

// set a variable to export state/handlers into components
export const StateContext = React.createContext({});

const StateProvider = ({ children }) => {

// create/set the state to store globally 
    const [activeData, setActiveData] = useState('');
// the function we export to change the state with an arguement
    const activeDataHandler = (chosen) => { 
      setActiveData(chosen) };

    const [userAddress, setUserAddress] = useState('')
    const userAddressHandler = (address) => {
      setUserAddress(address)
    }

return (
    <StateContext.Provider value = {{ 
        activeData, activeDataHandler,
        userAddress, userAddressHandler,
        }}>
      {children}
    </StateContext.Provider>
)}

// export the stateProvider to be accessed when wrapping the head of our react application
export default StateProvider;
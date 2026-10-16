import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus,setOnlineStatus] = useState(true);

    //input - check if the application is online or offline;
    useEffect(()=>{

        //offline
        window.addEventListener('offline',()=>{
            setOnlineStatus(false);
        })

        //online
        window.addEventListener('online',()=>{
            setOnlineStatus(true)
        })
    },[])


    //output - return boolen (online/offline - true/fase);
    return onlineStatus
};

export default useOnlineStatus;
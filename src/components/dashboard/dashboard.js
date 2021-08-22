import React, {useState} from 'react'
import {auth, db, logout} from "../homescreen/firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";

export const dashboard = () => {

  
    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}

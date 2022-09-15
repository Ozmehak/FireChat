import {useContext} from "react";
import {signOut} from "firebase/auth"
import { auth } from "../firebase"
import {AuthContext} from "../context/AuthContext";
import {LogOut} from "@styled-icons/boxicons-regular"
import "../styles.scss";

export const Navbar = () => {
    const { currentUser } = useContext(AuthContext)

    return (
        <div className="navbar">
            <span className="logo">Firechat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt=""/>
                <span>{currentUser.displayName}</span>
                <LogOut size={32} onClick={() => signOut(auth)} />
            </div>
        </div>
    )
}

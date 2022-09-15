import React, {useContext} from 'react';
import {Messages} from "./Messages";
import {Input} from "./Input";
import {ChatContext} from "../context/ChatContext";
import {CameraVideo, Telephone} from "@styled-icons/bootstrap"
import {DotsCircleHorizontal} from "@styled-icons/heroicons-solid"
import "../styles.scss";

export const Chat = () => {
    const { data } = useContext(ChatContext)

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <Telephone size={32} />
                    <CameraVideo size={32}/>
                    <DotsCircleHorizontal size={32}/>

                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};

import React, {useContext} from 'react';
import {Message} from "./Message";
import {Input} from "./Input";
import {ChatContext} from "../context/ChatContext";

export const Chat = () => {
    const { data } = useContext(ChatContext)

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
                <div className="chatIcons">
                    <img alt={"test"}/>
                    <img alt={"test"}/>
                    <img alt={"test"}/>
                </div>
            </div>
            <Message />
            <Input />
        </div>
    );
};

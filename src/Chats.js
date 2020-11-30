import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats(){
    return <div className="chats">
        <Chat
         name="Mark"
         message="YO whats up!"
         timestamp="40 seconds"
         profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/181012_Mark_KBS_%27%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC%27_%EB%A6%AC%ED%97%88%EC%84%A4_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%EC%A7%81%EC%BA%A0_%EC%98%81%EC%83%81.png/1200px-181012_Mark_KBS_%27%EB%AE%A4%EC%A7%81%EB%B1%85%ED%81%AC%27_%EB%A6%AC%ED%97%88%EC%84%A4_%EC%B6%9C%EA%B7%BC%EA%B8%B8_%EC%A7%81%EC%BA%A0_%EC%98%81%EC%83%81.png"
        />
        <Chat
         name="Ellen"
         message="Hi!"
         timestamp="25 minutes ago"
         profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed560d07fe4060006bbce1e%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D422%26cropX2%3D1300%26cropY1%3D0%26cropY2%3D879"
        />
        <Chat
         name="Jullie"
         message="Hey There !!!!"
         timestamp="1 hour ago"
         profilePic="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzY4NjQ1MTMz/julia-roberts-9460157-1-402.jpg"
        />
        <Chat
         name="Sofia"
         message="Whats the plan!"
         timestamp="10 seconds"
         profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jEMSfzkkmWDXP-lw1QP_8sAoqsujAM252w&usqp=CAU"
        />

    </div>;
}

export default Chats;
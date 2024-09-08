import React from "react";
import styled from "styled-components";


const Icerikler=styled.div`
width: 91vw;
height: 60vh;
display: flex;
margin-top: 1vh;
margin-left: 3vw;

.haber-1{
    width: 50vw;
    height: 60vh;
    background-color: #f50000;
}
.haber-container{
    display: flex;
    flex-direction: column;
}
.haber-2{
    width: 41vw;
    height: 15vh;
    background-color: #007bff;
    margin-bottom: 0.1vh;
}
.haber-2>.logo{
    width: 6vw;
    height: 12vh;
    background-color: #383838;
    border-radius:50%;
    margin-left: -3vw;
    margin-top: 2vh;
}
.haber-3{
    width: 41vw;
    height: 30vh;
    background-color: #eeff00;
    margin-bottom: 0.1vh;
}

`

export default function Icerik(){
    return(
        <Icerikler>
            <div className="haber-1"></div>
            <div className="haber-container">
            <div className="haber-2">
                <div className="logo"></div>
            </div>
            <div className="haber-2">
                <div className="logo"></div>
            </div>
            <div className="haber-3"></div>
            </div>
          
        </Icerikler>
    )
}
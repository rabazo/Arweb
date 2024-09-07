import React from "react";
import styled from "styled-components";


const Icerikler=styled.div`
width: 100vw;
height: 50vh;
background-color: #19cf93;
display: flex;
flex-direction: row;

.haber-1{
    width: 50vw;
    height: 50vh;
    background-color: #ffffff;
}
.haber-2{
    width: 20vw;
    height: 50vh;
    background-color: #b10909;
}
`

export default function Icerik(){
    return(
        <Icerikler>
            <div className="haber-1"></div>
            <div className="haber-2"></div>
        </Icerikler>
    )
}
import React from "react";
import styled from "styled-components";
import { CiStreamOn } from "react-icons/ci";




const Yayin =styled.div`
h1{
    margin-left: 14vw;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 4vh;
    color: #4a4a4a;
    
}
`
const Haber=styled.div`
    width: 50vw;
    height: 30vh;
    margin-left: 14vw;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    .cizgi{
        width: 2px;
        height: 10vh;
        background-color: #aaa9a9;
    }
    .emoji{
        margin-top: 0.5vh;
        margin-left: -1vw;
        width: 2vw;
    }
    p{
        margin-left: -1.5vw;
        font-size: small;
        font-weight: 100;
    }
    .habergorsel{
        margin-left: 2vw;
        width: 30vw;
        height: 30vh;
    }
`

export default function YayinAkisi(){
    return(
        <Yayin>
            <h1>Yayın Akışı <CiStreamOn></CiStreamOn> </h1>


            <Haber>
            <div className="zaman">
                <div className="cizgi"></div>
                <img src="data:image/png;base64,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" alt="" className="emoji" />
                <p>3 Saat Önce</p>
                <div className="cizgi"></div>
            </div>
            <img src="https://netuv.com/wp-content/uploads/2024/03/Ekran-goruntusu-2024-03-22-135140-832x445.png" alt="" className="habergorsel"/>
            <div className="yazilar">
            <div className="kategori"></div>
            <div className="baslik"></div>
            <div className="yazar"></div>
            </div>
            </Haber>
        </Yayin>
    )
}
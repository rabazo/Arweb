import React from "react";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Nav=styled.div`
    width: 100%;
    height: 8vh;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #494848;
    


    .menu-icon{
        margin-left: 3vw;
        font-size: 4vh;
    }
    h1{
        margin-left: 3vw;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 4vh;
    }
    h2{
        margin-left: 3vw;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 2vh;
    }
    .giris{
        margin-left:1vw;
        font-family: "Roboto Condensed", sans-serif;
        font-size: 2vh;
        font-weight: 700;
        
    }
    .user-icon{
        margin-right: 1vw;
    }
    .search-icon{
        margin-left: 49vw;
        font-size: 3vh;
        border-right: 1px solid grey;
        padding: 1vh;
    }
    .insta-icon{
        margin-left:1vw;
        font-size: 3vh;
        border-left: 1px solid grey;
        padding:1vh;
    }
`

export default function Navbar(){
    return(
        <Nav>
            <IoMenuOutline className="menu-icon"></IoMenuOutline>
            <h1>Code-Duo</h1>
            <h2>ANASAYFA</h2>
            <h2>HABER</h2>
            <h2>KATEGORİLER</h2>
            <IoIosSearch className="search-icon"></IoIosSearch>
            <div className="giris"> <FaUser className="user-icon"></FaUser>Giriş Yap</div>
            <RiInstagramFill className="insta-icon"></RiInstagramFill>
        </Nav>
    )

}
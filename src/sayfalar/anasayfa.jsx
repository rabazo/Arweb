import React from "react";
import Navbar from "../components/NavBar";
import Icerik from "../components/Icerik";
import YayinAkisi from "../components/YayinAkisi";


export default function Anasayfa(){
    return(
        <div>
        <Navbar></Navbar>
        <Icerik></Icerik>
        <YayinAkisi></YayinAkisi>
        </div>
    )
}
import React from 'react';

function Header(){
    const headerStyle ={
        fontFamily:"sans-serif",
        fontWeight:"thin",
        fontSize:"40px" ,
        background:"#384050",
        padding:"10px",
        textAlign: "center",
        color:"white"
    } 
    return(
        <div style={headerStyle}>
            React  <img src="logo192.png" alt="Logo" className="App-logo" style={{width:"40px", height:"40px", marginBottom:"-5px"}}/>
        </div>
    )
}

export default Header;
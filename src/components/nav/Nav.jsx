import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function Nav({onSearch}) {

    return (
        <div>
            <Link to='/home'>Home</Link>
            <br/>
            <link to='/about'>About</link>
            <SearchBar onSearch={onSearch}/>       
        </div>
    ); 
}
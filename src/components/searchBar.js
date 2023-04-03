import React, { useState } from "react";

export default function SearchBar(){
    const [value, setValue] = useState("")

    const [input, updatedInput] = useState("")
    const onChangeHandler = event => {
    setValue(event.target.value);
    };
    const handleKeyPress = event => {
        if(event.key === "Enter")
        updatedInput(value)
    };
 return (
        <div className="searchcomponents">
            <div className="searchbar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                    type="search"
                    name="name"
                    onChange={onChangeHandler}
                    onKeyDown = {handleKeyPress}
                    value={value}
                />
                <i class="fa-solid fa-microphone"></i>
                <i class="fa-solid fa-camera"></i>
            </div>
            <p>{input}</p>
        </div>
    )
}
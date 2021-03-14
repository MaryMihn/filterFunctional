import React, { useState } from "react";

import Element from "./Element";
import text from "./text"
import PropTypes from "prop-types";

function CardWrapper(props) {

  const [searchName, setSearchName] = useState("");
  const [searchLastname, setSearchLastname] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [peopleSex, setPeopleSex] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);
  
  const handleMaleCheckBoxClick = (event) => {
    setCheckedMale(!checkedMale);
    if (!checkedMale) {
      setPeopleSex(event.target.value);
    } else setPeopleSex("");
  }
  const handleFemaleCheckBoxClick = (event) => {
    setCheckedFemale(!checkedFemale);
    if (!checkedFemale) {
      setPeopleSex(event.target.value);
    } else setPeopleSex("");
  }
  const handleOnNameInputChange = (event) => {
    setSearchName(event.target.value);
  };
  const handleOnLastNameInputChange = (event) => {
    setSearchLastname(event.target.value);
  };
  const handleOnAgeInputChange = (event) => {
    setSearchAge(event.target.value);
    console.log(searchAge)
  };

  return (
    <div>
      <div >
        <div className ="seach">
          {text.name} 
          <input
            type="text"
            placeholder={text.name}
            value={searchName}
            onChange={handleOnNameInputChange}
          />
        </div>
        <div className ="seach">
        {text.lastname} 
          <input
            type="text"
            value={searchLastname}
            onChange={handleOnLastNameInputChange}
            placeholder={text.lastname}
          ></input>
        </div>
        <div className ="seach">
          {text.age} 
          <input 
          type="text" 
          placeholder={text.age}
          value={searchAge}
          onChange={handleOnAgeInputChange}
          ></input>
        </div>
        <div className ="seach">
          {text.sex}
          <input
            type="checkbox"
            onClick={handleMaleCheckBoxClick}
            checked={checkedMale}
            value="m"
            name="Sex"
            id="male"
          />
          <label htmlFor="male">{text.male}</label>
          <input
            type="checkbox"
            onClick={handleFemaleCheckBoxClick}
            checked={checkedFemale}
            value="f"
            name="Sex"
            id="female"
          />
          <label htmlFor="female">{text.female}</label>
          <br />
        </div>
      </div>
    
        {props.people.length > 0
        ? props.people.map((el, index) => {
            if (
              el.name.toLowerCase().includes(searchName) &&
              el.lastname.toLowerCase().includes(searchLastname) 
            ) {
              if (searchAge.length === 0 || el.age === +searchAge) {
                if (peopleSex.length < 1) {
                    return <Element el={el} key={index} />;
                  } else if (el.sex === peopleSex) {
                    return (
                      <Element el={el} key={index} />
                    );
                  } else if (checkedMale && checkedFemale) {
                    return <Element el={el} key={index} />;
                  }
                }
            }
          })
        : text.loading}
    </div>
  );
}

CardWrapper.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardWrapper;
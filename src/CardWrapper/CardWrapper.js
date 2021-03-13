import React, { useState } from "react";

import Element from "./Element";
import PropTypes from "prop-types";

function CardWrapper(props) {

  const [searchName, setSearchName] = useState("");
  const [searchLastname, setSearchLastname] = useState("");
  const [searchAge, setSearchAge] = useState("");
  const [peopleSex, setPeopleSex] = useState("");
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);
  
  const handleMaleCheckBoxClick = (e) => {
    setCheckedMale(!checkedMale);
    if (!checkedMale) {
      setPeopleSex(e.target.value);
    } else setPeopleSex("");
  }
  const handleFemaleCheckBoxClick = (e) => {
    setCheckedFemale(!checkedFemale);
    if (!checkedFemale) {
      setPeopleSex(e.target.value);
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
      <div>
        Имя
        <input
          type="text"
          placeholder="Имя"
          value={searchName}
          onChange={handleOnNameInputChange}
        />
      </div>
      <div>
        Фамилия{" "}
        <input
          type="text"
          value={searchLastname}
          onChange={handleOnLastNameInputChange}
          placeholder="Фамилия"
        ></input>
      </div>
      <div>
        Возраст 
        <input 
        type="text" 
        placeholder="Возраст"
        value={searchAge}
        onChange={handleOnAgeInputChange}
        ></input>
      </div>
      <div>
        Пол
        <input
          type="checkbox"
          onClick={handleMaleCheckBoxClick}
          checked={checkedMale}
          value="m"
          name="Sex"
          id="male"
        />
        <label htmlFor="male">M</label>
        <input
          type="checkbox"
          onClick={handleFemaleCheckBoxClick}
          checked={checkedFemale}
          value="f"
          name="Sex"
          id="female"
        />
        <label htmlFor="female">F</label>
        <br />
      </div>

      {props.people.length > 0
        ? props.people.map((el, index) => {
            if (
              el.name.toLowerCase().includes(searchName) &&
              el.lastname.toLowerCase().includes(searchLastname) 
            //   && el.age.toString().includes(searchAge)
              
            ) {
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
          })
        : "нет пользователя с данным фильтром"}
    </div>
  );
}

CardWrapper.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardWrapper;
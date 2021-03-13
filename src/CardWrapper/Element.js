import React from 'react'
import PropTypes from 'prop-types'

function Element({el}) {
  return (
        <div>
            <hr></hr>
            <div>{el.lastname} {el.name}</div>
            <div>Возраст: {el.age}</div>
            <div> Пол: {el.sex==="f" ? "женский" : "мужской"}
            </div>
        </div>
  );
}

Element.propTypes={
    el: PropTypes.object.isRequired
}

export default Element;
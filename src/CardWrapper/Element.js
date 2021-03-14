import React from 'react'
import PropTypes from 'prop-types'
import text from './text'

function Element({el}) {
  return (
        <div>
            <hr></hr>
            <div>{el.lastname} {el.name}</div>
            <div>{text.age}: {el.age}</div>
            <div>{text.sex}: {el.sex==="f" ? text.sexFemale : text.sexMale}
            </div>
        </div>
  );
}

Element.propTypes={
    el: PropTypes.object.isRequired
}

export default Element;
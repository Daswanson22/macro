import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ButtonIcon({handler, icon, text, style}) {
  return (
    <button className={style} onClick={handler}>
        <span>{text}</span>
        <FontAwesomeIcon icon={icon}/>
    </button>
  )
}

export default ButtonIcon
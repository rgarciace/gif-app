import React from 'react'

const FooterOption = ({text, link}) => {
  return (
    <div>
      <a href={link} target="blank">{text}</a>
    </div>
  )
}

export default FooterOption
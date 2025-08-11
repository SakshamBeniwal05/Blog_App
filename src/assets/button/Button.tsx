import React from 'react'
import './button.css'
interface props {
  type: 'submit' | 'reset' | 'button',
  work: string,
  width: string,
  bgcolor?: string,
  color?:string
}

const Button: React.FC<props> = ({ type,color ,work, width,bgcolor,...rest }) => {
  const hoverbgColor = bgcolor ? `#${bgcolor}` : '#fff';
  const hoverColor = color ? '#000' : '#fff'
  return (
    <div>
      <button style={{ width, '--bg-hover-bgcolor': hoverbgColor, '--hover-color':hoverColor}as React.CSSProperties} type={type} {...rest}>{work}</button>
    </div>
  )
}

export default Button
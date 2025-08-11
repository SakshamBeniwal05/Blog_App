import React from 'react'
import './input.css'
interface props {
  label: string,
  type?: string,
  placeholder?:string
}

const Input: React.FC<props> = ({ label, type = "text",placeholder="",...rest }) => {
  return (
    <>
      <div className="input-wrapper">
        <label htmlFor={label}>{label}</label>
        <input id={label} placeholder={placeholder} type={type} {...rest} />
      </div>
    </>
  )
}

export default Input
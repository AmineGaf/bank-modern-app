import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient rounded-[10px] font-popping font-medium text-[18px] text-primary outline-none ${styles}`}>Get started</button>
  )
}

export default Button
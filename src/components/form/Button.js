import React from 'react'
import cls from 'classnames'



const Button = ({ text, fullWidth = false, bg = "primary", color = "white", handleClick, className }) => {
  return (
    <button type='button' onClick={handleClick} className={cls(`text-center cursor-pointer block rounded-md py-2 px-4 my-2 bg-${bg} text-${color}`, { "w-full": fullWidth }, className)}> {text}</button >

  )
}

export default Button
import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ml-2 mb-4 ${bgColor} ${textColor} ${className}`} {...props}
    > {children} </button>
  )
}

export default Button
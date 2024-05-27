import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  classname = "",
  ...props
}) {
  return <Button classname={`px-4 py-2 rounded-lg ${classname} ${textColor} ${bgColor}`}{...props}>{children}</Button>;
}

export default Button;

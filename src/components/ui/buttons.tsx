import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl transition"
      {...props}
    >
      {children}
    </button>
  );
};

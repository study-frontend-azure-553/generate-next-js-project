"use client";

export type ButtonProps = {
  children: React.ReactNode;
  type: "default" | "gradient" | "disabled" | "black" | "light";
  width?: number;
  isFullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  type,
  width,
  isFullWidth = false,
  onClick,
}: ButtonProps) {
  return <button>button</button>;
}

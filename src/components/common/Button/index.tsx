"use client";

export type ButtonProps = {
  children: React.ReactNode;
  type: "default" | "gradient" | "disabled" | "black" | "light";
  width?: number;
  isFullWidth?: boolean;
};

export default function Button({
  children,
  type,
  width,
  isFullWidth = false,
}: ButtonProps) {
  return <button>button</button>;
}

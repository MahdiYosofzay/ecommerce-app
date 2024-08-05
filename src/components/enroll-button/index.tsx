import React from "react";
import { Button } from "../ui/button";

interface EnrollButtonProps {
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
  onClick?: () => void;
}

const EnrollButton: React.FC<EnrollButtonProps> = ({
  text = "Enroll Now",
  variant = "secondary",
  className = "",
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      className={`px-8 py-6 rounded-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default EnrollButton;

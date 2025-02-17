import React from "react";
import { cn } from "../../lib/tailwindMerge";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  fullWidth?: boolean;
  active?: boolean;
  className?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>(
  (
    {
      isLoading,
      children,
      fullWidth = false,
      //   active = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          `px-2 py-[10px] bg-black text-white rounded-lg`,
          className,
          {
            "w-full": fullWidth,
          }
        )}
        {...props}
        disabled={disabled}
      >
        {isLoading ? (
          <div className="border-2 border-solid border-black rounded-[50%] border-t-white border-r-white inline-block mx-auto my-0 animate-spin w-[20px] h-[20px]" />
        ) : (
          <span>{children}</span>
        )}
      </button>
    );
  }
);

export default Button;

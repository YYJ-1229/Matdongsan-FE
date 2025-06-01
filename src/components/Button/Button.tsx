import "../../App.css";

export interface ButtonProps {
  variant: "primaryBlue" | "primaryDark" | "secondaryGray" | "secondaryLight";
  size: "extraSmall" | "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ variant, label, size, ...props }: ButtonProps) => {
  const baseStyles =
    "px-8 rounded-lg flex items-center justify-center font-[SUIT_Bold] font-semibold tracking-tight";

  const variants = {
    primaryBlue:
      "bg-[var(--brand-skyblue-50)] text-[var(--neutral-basic-white)]",
    primaryDark:
      "bg-[var(--neutral-warmgray-50)] text-[var(--neutral-basic-white)]",
    secondaryGray:
      "bg-[var(--neutral-coolgray-20)] text-[var(--neutral-coolgray-60)]",
    secondaryLight:
      "bg-[var(--neutral-gray-10)] text-[var(--neutral-coolgray-50)]"
  };

  const sizeStyles = {
    extraSmall: "w-[116px] h-[40px] py-[14px] text-sm",
    small: "w-[168px] h-[48px] py-[10px] text-sm",
    medium: "w-[240px] h-[46px] py-[14px] text-base",
    large: "w-[345px] h-[56px] py-[16px] text-base"
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variants[variant]} ${sizeStyles[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};

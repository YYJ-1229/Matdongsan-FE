export interface TitleProps {
  size: "small" | "medium" | "large";
  label?: string;
}
export const Title = ({ size, label, ...props }: TitleProps) => {
  const baseStyle = "text-[var(--neutral-coolgray-80)]";

  const sizeStyles = {
    small: "w-[16px] h-[16px]", // 추가 수정 필요
    medium: "w-[37px] h-[20px] text-[14px]",
    large: "w-full h-[32px] font-bold text-base" // 추가 수정 필요
  };

  return (
    <p className={`${baseStyle} ${sizeStyles[size]}`} {...props}>
      {label}
    </p>
  );
};

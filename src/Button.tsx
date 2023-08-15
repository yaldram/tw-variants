import { VariantProps, tv } from "tailwind-variants";

const baseButton = tv({
  base: "appearance-none box-border flex items-center justify-center leading-5 select-none text-center whitespace-nowrap border-none cursor-pointer transition duration-250 ease-in border-2 active:scale-[.97]",
  variants: {
    colorScheme: {
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      error: "",
      neutral: "",
    },
    variant: {
      solid: "",
      bordered: "bg-transparent border-2 border-solid",
      ghost: "bg-transparent border-2 border-solid",
      flat: "",
    },
    isShadow: {
      true: "",
    },
  },
  compoundVariants: [
    {
      colorScheme: "primary",
      variant: "solid",
      class: "bg-primary text-white",
    },
    {
      colorScheme: "secondary",
      variant: "solid",
      class: "bg-secondary text-white",
    },
    {
      colorScheme: "success",
      variant: "solid",
      class: "bg-success text-black",
    },
    {
      colorScheme: "warning",
      variant: "solid",
      class: "bg-warning text-black",
    },
    {
      colorScheme: "error",
      variant: "solid",
      class: "bg-error text-white",
    },

    {
      colorScheme: "primary",
      isShadow: true,
      class: "shadow-primary",
    },
    {
      colorScheme: "secondary",
      isShadow: true,
      class: "shadow-secondary",
    },
    {
      colorScheme: "success",
      isShadow: true,
      class: "shadow-success",
    },
    {
      colorScheme: "warning",
      isShadow: true,
      class: "shadow-warning",
    },
    {
      colorScheme: "error",
      isShadow: true,
      class: "shadow-error",
    },

    {
      colorScheme: "primary",
      variant: "bordered",
      class: "text-primary border-primary",
    },
    {
      colorScheme: "secondary",
      variant: "bordered",
      class: "text-secondary border-secondary",
    },
    {
      colorScheme: "success",
      variant: "bordered",
      class: "text-success border-success",
    },
    {
      colorScheme: "warning",
      variant: "bordered",
      class: "text-warning border-warning",
    },
    {
      colorScheme: "error",
      variant: "bordered",
      class: "text-error border-error",
    },

    {
      colorScheme: "primary",
      variant: "ghost",
      class: "text-primary border-primary hover:text-white hover:bg-primary",
    },
    {
      colorScheme: "secondary",
      variant: "ghost",
      class:
        "text-secondary border-secondary hover:text-white hover:bg-secondary",
    },
    {
      colorScheme: "success",
      variant: "ghost",
      class: "text-success border-success hover:text-black hover:bg-success",
    },
    {
      colorScheme: "warning",
      variant: "ghost",
      class: "text-warning border-warning hover:text-black hover:bg-warning",
    },
    {
      colorScheme: "error",
      variant: "ghost",
      class: "text-error border-error hover:text-white hover:bg-error",
    },

    {
      colorScheme: "primary",
      variant: "flat",
      class:
        "bg-primary-light text-primary-light-contrast hover:bg-primary-light-hover active:bg-primary-light-active",
    },
    {
      colorScheme: "secondary",
      variant: "flat",
      class:
        "bg-secondary-light text-secondary-light-contrast hover:bg-secondary-light-hover active:bg-secondary-light-active",
    },
    {
      colorScheme: "success",
      variant: "flat",
      class:
        "bg-success-light text-success-light-contrast hover:bg-success-light-hover active:bg-success-light-active",
    },
    {
      colorScheme: "warning",
      variant: "flat",
      class:
        "bg-warning-light text-warning-light-contrast hover:bg-warning-light-hover active:bg-warning-light-active",
    },
    {
      colorScheme: "error",
      variant: "flat",
      class:
        "bg-error-light text-error-light-contrast hover:bg-error-light-hover active:bg-error-light-active",
    },
  ],
  defaultVariants: {
    colorScheme: "primary",
    variant: "solid",
  },
});

const button = tv(
  {
    extend: baseButton,
    variants: {
      size: {
        xs: "rounded-xs h-10 pl-3 pr-3 leading-10 min-w-20 text-xs",
        sm: "rounded-sm h-12 pl-5 pr-5 leading-14 min-w-36 text-sm",
        md: "rounded-md h-14 pl-7 pr-7 leading-14 min-w-48 text-sm",
        lg: "rounded h-16 pl-9 pr-9 leading-15 min-w-60 text-md",
        xl: "rounded-xl h-18 pl-10 pr-10 leading-17 min-w-72 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
  {
    responsiveVariants: true,
  }
);

export type ButtonProps = VariantProps<typeof button> &
  React.ComponentPropsWithoutRef<"button">;

export function Button(props: ButtonProps) {
  const { colorScheme, size, variant, isShadow, className, ...delegated } =
    props;
  return (
    <button
      className={button({
        colorScheme,
        variant,
        className,
        isShadow,
        size,
      })}
      {...delegated}
    />
  );
}

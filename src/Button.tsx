import { VariantProps, tv } from "tailwind-variants";

const baseButton = tv({
  base: "border-none outline-none cursor-pointer inline-flex items-center justify-center px-[0.25em] py-[0.75em] font-semibold text-center leading-[1.1] transition duration-220 ease-in-out rounded-[0.375rem] focus:shadow-outline hover:bg-transparent hover:bg-initial disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none",
  variants: {
    colorScheme: {
      red: "",
      orange: "",
      green: "",
    },
    variant: {
      solid: "",
      outline: "",
    },
  },
  compoundVariants: [
    {
      colorScheme: "green",
      variant: "solid",
      class:
        "bg-green-500 dark:bg-green-200 text-white dark:text-gray-800 hover:bg-green-600 dark:hover:bg-green-300 hover:disabled:bg-green-500 dark:hover:disabled:bg-green-200 active:bg-green-700 dark:active:bg-green-400",
    },
    {
      colorScheme: "red",
      variant: "solid",
      class:
        "bg-red-500 dark:bg-red-200 text-white dark:text-gray-800 hover:bg-red-600 dark:hover:bg-red-300  hover:disabled:bg-red-500 dark:hover:disabled:bg-red-200 active:bg-red-700 dark:active:bg-red-400",
    },
    {
      colorScheme: "orange",
      variant: "solid",
      class:
        "bg-orange-500 dark:bg-orange-200 text-white dark:text-gray-800 hover:bg-orange-600 dark:hover:bg-orange-300 hover:disabled:bg-orange-500 dark:hover:disabled:bg-orange-200 active:bg-orange-700 dark:active:bg-orange-400",
    },
    {
      colorScheme: "green",
      variant: "outline",
      class:
        "text-green-600 dark:text-green-200 bg-transparent border-solid border border-current hover:bg-green-50 dark:hover:bg-green-200/[.12] active:bg-green-100 dark:active:bg-green-200/[.24]",
    },
    {
      colorScheme: "red",
      variant: "outline",
      class:
        "text-red-600 dark:text-red-200 bg-transparent border-solid border border-current hover:bg-red-50 dark:hover:bg-red-200/[.12] active:bg-red-100 dark:active:bg-red-200/[.24]",
    },
    {
      colorScheme: "orange",
      variant: "outline",
      class:
        "text-orange-600 dark:text-orange-200 bg-transparent border-solid border border-current hover:bg-orange-50 dark:hover:bg-orange-200/[.12] active:bg-orange-100 dark:active:bg-orange-200/[.24]",
    },
  ],
  defaultVariants: {
    colorScheme: "green",
    variant: "solid",
  },
});

const button = tv(
  {
    extend: baseButton,
    variants: {
      size: {
        xs: "h-[1.5rem] min-w-[1.5rem] text-xs px-xs",
        sm: "h-[2rem] min-w-[2rem] text-sm px-sm",
        md: "h-[2.5rem] min-w-[2.5rem] text-md px-md",
        lg: "h-[3rem] min-w-[3rem] text-lg px-lg",
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
  const { colorScheme, size, variant, className, ...delegated } = props;
  return (
    <button
      className={button({
        colorScheme,
        variant,
        className,
        size,
      })}
      {...delegated}
    />
  );
}

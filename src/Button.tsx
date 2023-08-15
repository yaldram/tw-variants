import { VariantProps, tv } from "tailwind-variants";

const baseButton = tv({
  base: "border-none outline-none cursor-pointer inline-flex items-center justify-center px-[0.25em] py-[0.75em] text-center leading-[1.1] transition duration-220 ease-in-out rounded-[0.375rem] focus:shadow-outline hover:bg-transparent hover:bg-initial disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none",
  variants: {
    colorScheme: {
      primary: "",
    },
    varaint: {
      solid: "",
      outline: "",
    },
  },
  compoundVariants: [
    {
      colorScheme: "primary",
      varaint: "solid",
      class: "bg-primary text-primary-foreground hover:bg-primary/90",
    },

    {
      colorScheme: "primary",
      varaint: "outline",
      class:
        "bg-transparent text-primary hover:bg-primary/10 border-solid border border-primary",
    },
  ],
  defaultVariants: {
    colorScheme: "primary",
    varaint: "solid",
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
  const { colorScheme, size, varaint, className, ...delegated } = props;
  return (
    <button
      className={button({
        colorScheme,
        varaint,
        className,
        size,
      })}
      {...delegated}
    />
  );
}

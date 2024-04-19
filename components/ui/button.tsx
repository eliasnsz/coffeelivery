import type { ComponentProps, ElementType } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type ButtonProps = ComponentProps<"button"> &
	VariantProps<typeof button> & {
		icon?: ElementType;
	};

const button = tv(
	{
		base: `group mx-auto duration-100 w-fit justify-center transition-all flex 
	items-center rounded-3xl font-bold text-white uppercase bg-stone-800 
	shadow-primary border-2 hover:translate-y-[-2px] 
	hover:shadow-[0px_6px_0px_black] active:shadow-[0px_2px_0px_black] 
	active:translate-y-[2px]`,
		variants: {
			variant: {
				highlight: "bg-white text-black",
			},
			size: {
				sm: "px-4 py-2 text-xs gap-0 font-semibold",
				md: "px-8 py-3 text-base gap-0",
				lg: "px-12 py-4 text-lg gap-1",
			},
		},
	},
	{
		responsiveVariants: ["sm", "md", "lg", "xl", "2xl"],
	},
);

export function Button({
	className,
	children,
	icon: Icon,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={button({
				size: { initial: "sm", md: "md", lg: "lg" },
				...props,
			})}
		>
			<span>{children}</span>
			{Icon && (
				<Icon className="group-hover:translate-x-1 w-4 h-4 lg:w-6 lg:h-6 transition-transform" />
			)}
		</button>
	);
}

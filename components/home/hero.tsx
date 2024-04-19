import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
	return (
		<main className="grid grid-cols-12 h-[calc(100vh-128px)] sm:h-[min(880px,max(640px,80vh))]">
			<section className="flex flex-col pt-12 justify-center gap-6 sm:gap-8 lg:gap-12 col-span-12">
				<h6 className="text-xs sm:text-base lg:text-xl text-stone-700 tracking-tight font-medium text-center">
					Fresh Coffee, Rapid Delivery!
				</h6>
				<h1 className="font-title text-center text-[clamp(36px,5vw+20px,108px)] tracking-tight leading-[1em]">
					<span className="drop-shadow-[0px_4px_0px_#0000002a]">The </span>
					<span className="drop-shadow-[0px_4px_0px_#000000] [-webkit-text-stroke:_2px_#000] text-white">
						coffee
					</span>{" "}
					<span className="drop-shadow-[0px_4px_0px_#0000002a]">
						you want, <br /> when you{" "}
					</span>
					<span className="drop-shadow-[0px_4px_0px_#000000] [-webkit-text-stroke:_2px_#000] text-white">
						need it.
					</span>
				</h1>

				<Button variant="highlight" icon={ChevronRight}>
					Order now
				</Button>
			</section>
		</main>
	);
}

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen max-w-[1300px] mx-auto">
			<header className="h-24 flex items-center justify-between">
				<h6 className="font-title text-3xl">Coffeelivery</h6>

				<button className="font-semibold uppercase py-2.5 px-8 hover:bg-stone-700 text-lg transition-colors bg-black text-white rounded-full">
					Login
				</button>
			</header>

			<main className="flex items-end h-[calc(100vh-96px)]">
				<section className="flex-1 pb-32 flex flex-col gap-8">
					<h6 className="text-xl text-stone-500 font-medium">
						Fresh Coffee, Rapid Delivery!
					</h6>
					<div className="text-7xl font-title">
						<span className="drop-shadow-secondary">The </span>{" "}
						<span className="text-white drop-shadow-primary font-outline-1">
							coffee
						</span>{" "}
						<span className="drop-shadow-secondary">
							you love, <br /> when you
						</span>{" "}
						<span className="text-white drop-shadow-primary font-outline-1">
							need it.
						</span>
					</div>
					<button className="group transition-colors flex gap-2 items-center px-16 py-6 w-fit rounded-[24px] text-lg font-semibold text-white uppercase bg-stone-800 hover:bg-stone-700 shadow-primary border-2">
						Order now
						<ChevronRight className="group-hover:translate-x-1 transition-transform" />
					</button>
				</section>
				<section className="flex-1 pb-24">
					<Image
						alt="coffee-man"
						width={1200}
						height={1200}
						src="/coffee-man.svg"
						className=""
					/>
				</section>
			</main>
		</div>
	);
}

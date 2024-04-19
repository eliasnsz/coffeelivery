import { Hero } from "@/components/home/hero";
import { Header } from "@/components/ui/header";

export default function Home() {
	return (
		<div className="min-h-screen max-w-[1440px] px-4 mx-auto">
			<Header />
			<Hero />
		</div>
	);
}

export function Header() {
	return (
		<header className="h-24 flex items-center justify-between">
			<h6 className="font-title text-3xl">Coffeelivery</h6>

			<button className="font-semibold uppercase py-2.5 px-8 hover:bg-stone-700 text-lg transition-colors bg-black text-white rounded-full">
				Login
			</button>
		</header>
	);
}

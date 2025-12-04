export function Header() {
    return (
        <div>
            <nav className="cursor-pointer">
                <ul className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="./logo.svg" className="w-25 h-25 mx-5" />
                        <div>
                            <h1 className="text-5xl font-bold">Food Truck Paradise</h1>
                            <h2 className="text-3xl">The best place to eat !</h2>
                        </div>
                    </div>
                    <li className="font-bold text-xl">Menu</li>
                    <li className="font-bold text-xl">À propos</li>
                    <li className="font-bold text-xl">Contact</li>
                </ul>
            </nav>
        </div>
    )
}
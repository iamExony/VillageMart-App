import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex absolute top-0 left-0 w-full z-30 bg-bgColor backdrop-blur-md shadow-sm md:h-[98px]">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between w-full">
                <div className="text-xl font-normal text-gray-800">Village Market</div>
                <nav className="hidden md:flex gap-6 text-gray-700">
                    {['Home', 'Services', 'Pages', 'About us'].map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="hover:text-bgPrimary font-semibold text-gray-700 active:text-green-600"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Menu size={28} />
                    </button>
                </div>

                <Button className="hidden md:inline-block md:h-[54px] md:w-[150px] bg-bgSecondary hover:bg-bgPrimary hover:text-white text-black px-[8px] py-[14px] leading-[8px] rounded-[20px] cursor-pointer">
                    Sign up / Register
                </Button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
                    {['Home', 'Services', 'Pages', 'About us'].map((item, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="block text-gray-700 hover:text-green-600 active:text-green-600"
                        >
                            {item}
                        </a>
                    ))}
                    <Button className="bg-bgSecondary hover:bg-yellow-500 text-black px-4 py-2 rounded-md cursor-pointer">
                        Sign up / Register
                    </Button>
                </div>
            )}
        </header>
    );
}
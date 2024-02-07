import Image from 'next/image';
import logoImg from '@/assets/logo.png'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className=" min-h-14 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-transparent">
            <div className="flex justify-between items-center h-full py-5">
                <div className="">
                    <Image className='w-[60%]' src={logoImg} width={200} height={200} alt='img' />
                </div>
                <div className="">
                    <ul className="flex gap-8 font-semibold text-[16px]">
                        <li className="">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="">
                            <Link href="/">Donation</Link>
                        </li>
                        <li className="">
                            <Link href="/">Statistics</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
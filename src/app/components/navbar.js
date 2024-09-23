"use client"; // Ensure this component is marked as a Client Component


import Image from 'next/image';
import hassan from '../images/hassan.png';
import Link from 'next/link';

const Navbar = () => {
    const Showsidebar = () => {
        const sidebar = document.querySelector('.fixed-sidebar');
        sidebar.style.display = 'flex';
    };

    const closesidebar = () => {
        const sidebar = document.querySelector('.fixed-sidebar');
        sidebar.style.display = 'none';
    };

    return (
        <>
            <div className="navbar" id='nav'>
                <div className="img">
                    <Image 
                        src={hassan} 
                        alt="Hassan Mehmood" 
                        // width={60} 
                        // height={60} 
                        // layout="intrinsic"
                    />
                    <span>Hassan Mehmood</span>
                </div>

                <div className='fixed-sidebar'>
                    <ul>
                        <Link onClick={closesidebar} className='closebar' href="#"><li ><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#00b4d8"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li></Link>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/about">Contact</Link></li>
                    </ul>
                </div>

                <div className="options">
                    <ul>
                        <li className='hideonmobile'><Link href="/">Home</Link></li>
                        <li className='hideonmobile'><Link href="#about">About</Link></li>
                        <li className='hideonmobile'><Link href="/projects">Projects</Link></li>
                        <li className='hideonmobile'><Link href="/about">Contact</Link></li>



                        <li className='bar' onClick={Showsidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00b4d8"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

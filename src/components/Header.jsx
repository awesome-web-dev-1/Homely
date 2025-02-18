import { useState,useRef,useEffect } from 'react'
import { navItems } from '../constant/data'
import { IoClose, IoMenu } from 'react-icons/io5'

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    }, []);
  return (
    <header ref={headerRef} className="header">
        <div className="container relative md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <a href="#">
                    <img src="./images/Logo.png" alt="logo" width={115} height={59}/>
                </a>
                <button className="md:hidden" onClick={()=>setMenuOpen(!menuOpen)} title='Toggle menu'>
                    {menuOpen ? <IoClose size={32} className='text-white' /> : <IoMenu size={32} className='text-[30px] text-white' />}
                </button>
            </div>
            <ul className={`navbar ${menuOpen ? "active" : ""}`}>
                {navItems.map((item,index)=>(
                    <li key={index}>
                        <a href={item.href} className='hover:text-sky-600 transition'>{item.label}</a>
                    </li>
                ))}
                <a href="#" className="btn-secodary btn text-center">Get Started</a>
            </ul>
            <ul className="hidden md:flex md:items-center gap-10 text-neutral-50">
                {navItems.map((item,index)=>(
                    <li key={index}>
                        <a href={item.href} className='hover:text-neutral-300 transition duration-300'>{item.label}</a>
                    </li>
                ))}
                <a href="#" className="btn-primary btn">Get Started</a>
            </ul>



        </div>
    </header>
  )
}

export default Header
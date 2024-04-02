
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import img from '../../../public/Logo3.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    const offset = window.scrollY;

    if (offset > 50) {
      navbar.style.backgroundColor = 'rgba(88, 86, 119, 0.8)';
      navbar.style.backdropFilter = 'blur(8px)  '; 
    } else {
      navbar.style.backgroundColor = 'transparent';
      navbar.style.backdropFilter = 'none'; 
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeState = ({ isActive, isPending }) => {
    return {
      color: isPending ? "rgb(253 230 138)" : "white",
      backgroundColor: isActive ? "rgb(26, 43, 110)" : "white",
      marginTtop: '6px',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5rem',
    paddingBottom:' 0.5rem'

  };
};

const nav = (
  <>
    <li className="">
      <Link to='/' className="text-white text-base font-bold" style={{ activeState }} ><HashLink smooth to="#/">Home</HashLink></Link>
    </li>
    <li>
      <Link className="text-white text-base font-bold" style={{ activeState }}><HashLink smooth to="#service">Service</HashLink></Link>
    </li>
    <li>
      <Link className="text-white text-base font-bold" style={{ activeState }}><HashLink smooth to="#product">Product</HashLink></Link>
    </li>
    <li>
      <Link className="text-white text-base font-bold" style={{ activeState }}><HashLink smooth to="#about">About</HashLink></Link>
    </li>
    <li>
      <NavLink style={activeState}><HashLink smooth to="#contact">Contact Us</HashLink></NavLink>
    </li>
  </>
);



return (
  <div>
    <div className="navbar  h-[70px] fixed z-10">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
            {nav}
          </ul>
        </div>
        <img className='w-[193px] h-[145px] mt-[2.5rem] mb-8' src={img} alt="" />

      </div>
      <div className="navbar-end -ml-[96px] hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 my-7 px-1">
          {nav}
        </ul>
      </div>
    </div>

  </div>
);
};

export default Nav;


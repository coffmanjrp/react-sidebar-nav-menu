import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import sidebarData from './sidebarData';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  const showSidebar = () => setSidebar(!sidebar);

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div ref={ref} className="navbar">
          <Link to="#" className="menu-bars" onClick={showSidebar}>
            <FaBars />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle" onClick={showSidebar}>
              <Link to="#" className="menu-bars">
                <FaTimes />
              </Link>
            </li>
            {sidebarData.map((data, index) => (
              <li key={index} className={data.className} onClick={showSidebar}>
                <Link to={data.path}>
                  {data.icon} <span>{data.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

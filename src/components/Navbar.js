import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/Quote',
      text: 'Quote',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/',
      text: 'Home',
    },
  ];

  return (
    <nav>
      <ul style={{
        listStyleType: 'None',
        margin: '0',
        padding: '0',
        backgroundColor: '#333',
        overflow: 'hidden',
      }}
      >
        <li style={{
          float: 'left',
          color: 'white',
          textAlign: 'center',
          paddingLeft: '25px',
          textDecoration: 'none',
          fontSize: '30px',
        }}
        >
          Math Magicians
        </li>
        {
          links.map((link) => (
            <li
              key={link.id}
              style={{
                float: 'right',
                color: 'white',
                textAlign: 'center',
                padding: '14px 16px',
                textDecoration: 'none',
              }}
            >
              <NavLink
                to={link.path}
                activeClassName="active-link"
                exact
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                {link.text}
              </NavLink>
            </li>
          ))
       }
      </ul>
    </nav>
  );
};
export default Navbar;

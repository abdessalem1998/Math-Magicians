const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];

  return (
    <nav>
      <ul>
        {
          links.map((link) => (
            <li key={link.id}>
              {link.text}
            </li>
          ))
       }
      </ul>
    </nav>
  );
};
export default Navbar;

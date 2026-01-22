import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',           // <-- add this
        justifyContent: 'space-between', // <-- add this
        padding: '15px',
        backgroundColor: '#333'
      }}
    >
      <Link to="/" style={{ margin: '10px', color: '#fff' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px', color: '#fff' }}>About</Link>
      <Link to="/services" style={{ margin: '10px', color: '#fff' }}>Services</Link>
      <Link to="/contact" style={{ margin: '10px', color: '#fff' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;

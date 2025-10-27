import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            padding: '1em 2em',
            background: 'var(--navbar-bg)',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 'var(--shadow)',
            borderRadius: '0 0 var(--border-radius) var(--border-radius)'
        }}>
            <h2 style={{
                color: 'var(--primary-blue)',
                fontWeight: 700,
                marginRight: '2em',
                letterSpacing: 2
            }}>
                Bino Hub
            </h2>
            <Link to="/" style={{ margin: '0 1em', color: 'var(--primary-blue)', fontWeight: 500 }}>Home</Link>
            <Link to="/playground" style={{ margin: '0 1em', color: 'var(--primary-blue)', fontWeight: 500 }}>Playground</Link>
            <Link to="/heromap" style={{ margin: '0 1em', color: 'var(--primary-blue)', fontWeight: 500 }}>Local Hero Map</Link>
            <Link to="/comparison" style={{ margin: '0 1em', color: 'var(--primary-blue)', fontWeight: 500 }}>Comparison</Link>
            <Link to="/stories" style={{ margin: '0 1em', color: 'var(--primary-blue)', fontWeight: 500 }}>Success Stories</Link>
        </nav>
    );
}

export default Navbar;
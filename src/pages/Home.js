import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaMapMarkerAlt, FaBalanceScale, FaTrophy } from 'react-icons/fa';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1a73e8, #12c2e9)',
                color: '#fff',
                padding: '4em 2em',
                textAlign: 'center',
                borderRadius: '12px',
                maxWidth: 900,
                margin: '2em auto'
            }}>
                <h1 style={{ fontSize: '3em', marginBottom: '0.2em' }}>Welcome to Bino Hub</h1>
                <p style={{ fontSize: '1.25em', opacity: 0.85, marginBottom: '1em' }}>
                    Discover how Bino makes finding local services faster and smarter.
                </p>
                <a href="https://wa.me/your_bino_number" target="_blank" rel="noreferrer"
                    style={{
                        backgroundColor: '#25D366',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        fontSize: '1.2em',
                        textDecoration: 'none',
                        boxShadow: '0 6px 6px rgba(0,0,0,0.15)',
                        display: 'inline-block'
                    }}>
                    Try Bino on WhatsApp Now
                </a>
            </div>

            {/* Feature Cards */}
            <div style={{
                maxWidth: 900,
                margin: '3em auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2em'
            }}>
                {/* Playground */}
                <Link to="/playground" style={cardStyle}>
                    <FaComments size={48} color="#1a73e8" />
                    <h3 style={cardTitleStyle}>Query Playground</h3>
                    <p style={cardTextStyle}>Chat with Bino in our interactive demo.</p>
                </Link>

                {/* Local Hero Map */}
                <Link to="/heromap" style={cardStyle}>
                    <FaMapMarkerAlt size={48} color="#1a73e8" />
                    <h3 style={cardTitleStyle}>Local Hero Map</h3>
                    <p style={cardTextStyle}>Explore real businesses powered by Bino.</p>
                </Link>

                {/* Comparison */}
                <Link to="/comparison" style={cardStyle}>
                    <FaBalanceScale size={48} color="#1a73e8" />
                    <h3 style={cardTitleStyle}>Bino vs Traditional</h3>
                    <p style={cardTextStyle}>See how Bino saves you time vs Google.</p>
                </Link>

                {/* Success Stories */}
                <Link to="/stories" style={cardStyle}>
                    <FaTrophy size={48} color="#1a73e8" />
                    <h3 style={cardTitleStyle}>Success Stories</h3>
                    <p style={cardTextStyle}>Discover how Bino vendors grew their business.</p>
                </Link>
            </div>
        </>
    );
}

const cardStyle = {
    textDecoration: 'none',
    background: '#fff',
    boxShadow: '0 4px 12px rgba(60,73,124,0.1)',
    padding: '1.8em 1.2em',
    borderRadius: '14px',
    textAlign: 'center',
    color: '#222',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
};

const cardTitleStyle = {
    marginTop: '0.5em',
    marginBottom: '0.5em',
    fontWeight: 'bold',
    fontSize: '1.25em',
    color: '#1a73e8'
};

const cardTextStyle = {
    fontSize: '1em',
    color: '#444'
};

export default Home;
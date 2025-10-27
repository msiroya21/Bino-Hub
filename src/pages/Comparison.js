import React, { useEffect, useState } from 'react';
import { FaGoogle, FaWhatsapp, FaCheckCircle, FaClock, FaSearch, FaLink } from 'react-icons/fa';

const traditionalResults = [
    { title: 'Taxi Sedan - $27', rating: 4.0, url: 'https://example.com/sedan' },
    { title: 'Taxi SUV - $35', rating: 4.5, url: 'https://example.com/suv' },
    { title: 'Taxi Innova - $45', rating: 4.7, url: 'https://example.com/innova' },
];

const binoResults = [
    { title: 'Sedan Taxi', price: '$27', rating: 4.0 },
    { title: 'SUV Taxi', price: '$35', rating: 4.5 },
    { title: 'Innova Taxi', price: '$45', rating: 4.7 },
];

function Comparison() {
    // State and timers for simulation
    const [traditionalInput, setTraditionalInput] = useState('');
    const [binoInput, setBinoInput] = useState('');
    const [traditionalStep, setTraditionalStep] = useState(0);
    const [binoStep, setBinoStep] = useState(0);
    const [traditionalShowingResults, setTraditionalShowingResults] = useState([]);
    const [binoShowingResults, setBinoShowingResults] = useState([]);
    const [traditionalTime, setTraditionalTime] = useState(0);
    const [binoTime, setBinoTime] = useState(0);

    useEffect(() => {
        // Simulate traditional typing & searching
        if (traditionalStep === 0) {
            typeText('Find me a taxi from Borivali to Andheri', setTraditionalInput, () => setTraditionalStep(1));
        } else if (traditionalStep === 1) {
            let index = 0;
            const interval = setInterval(() => {
                if (index < traditionalResults.length) {
                    setTraditionalShowingResults(prev => [...prev, traditionalResults[index]]);
                    index++;
                } else {
                    clearInterval(interval);
                    setTraditionalStep(2);
                }
            }, 2500);
        }
    }, [traditionalStep]);

    useEffect(() => {
        // Simulate bino typing & fast reply
        if (binoStep === 0) {
            typeText('Find me a taxi from Borivali to Andheri', setBinoInput, () => setBinoStep(1));
        } else if (binoStep === 1) {
            setTimeout(() => {
                setBinoShowingResults(binoResults);
                setBinoStep(2);
            }, 3000);
        }
    }, [binoStep]);

    // Timer for each side
    useEffect(() => {
        let timer;
        if (traditionalStep < 2) {
            timer = setInterval(() => setTraditionalTime(t => Math.min(t + 1, 10)), 1000);
        }
        return () => clearInterval(timer);
    }, [traditionalStep]);

    useEffect(() => {
        let timer;
        if (binoStep < 2) {
            timer = setInterval(() => setBinoTime(t => Math.min(t + 1, 3)), 1000);
        }
        return () => clearInterval(timer);
    }, [binoStep]);

    // Typing effect function
    function typeText(text, setText, callback) {
        let index = 0;
        const interval = setInterval(() => {
            setText(text.slice(0, index));
            index++;
            if (index > text.length) {
                clearInterval(interval);
                callback();
            }
        }, 100);
    }

    return (
        <div style={{ maxWidth: 1000, margin: '2em auto', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#1a73e8', marginBottom: 30, textAlign: 'center' }}>Bino vs Traditional Search</h2>

            <div style={{ display: 'flex', gap: 40 }}>
                {/* Traditional Search */}
                <div style={{
                    flex: 1, backgroundColor: '#fdecea', borderRadius: 12, padding: 20, boxShadow: '0 4px 15px rgba(255, 0, 0, 0.1)'
                }}>
                    <h3 style={{ color: '#d32f2f', marginBottom: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <FaGoogle /> Traditional Search
                    </h3>

                    <InputBox value={traditionalInput} loading={traditionalStep === 0} />
                    {traditionalStep >= 1 && (
                        <ResultsList results={traditionalShowingResults} />
                    )}

                    <Timer seconds={traditionalTime} maxSeconds={10} />
                </div>

                {/* Bino Search */}
                <div style={{
                    flex: 1, backgroundColor: '#e6f4ea', borderRadius: 12, padding: 20, boxShadow: '0 4px 15px rgba(15, 157, 88, 0.2)'
                }}>
                    <h3 style={{ color: '#1a7f37', marginBottom: 15, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <FaWhatsapp /> Bino Search
                    </h3>

                    <InputBox value={binoInput} loading={binoStep === 0} />
                    {binoStep === 2 && <BinoResults results={binoShowingResults} />}

                    <Timer seconds={binoTime} maxSeconds={3} />
                    {binoStep === 2 && (
                        <div style={{ marginTop: 20, color: '#1a7f37', fontWeight: 'bold', fontSize: '1.2em', display: 'flex', alignItems: 'center', gap: 8 }}>
                            <FaCheckCircle /> Bino saves you time!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function InputBox({ value, loading }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: 10,
            border: '2px solid #ccc',
            borderRadius: 10,
            backgroundColor: loading ? '#fff3f3' : 'white',
            marginBottom: 20
        }}>
            <FaSearch style={{ color: '#999' }} />
            <input type="text" value={value} readOnly style={{
                border: 'none',
                width: '100%',
                fontSize: 16,
                outline: 'none',
                backgroundColor: 'transparent',
            }} />
            {loading && <span style={{ color: '#d32f2f' }}>Typing...</span>}
        </div>
    );
}

function ResultsList({ results }) {
    return (
        <div>
            {results.map(({ title, rating, url }, i) => (
                <div key={i} style={{
                    padding: 10,
                    marginBottom: 14,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
                    alignItems: 'center'
                }}>
                    <div>
                        <a href={url} target="_blank" rel="noreferrer" style={{ color: '#d32f2f', fontWeight: 'bold', fontSize: 16 }}>
                            {title}
                        </a>
                        <div style={{ color: '#999' }}>{rating} ⭐</div>
                    </div>
                    <FaLink color="#d32f2f" size={18} />
                </div>
            ))}
        </div>
    );
}

function BinoResults({ results }) {
    return (
        <div>
            {results.map(({ title, price, rating }, i) => (
                <div key={i} style={{
                    padding: 10,
                    marginBottom: 14,
                    backgroundColor: '#e6f4ea',
                    borderRadius: 8,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ fontWeight: 'bold', color: '#1a7f37', fontSize: 16 }}>{title}</div>
                    <div>{price}</div>
                    <div>{rating} ⭐</div>
                </div>
            ))}
        </div>
    );
}

function Timer({ seconds, maxSeconds }) {
    return (
        <div style={{
            marginTop: 20,
            fontSize: '1.5em',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 10
        }}>
            <FaClock style={{ color: '#444' }} /> {seconds} seconds
        </div>
    );
}

export default Comparison;
import React, { useState, useEffect } from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';

const samplePrompts = [
    "Find me a taxi from Borivali to Andheri",
    "Show pizza places near me",
    "Book a hotel in Goa under ₹3000",
    "Find local tours in Bali",
    "I need a haircut in JP Nagar"
];

const mockResponses = {
    "Find me a taxi from Borivali to Andheri": "Taxi options: Sedan ₹2700, SUV ₹3500, Innova ₹4500.",
    "Show pizza places near me": "Pizza places: Domino's, Pizza Hut, Local Pizzeria.",
    "Book a hotel in Goa under ₹3000": "Hotels found: Beachside Inn, Sunset Motel, Budget Stay.",
    "Find local tours in Bali": "Tours: Sunset Beach Tour, Mountain Hike, City Walk.",
    "I need a haircut in JP Nagar": "Salons: Style Studio, Hair Craft, Trendz Salon."
};

function Playground() {
    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = (text, sender) => {
        setMessages(prev => [...prev, { text, sender, time: new Date() }]);
    };

    const handleSubmit = () => {
        if (!query.trim()) return;
        sendMessage(query, "user");

        setTimeout(() => {
            const response = mockResponses[query] || "Sorry, I don't have a response for that yet.";
            sendMessage(response, "bot");
        }, 1000);

        setQuery("");
    };

    // Optional: scroll to bottom on new message
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, [messages]);

    return (
        <div style={{ maxWidth: 700, margin: '2em auto', background: '#fff', padding: '1.5em', borderRadius: 12, boxShadow: '0 2px 15px rgba(0,0,0,0.1)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#1a73e8', marginBottom: 15 }}>Query Playground</h2>

            <div style={{ maxHeight: '400px', overflowY: 'auto', padding: '0 1em', marginBottom: '1em', border: '1px solid #eee', borderRadius: 8, backgroundColor: '#f9f9f9' }}>
                {messages.length === 0 && (
                    <p style={{ textAlign: 'center', paddingTop: 20, color: '#aaa' }}>Start by typing your query below or clicking a sample prompt.</p>
                )}
                {messages.map(({ text, sender, time }, i) => (
                    <div key={i} style={{ marginBottom: 15, display: 'flex', justifyContent: sender === 'user' ? 'flex-end' : 'flex-start' }}>
                        <div style={{
                            maxWidth: '70%',
                            backgroundColor: sender === "user" ? '#1a73e8' : '#e0e0e0',
                            color: sender === "user" ? 'white' : 'black',
                            borderRadius: 20,
                            padding: '10px 15px',
                            position: 'relative'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {sender === 'bot' ? <FaRobot style={{ marginRight: 8 }} /> : <FaUser style={{ marginRight: 8 }} />}
                                <span style={{ wordBreak: 'break-word' }}>{text}</span>
                            </div>
                            <div style={{ fontSize: 10, opacity: 0.6, marginTop: 4, textAlign: 'right' }}>{time.toLocaleTimeString()}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: 10, marginBottom: 15 }}>
                {samplePrompts.map((prompt, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setQuery(prompt);
                        }}
                        style={{
                            flex: 1,
                            padding: 10,
                            borderRadius: 20,
                            border: '1px solid #1a73e8',
                            backgroundColor: 'white',
                            color: '#1a73e8',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: 14
                        }}
                    >
                        {prompt}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSubmit(); }}
                    placeholder="Type your query here"
                    style={{
                        flex: 1,
                        padding: 12,
                        borderRadius: 20,
                        border: '1px solid #ccc',
                        fontSize: 16,
                        outline: 'none'
                    }}
                />
                <button
                    onClick={handleSubmit}
                    style={{
                        marginLeft: 10,
                        backgroundColor: '#1a73e8',
                        color: 'white',
                        border: 'none',
                        borderRadius: 20,
                        padding: '0 20px',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Playground;

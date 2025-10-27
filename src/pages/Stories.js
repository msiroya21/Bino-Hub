import React, { useEffect, useState } from 'react';

const vendors = [
    {
        id: 1,
        name: 'Sunset Motel - Goa',
        location: 'Goa, India',
        bookingsIncrease: 45,
        revenueIncrease: 40,
        testimonial: 'Bino helped us reach more travelers and increased bookings dramatically!',
        photo: 'https://via.placeholder.com/120x80?text=Goa+Hotel'
    },
    {
        id: 2,
        name: 'Style Studio',
        location: 'JP Nagar, Bangalore',
        bookingsIncrease: 60,
        revenueIncrease: 55,
        testimonial: 'Thanks to Bino, we attract more customers daily through WhatsApp.',
        photo: 'https://via.placeholder.com/120x80?text=Style+Studio'
    },
    {
        id: 3,
        name: 'City Taxi Service',
        location: 'Mumbai, India',
        bookingsIncrease: 35,
        revenueIncrease: 30,
        testimonial: 'Our taxi bookings have noticeably increased since joining Bino.',
        photo: 'https://via.placeholder.com/120x80?text=City+Taxi'
    },
];

function Stories() {
    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        if (animationStep < 100) {
            const id = setInterval(() => {
                setAnimationStep(prev => (prev >= 100 ? 100 : prev + 1));
            }, 20);
            return () => clearInterval(id);
        }
    }, [animationStep]);

    return (
        <div style={{ maxWidth: 900, margin: '2em auto', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#1a73e8', marginBottom: 30, textAlign: 'center' }}>Vendor Success Stories</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '2em' }}>
                {vendors.map(vendor => (
                    <div key={vendor.id} style={{ background: '#fff', borderRadius: 12, padding: '1.5em', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <img src={vendor.photo} alt={vendor.name} style={{ width: '100%', borderRadius: 8, marginBottom: 10 }} />
                        <h3 style={{ color: '#1a73e8' }}>{vendor.name}</h3>
                        <p style={{ fontStyle: 'italic', color: '#555' }}>{vendor.location}</p>

                        <MetricBar label="Bookings Increase" percent={animationStep < 100 ? Math.min(animationStep, vendor.bookingsIncrease) : vendor.bookingsIncrease} color="#1a73e8" />
                        <MetricBar label="Revenue Increase" percent={animationStep < 100 ? Math.min(animationStep, vendor.revenueIncrease) : vendor.revenueIncrease} color="#25D366" />

                        <blockquote style={{
                            marginTop: '1em',
                            padding: '1em',
                            backgroundColor: '#f9f9f9',
                            borderLeft: '4px solid #1a73e8',
                            fontStyle: 'italic',
                            color: '#333'
                        }}>
                            "{vendor.testimonial}"
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MetricBar({ label, percent, color }) {
    return (
        <div style={{ marginBottom: 15 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 5 }}>{label}: {percent}%</div>
            <div style={{ height: 16, backgroundColor: '#eee', borderRadius: 8, overflow: 'hidden' }}>
                <div
                    style={{
                        height: '100%',
                        width: `${percent}%`,
                        backgroundColor: color,
                        transition: 'width 0.5s ease'
                    }}
                />
            </div>
        </div>
    );
}

export default Stories;
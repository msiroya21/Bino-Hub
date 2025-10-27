import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issues in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

// Updated sample vendor data with multiple points in 2 cities
const vendors = [
    // Mumbai Food
    {
        id: 1,
        name: "Pizza Place",
        category: "Food",
        position: [19.07, 72.87],
        rating: 4.5,
        whatsapp: "https://wa.me/919876543210",
        description: "Best pizzas in Mumbai!"
    },
    {
        id: 2,
        name: "Burger Joint",
        category: "Food",
        position: [19.075, 72.88],
        rating: 4.3,
        whatsapp: "https://wa.me/919876543215",
        description: "Tasty burgers and fries."
    },
    {
        id: 3,
        name: "Sushi Corner",
        category: "Food",
        position: [19.07, 72.89],
        rating: 4.7,
        whatsapp: "https://wa.me/919876543216",
        description: "Fresh sushi and sashimi."
    },

    // Delhi Transport
    {
        id: 4,
        name: "City Taxi",
        category: "Transport",
        position: [28.61, 77.23],
        rating: 4.2,
        whatsapp: "https://wa.me/919876543211",
        description: "Reliable taxis in Delhi"
    },
    {
        id: 5,
        name: "Metro Cab",
        category: "Transport",
        position: [28.615, 77.22],
        rating: 4.4,
        whatsapp: "https://wa.me/919876543217",
        description: "Affordable metro cab rides."
    },
    {
        id: 6,
        name: "Airport Shuttle",
        category: "Transport",
        position: [28.60, 77.21],
        rating: 4.1,
        whatsapp: "https://wa.me/919876543218",
        description: "24/7 shuttle to airport."
    },

    // Bangalore Services
    {
        id: 7,
        name: "Hair Salon",
        category: "Services",
        position: [12.97, 77.59],
        rating: 4.7,
        whatsapp: "https://wa.me/919876543212",
        description: "Top hairdressers in Bangalore"
    },
];

const categories = ["All", "Food", "Transport", "Services"];

function HeroMap() {
    const [filter, setFilter] = useState("All");
    const filteredVendors =
        filter === "All" ? vendors : vendors.filter((v) => v.category === filter);

    return (
        <div style={{ maxWidth: 900, margin: "2em auto", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#1a73e8", marginBottom: 20 }}>Bino Local Hero Map</h2>

            <div style={{ marginBottom: 15 }}>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        style={{
                            marginRight: 10,
                            padding: "8px 16px",
                            backgroundColor: filter === cat ? "#1a73e8" : "#f0f3ff",
                            color: filter === cat ? "#fff" : "#1a73e8",
                            border: "none",
                            borderRadius: 20,
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <MapContainer
                center={[20.5937, 78.9629]}
                zoom={5}
                style={{ height: 500, borderRadius: 14, boxShadow: "0 4px 12px rgba(60, 73, 124, 0.1)" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {filteredVendors.map((vendor) => (
                    <Marker key={vendor.id} position={vendor.position}>
                        <Popup>
                            <div style={{ maxWidth: 200 }}>
                                <h3 style={{ margin: "0 0 5px 0", color: "#1a73e8" }}>{vendor.name}</h3>
                                <p style={{ margin: "0 0 7px 0" }}>
                                    {vendor.description} <br />
                                    <strong>Rating:</strong> {vendor.rating} ⭐
                                </p>
                                <a href={vendor.whatsapp} target="_blank" rel="noreferrer" style={{ color: "#25D366", fontWeight: "bold" }}>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default HeroMap;
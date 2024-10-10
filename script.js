// Import restaurant data
import { restaurant } from './restaurant.js'; // Ensure the path is correct

// Initialize the map
const map = L.map('map').setView([27.68, 85.32], 14); // Set the center to a location within your markers

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom heart icon
const heartIcon = L.divIcon({
    className: 'heart-marker',
    html: '❤️',
    iconSize: [48, 48],
    iconAnchor: [16, 16]
});

// Add markers for each restaurant
restaurant.forEach(location => {
    L.marker([location.lat, location.lng], { icon: heartIcon })
        .addTo(map)
        .bindPopup(`<div class="popup-content"><strong>${location.name}</strong><br>Date Visited: ${location.date}</div>`);
});

const cafes = [
  {
    id: 1,
    name: "Starbucks",
    rating: 4.5,
    distance: "500m",
    lat: 12.9716,
    lng: 77.5946
  },
  {
    id: 2,
    name: "Third Wave Coffee",
    rating: 4.7,
    distance: "700m",
    lat: 12.9750,
    lng: 77.6000
  },
  {
    id: 3,
    name: "Cafe Coffee Day",
    rating: 4.3,
    distance: "1.2km",
    lat: 12.9780,
    lng: 77.6030
  }
];

const apiKey = API_KEY;
const region = "ap-south-1";
const style = "Standard";
const colorScheme = "Light";

const map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geo.${region}.amazonaws.com/v2/styles/${style}/descriptor?key=${apiKey}&color-scheme=${colorScheme}`,
    center: [77.5946, 12.9716],
    zoom: 11
});

map.addControl(new maplibregl.NavigationControl(), "top-left");


if (navigator.geolocation) {
    console.log("Geolocation supported");

    navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log("Location found!");

            const userLocation = [
                position.coords.longitude,
                position.coords.latitude
            ];

            console.log(userLocation);

            map.flyTo({
                center: userLocation,
                zoom: 15
            });

            new maplibregl.Marker({ color: "red" })
                .setLngLat(userLocation)
                .addTo(map);
        },

        (error) => {
            console.error("Location Error:", error);
        }
    );
}


let currentMarker = null;

function showCafe(id) {

    const cafe = cafes.find(c => c.id === id);

    if (!cafe) return;

    map.flyTo({
        center: [cafe.lng, cafe.lat],
        zoom: 16
    });

    if (currentMarker) {
        currentMarker.remove();
    }

    currentMarker = new maplibregl.Marker({
        color: "#6F4E37"
    })
    .setLngLat([cafe.lng, cafe.lat])
    .setPopup(
        new maplibregl.Popup().setHTML(`
            <h3>${cafe.name}</h3>
            <p>⭐ ${cafe.rating}</p>
            <p>📍 ${cafe.distance}</p>
        `)
    )
    .addTo(map);

    currentMarker.togglePopup();
}



function renderCafes(cafeData) {

    const cafeList = document.getElementById("cafeList");

    cafeList.innerHTML = "";

    cafeData.forEach(cafe => {

        cafeList.innerHTML += `
            <div class="cafe-card" onclick="showCafe(${cafe.id})">
                <h4>${cafe.name}</h4>
                <p>⭐ ${cafe.rating}</p>
                <p>📍 ${cafe.distance}</p>
            </div>
        `;
    });
}



renderCafes(cafes);


const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {

    const keyword = searchBox.value.toLowerCase();

    const filtered = cafes.filter(cafe =>
        cafe.name.toLowerCase().includes(keyword)
    );

    renderCafes(filtered);
});
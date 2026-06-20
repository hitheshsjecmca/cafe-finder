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
    navigator.geolocation.getCurrentPosition((position) => {

        const userLocation = [
            position.coords.longitude,
            position.coords.latitude
        ];

        map.flyTo({
            center: userLocation,
            zoom: 15
        });

        new maplibregl.Marker()
            .setLngLat(userLocation)
            .addTo(map);

    });
}
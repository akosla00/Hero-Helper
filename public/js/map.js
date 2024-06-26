mapboxgl.accessToken = "pk.eyJ1IjoiZGVubmQ5MyIsImEiOiJjbHhjaHM4Mm4wM2VqMmxwazVqZml5NzNoIn0.g-3YyPwFqtCTjdJwQ-fJYQ"

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/dennd93/clxcjtx0n02qr01qo4xgecuef',
  center: [-122.662323, 45.523751], // starting position
  zoom: 4
});
// set the bounds of the map
const bounds = [
  [-123.069003, 45.395273],
  [-122.303707, 45.612333]
];
// map.setMaxBounds(bounds);


// an arbitrary start will always be the same
// only the end or destination will change
const start = [-122.662323, 45.523751];
// const end = [-122.662323, 46.523751];
// this is where the code for the next step will go
   
// create a function to make a directions request
async function getRoute(end) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: 'GET' }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;
 
    console.log(data)
    console.log(route)
    const instructions = document.getElementById('instructions');
const steps = data.legs[0].steps;


let tripInstructions = '';
for (const step of steps) {
  tripInstructions += `<li>${step.maneuver.instruction}</li>`;
}
instructions.innerHTML = `<p><strong> Your hero is only : ${Math.floor(
  data.duration / 60
)} min Away 🦸 </strong></p><ol>${tripInstructions}</ol>`;


    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    };
    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource('route')) {
      map.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
      map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    }
    // add turn instructions here at the end
  }
 
  map.on('load', () => {
    // make an initial directions request that
    // starts and ends at the same location
    getRoute(start);
 
    // Add starting point to the map
    map.addLayer({
      id: 'point',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: start
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#3887be'
      }
    });
    // this is where the code from the next step will go


  });


  map.on('click', (event) => {
    const coords = Object.keys(event.lngLat).map((key) => event.lngLat[key]);
    const end = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: coords
          }
        }
      ]
    };
    if (map.getLayer('end')) {
      map.getSource('end').setData(end);
    } else {
      map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: coords
                }
              }
            ]
          }
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#f30'
        }
      });
    }
    getRoute(coords);
  });


  // get the sidebar and add the instructions

const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // Update the start variable with the new coordinates
  start[0] = position.coords.longitude;
  start[1] = position.coords.latitude;

  // Update the innerHTML of the element with id "demo"
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;

  // Update the dot's position on the map
  if (map.getSource('point')) {
    map.getSource('point').setData({
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: start
        }
      }]
    });
  }

  // Optionally, if you want to immediately update the route with the new start position
  // Ensure the map and its layers are fully loaded before calling this
  if (map.isStyleLoaded()) {
    getRoute(start); // This will now use the updated start position
  }
}






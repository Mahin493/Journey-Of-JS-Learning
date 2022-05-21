const MAPBOX_ACCESS_TOKEN='pk.eyJ1IjoibWFoaW4yMiIsImEiOiJjbDNma240d3IwMWJoM29sanBia3FqaWYwIn0.kteGSGaXGtDk0FTOTOWpOA'

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true,
    //trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
     //showUserHeading: true

}) 

function setupMap(centerPosition){
    mapboxgl.accessToken =MAPBOX_ACCESS_TOKEN ;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: centerPosition,
            zoom:15
            
        })

const navigationControls=new mapboxgl.NavigationControl()
map.addControl(navigationControls)        

const directionControls=  new MapboxDirections({
accessToken: MAPBOX_ACCESS_TOKEN
})
map.addControl(directionControls,'top-left')
}


function successLocation(position){
    setupMap([position.coords.longitude,position.coords.latitude])
    //console.log(position)

}

function errorLocation(){
    setupMap([-2.24,53.48])
}

    
import React from 'react';
import OpenLayersMap from '../OpenLayerMaps/OpenLayersMap';

const MapsApi = () => {
  const mapLocation = {
    center: [20, 10], // La ubicación central del mapa, por ejemplo, [latitud, longitud]
    zoom: 2, // Nivel de zoom del mapa
  };

  
  return (
    <div>
      <h3>Mapa con ubicación personalizada</h3>
      <OpenLayersMap location={mapLocation} />
      
    </div>
  );
};

export default MapsApi;



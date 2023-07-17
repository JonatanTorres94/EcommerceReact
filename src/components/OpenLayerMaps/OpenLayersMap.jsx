import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

const OpenLayersMap = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = new Map({
        target: 'map',
        layers: [new TileLayer({ source: new OSM() })],
        view: new View({
          center: location.center,
          zoom: location.zoom,
        }),
      });

      mapRef.current = map;
    }
  }, [location]);

  return <div id="map" style={{ height: '400px' }} ref={mapRef}></div>;
};

export default OpenLayersMap;

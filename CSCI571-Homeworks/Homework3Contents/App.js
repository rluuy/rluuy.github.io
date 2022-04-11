import React from 'react';
import Campus from './Campus'; 
import * as ReactDOM from 'react-dom';
import {Map} from '@esri/react-arcgis';
import {Scene} from '@esri/react-arcgis';
import {WebMap,WebScene} from '@esri/react-arcgis';

function App() {
  // like we started out with
  ReactDOM.render(
    <Scene /> ,
    document.getElementById('container')
  );
  }// App()
  
  // INSTEAD of 'export default App;'
  export default (props) => (
      <Scene style={{ width: '70vw', height: '90vh' }}
          //mapProperties={{ basemap: 'satellite' }}
          viewProperties={{
              center: [-118.28538,34.0205],
              zoom: 15
          }}>
          <Campus />
      </Scene>
  )   
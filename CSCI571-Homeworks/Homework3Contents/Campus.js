import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';

const Campus = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            // Create a polygon geometry
            const polygon = {
                type: "polygon", // autocasts as new Polygon()
                rings: [
                    [-118.28511700002800, 34.023632376769500],
                    [-118.59728347347100, 34.42564909315240],
                    [-118.11719621522800, 33.89798858634680],
                    [-117.91890982872200, 33.81227897942720],
                    [-118.31588656877000, 33.98438615083740],
                    [-118.30031839988000, 34.11855843112460],
                    [-118.13175205094900, 33.93179112471380],
                    [-118.35697177744700, 34.07637485080110],
                    [-118.41190341798300, 33.95514609872020],
                    [-118.29180993799400, 34.02242222470050]
                ]
            };

            // Create a symbol for rendering the graphic
            const fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [200,0,20, 0.25],
                outline: { // autocasts as new SimpleLineSymbol()
                    color: [255, 255, 255],
                    width: 1
                }
            };

            // Add the geometry and symbol to a new graphic
            const graphic = new Graphic({
                geometry: polygon,
                symbol: fillSymbol
            });
            setGraphic(graphic);
            props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);

    return null;

}

export default Campus;
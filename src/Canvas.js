import React, { useState } from 'react';
import { Stage, Layer,  Circle } from 'react-konva';

const Canvas = () => {
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 500;
  const BIG_CIRCLE_RADIUS = 240;
  const SMALL_CIRCLE_RADIUS = 40;

  const canvasCenterX = CANVAS_WIDTH / 2;
  const canvasCenterY = CANVAS_HEIGHT / 2;

  const [posX, setPosX] = useState(canvasCenterX);
  const [posY, setPosY] = useState(canvasCenterY);

  const onMove = (e) => {
    const coordinates = (e.evt.offsetX  - canvasCenterX) * (e.evt.offsetX  - canvasCenterX) +  (e.evt.offsetY  - canvasCenterY) * (e.evt.offsetY  - canvasCenterY);
    const newRadius = (BIG_CIRCLE_RADIUS - SMALL_CIRCLE_RADIUS) * (BIG_CIRCLE_RADIUS - SMALL_CIRCLE_RADIUS);

    if (coordinates <= newRadius ) {
      setPosX(e.evt.offsetX);
      setPosY(e.evt.offsetY);
    }
  };

  return (
    <Stage className="form" width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
      <Layer onMouseMove={onMove}>
        <Circle
          x={canvasCenterX}
          y={canvasCenterY}
          stroke='#34648E'
          radius={BIG_CIRCLE_RADIUS}
        />

        <Circle
          x={posX}
          y={posY}
          fill='#0294BF'
          radius={SMALL_CIRCLE_RADIUS}
        />

      </Layer>
    </Stage>
  );
};

export default Canvas;

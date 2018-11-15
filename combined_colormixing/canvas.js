  // CANVAS OBJECTS
  var surfaceObj = new PIXI.Sprite(surface);
  surfaceObj.position.x = SURFACE_X;
  surfaceObj.position.y = SURFACE_Y;
  surfaceObj.scale.set(SCALE_VALUE);

  app.stage.addChild(surfaceObj);

  var filterStandObj = new PIXI.Sprite(filterStand);
  filterStandObj.position.x = FILTER_X;
  filterStandObj.position.y = FILTER_Y;
  filterStandObj.scale.set(SCALE_VALUE);

  app.stage.addChild(filterStandObj);

  var eyeObj = new PIXI.Sprite(gradientEye);
  eyeObj.scale.set(SCALE_VALUE);
  eyeObj.position.x = EYE_X;
  eyeObj.position.y = EYE_Y;

  app.stage.addChild(eyeObj);

   // Color Surfaces
var coloredSurface = new PIXI.Graphics();
colorSurfaceRectangle(0xFFFFFF);

function colorSurfaceRectangle(color) {
    coloredSurface.beginFill(color);
    if(color == 0x000000) {
      coloredSurface.lineStyle(1, 0xFFFFFF, 1);
    } else {
      coloredSurface.lineStyle(2, 0x000000, 1);
    }
    if(WIDTH <= 800) {
    var sur_x = WIDTH * 0.31;
    var sur_y = HEIGHT * 0.41;
    coloredSurface.moveTo(sur_x,sur_y);
    coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y);
    coloredSurface.lineTo(sur_x + WIDTH * 0.09, sur_y + HEIGHT * 0.10);
    coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y + HEIGHT * 0.15);
    coloredSurface.lineTo(sur_x, sur_y);
  } else if(WIDTH <= 1000 && HEIGHT <= 600) {
      var sur_x = WIDTH * 0.31;
      var sur_y = HEIGHT * 0.412;
      coloredSurface.moveTo(sur_x,sur_y);
      coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y);
      coloredSurface.lineTo(sur_x + WIDTH * 0.09, sur_y + HEIGHT * 0.16);
      coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y + HEIGHT * 0.21);
      coloredSurface.lineTo(sur_x, sur_y);
    } else if(HEIGHT <= 700) {
      var sur_x = WIDTH * 0.31;
      var sur_y = HEIGHT * 0.412;
      coloredSurface.moveTo(sur_x,sur_y);
      coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y);
      coloredSurface.lineTo(sur_x + WIDTH * 0.09, sur_y + HEIGHT * 0.2);
      coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y + HEIGHT * 0.25);
      coloredSurface.lineTo(sur_x, sur_y);
  } else {
       var sur_x = SURFACE_X + WIDTH * 0.01;
       var sur_y = SURFACE_Y + HEIGHT * 0.02;
       coloredSurface.moveTo(sur_x,sur_y);
       coloredSurface.lineTo(sur_x + WIDTH * 0.04, sur_y);
       coloredSurface.lineTo(sur_x + WIDTH * 0.08, sur_y + HEIGHT * 0.14);
       coloredSurface.lineTo(sur_x + WIDTH * 0.05, sur_y + HEIGHT * 0.21);
       coloredSurface.lineTo(sur_x, sur_y);
  }
    coloredSurface.endFill()
    app.stage.addChild(coloredSurface);
}

var colorEye = new PIXI.Graphics();

var coloredSurface = new PIXI.Graphics();
colorSurfaceRectangle(0xFFFFFF);
colorEyeRectangle();

function colorEyeRectangle() {
    if(WIDTH <= 600) {
      var rec_x = EYE_X + WIDTH * 0.075;
      var rec_y = EYE_Y;
      colorEye.beginFill(currentColor);
      colorEye.lineStyle(2, 0x000000, 1);
      colorEye.moveTo(rec_x,rec_y);
      colorEye.lineTo(rec_x + WIDTH * 0.08,rec_y);
      colorEye.lineTo(rec_x + WIDTH * 0.08,rec_y + HEIGHT * 0.06);
      colorEye.lineTo(rec_x,rec_y + HEIGHT * 0.06);
      colorEye.lineTo(rec_x,rec_y);
      colorEye.endFill();
      app.stage.addChild(colorEye);
    } else {
      var rec_x = EYE_X + WIDTH * 0.075;
      var rec_y = EYE_Y;
      colorEye.beginFill(currentColor);
      colorEye.lineStyle(2, 0x000000, 1);
      colorEye.moveTo(rec_x,rec_y);
      colorEye.lineTo(rec_x + WIDTH * 0.08,rec_y);
      colorEye.lineTo(rec_x + WIDTH * 0.08,rec_y + HEIGHT * 0.1);
      colorEye.lineTo(rec_x,rec_y + HEIGHT * 0.1);
      colorEye.lineTo(rec_x,rec_y);
      colorEye.endFill();
      app.stage.addChild(colorEye);
  }
}
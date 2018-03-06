// 1 - Get Object
// 2 - Set Parameters / Properties
// 3 - Action - ( Make shape or line )

function makeCanvas(){
    // 1 - Get Object
    var canvas1 = document.getElementById('canvas1');
    var ctx1 = canvas1.getContext('2d');

    // 2 -Set Parameters
    ctx1.font = '32pt Arial';
    ctx1.fillStyle = 'DeepSkyBlue';
    ctx1.strokeStyle ='black';

    // 3 - Action
    ctx1.fillText("I Love HTML5", 45, 150);
    ctx1.strokeText("I Love HTML5", 45, 150);

    // CANVAS 2 - SQUARES //
    // 1 - get Object
    var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');

    // 2 - Set Properties
    ctx2.fillStyle = "#ff0000";
    ctx2.strokeStyle = "#000000";
    ctx2.lineWidth = 10;

    // 3 - Make Rectangle
    ctx2.fillRect(45, 5, 135, 135);
    ctx2.strokeRect(45, 5, 135, 135);

    ctx2.fillRect(200, 150, 135, 135);
    ctx2.strokeRect(200, 150, 135, 135);

    ctx2.fillStyle = "#666666";
    ctx2.fillRect(200, 5, 135, 135);
    ctx2.fillRect(45, 150, 135, 135);

}

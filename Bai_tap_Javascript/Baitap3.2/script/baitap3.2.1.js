var Piechart = function (options) {
    this.options = options;
    var ctx = options.ctx;
    var canvas = options.canvas;
    var title = options.title;
    var color = options.colors;
    var data = options.data;
    var name = options.name;
    ctx.scale(0.7,0.5);
    var startX = 150;
    this.drawChart = function () {
        drawLine(ctx);
        drawCol(ctx, data, name);
        drawTitle(ctx);
        drawText(ctx);
    }
}
//draw line char
function drawLine(ctx) {
    ctx.beginPath();
    for(var i=0; i<5; i++) {
        ctx.lineWidth = 1;
        ctx.color = "#d3d3d3";
        ctx.fillStyle = "black";
        ctx.moveTo(300,700-i*100);
        ctx.lineTo(1000,700-i*100);
        ctx.font = "20px Time New Roman";
        ctx.fillText(i,300 - 20,  700-i*100);
        ctx.stroke();
    }
    ctx.closePath();
}
//draw title chart
function drawTitle(ctx) {
    ctx.beginPath();
    ctx.font = "40px Time New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("BIỂU ĐỒ LỊCH SỬ OF POSITION",360,150);
    ctx.stroke();
}
//draw text chart
function drawText(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#2915ff"
    ctx.fillRect(1050, 295, 100, 50);
    ctx.font = "40px Time New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("LEVEL ",1050,400);
    ctx.fillText("OF ",1050,500);
    ctx.fillText("POSITION",1050,600);
    ctx.translate(0,600);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("LEVEL OF POSITION",-90,200);
    ctx.stroke();
}
//draw colchart
function drawCol (ctx,data, name) {
    var changeXPrintCol = 300;
    var heightCol = 100;
    ctx.beginPath();
    for( var i=0; i<5; i++){
        ctx.fillStyle = "#2915ff";
        ctx.fillRect(changeXPrintCol, 700,80,-data[i]*heightCol);;
        changeXPrintCol += 150;
    }

    var changeXPrintName = 280;
    for( var i=0; i<5; i++){
        ctx.fillStyle = "black";
        ctx.font = "40px Time New Roman";
        ctx.fillText(name[i],changeXPrintName+40,750);
        changeXPrintName += 150;
    }
    ctx.closePath();
}
var Piechart = function (options) {
    var ctx = options.ctx;
    var myRate = options.data;
    var color = options.colors;
    var title = options.title;
    this.printChart = function () {
        drawText(ctx,"80% Đã đạt",200,90,"black");
        drawText(ctx,"20% chưa đạt",700,40,"black");
        drawText(ctx,title,250,520,"blue");
       ctx.scale(1.5,0.5);
        for(var i = 0; i < 100; i++) {
            drawPieSlice(ctx, 300-10, 800-i-10, 150, 0, myRate.success * 2 * Math.PI, color.successBottom);
            drawPieSlice(ctx, 300-10, 800-i-20, 150, myRate.success * 2 * Math.PI,  0, color.failBottom);
            if(i==99)
            {
                drawPieSlice(ctx, 300-10, 800-i-10, 150, 0, myRate.success * 2 * Math.PI,color.successTop);
                drawPieSlice(ctx, 300-10, 800-i-20, 150, myRate.success * 2 * Math.PI,  0,color.failTop);
                drawLine(ctx,250,600,200,200,100,200,4,"#3145ff");
                drawLine(ctx,350,600,450,100,600,100,4,"#ff2e60");
            }
        }
    }
}
function drawPieSlice (ctx,centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.fillStyle = color
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
function drawLine (ctx,x1,y1,x2,y2,x3,y3,line,color){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.lineTo(x3, y3);
    ctx.lineWidth = line;
    ctx.strokeStyle = color;
    ctx.stroke();
}
function drawText(ctx, text, x , y, color) {
    ctx.beginPath();
    ctx.font = "20px Time New Roman";
    ctx.fillStyle = color;
    ctx.fillText(text,x,y);
    ctx.stroke();
}

window.onload = function ve() {
    var myCanvas = document.getElementById("myCanvas");

    myCanvas.width = 1000;

    myCanvas.height = 1000;
    var ctx = myCanvas.getContext("2d");
    ctx.scale(1.5,0.5);
    for(var i = 0; i < 200; i++) {
        drawPieSlice(ctx, 300, 800-i, 150, 2 * Math.PI * 20 / 100, 2 * Math.PI, '#3f50ff');
        drawPieSlice(ctx, 300+5, 800-i-10, 150, 2 * Math.PI, 2 * Math.PI * 0.2, '#ff1d31');
    }
    xuatLineThanhCong(ctx);
    xuatLineThatBai(ctx);
    textDat(ctx);
    textChuaDat(ctx);
    textTieuDe(ctx);
    }
function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fill();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
 function xuatLineThanhCong(ctx) {
    ctx.beginPath();
    ctx.moveTo(300, 500);
    ctx.lineTo(200,50);
    ctx.lineTo(50, 50);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#5c5bff";
    ctx.stroke();
}
function xuatLineThatBai (ctx){
        ctx.beginPath();
        ctx.moveTo(400, 700);
        ctx.lineTo(500,200);
        ctx.lineTo(800, 200);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#ff2e60";
        ctx.stroke();
    }
function textDat(ctx) {
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("80% Đã đạt",60,30);
        ctx.stroke();
    }
function textChuaDat(ctx) {
        ctx.scale(1, 1);
        ctx.beginPath();
        ctx.font = "20px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("20% chưa đạt",500,180);
        ctx.stroke();
    }

function textTieuDe(ctx) {
    ctx.scale(1, 1);
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC",101,1000);
    ctx.stroke();
}
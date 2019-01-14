window.onload = function drawChart() {
    Canvas();
}
function Canvas() {
    var myRate = {
        success: 0.8,
        fail: 0.2
    };
    var color = {
        successTop:"#009ed5",
        successBottom:"#456aa4",
        failTop: "#e4322b",
        failBottom: "#91302f"
    };
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    var myPiechart = new Piechart(
        {
            ctx,
            centerX: 300,
            centerY: 800,
            radius: 150,
            title: "BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC",
            canvas: myCanvas,
            data: myRate,
            colors: color,
        }
    );
    myPiechart.printChart();
}
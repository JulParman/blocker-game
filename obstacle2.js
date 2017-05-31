blockerApp.obstacle2 = function (rnd) {

    var random = rnd;
    var x = 599;
    var y = random + 90;
    var width = 50;
    var height = 300 - random;

    return{
        x:x,
        y:y,
        width:width,
        height:height
    }
};
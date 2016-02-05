grid = {
    canvas: '',
    listDots: [],
    widthGrid: '',
    heightGrid: '',
    radiusDots: 10,
    marginDots: 1,
    cols: 0,
    rows: 0,
    img: undefined,
    
    init: function(){
        grid.canvas = SVG('grid');
        this.updateGrid();
    },
    componentToHex: function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    },
    rgbToHex: function (r, g, b) {
        return "#" + grid.componentToHex(r) + grid.componentToHex(g) + grid.componentToHex(b);
    },
    
    cleanGrid: function(){
        grid.canvas.clear();
        this.listDots = [];
    },

    updateGrid: function(){
        this.cleanGrid();
        this.widthGrid = $('svg#grid').width();
        this.heightGrid = $('svg#grid').height();
        
        this.cols = Math.ceil(this.widthGrid / (this.radiusDots+this.marginDots));
        this.rows = Math.ceil(this.heightGrid / (this.radiusDots+this.marginDots));
                
        for(var col = 0; col < this.cols; col++){
            this.listDots[col] = [];

            for(var row = 0; row < this.rows; row++){
                this.listDots[col][row];
                
                this.listDots[col][row] = grid.canvas.circle(this.radiusDots, this.radiusDots)
                                   .move(this.marginDots/2+col*(this.radiusDots+this.marginDots+2), 
                                         this.marginDots/2+row*(this.radiusDots+this.marginDots))
                                    .fill('blue');

                
            }
        }
        
        
    },
    getLuminosity: function (r,g,b,p){
        p=Math.pow;
        return 0.2126*p(r/255,2.2)+0.7152*p(g/255,2.2)+0.0722*p(b/255,2.2);
    },

    loadImage: function (pic) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        
        
        this.img = new Image;        
        this.img.onload = function() {
            
            var ratio = (canvas.height / this.img.height);

            console.log("loaded");

            context.drawImage(this.img, 0, 0, this.img.width, this.img.height, canvas.width/2-this.img.width*ratio/2, canvas.height/2-this.img.height*ratio/2, this.img.width*ratio, this.img.height*ratio);
            var theData = context.getImageData(0, 0, canvas.width, canvas.height);
          
            for(var col = 0; col < grid.cols; col++){
                console.log("lol");
                for(var row = 0; row < grid.rows; row++){
                    
                    var pixelX = Math.floor(canvas.width / grid.cols * col);
                    var pixelY = Math.floor(canvas.height / grid.rows * row);
                    
                    var indexPixel = 4*(pixelX + (pixelY * canvas.width));
                                    
                    var pixelRed=theData.data[indexPixel];
                    var pixelGreen=theData.data[indexPixel+1];
                    var pixelBlue=theData.data[indexPixel+2];
                    var pixelAlpha=theData.data[indexPixel+3];
                    
                    var hexPixel = grid.rgbToHex(pixelRed, pixelGreen, pixelBlue);
                    
                    
                    grid.listDots[col][row].animate().fill(hexPixel);


                    
                }
            }
            

        };
        console.log("ici", this.img.src);
        this.img.src = pic;
        console.log("ici", this.img.src);

        
    },

    
    
}
        

$(document).ready(function(){
    
    grid.init();

    
    $(window).resize(function(){
//        grid.updateGrid();
    });

    grid.loadImage("http://placekitten.com/g/200/300");

    
});


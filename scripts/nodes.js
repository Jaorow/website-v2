settings = {
    particle_count: 50,
    colors: ["#04AA5C","white","lightblue"],
    acc: 1,
    dec: 1,
    particle_size: 3,
    line_width: 1,
    connectivity_distance: 200
}




function change_particle_count(count) {
  particle_count = count;
}

function change_color(color) {
    colors = color;
}

function change_acc(acc) {
    acc = acc;
}

function change_dec(dec) {
    dec = dec;
}

function change_particle_size(size) {
    particle_size = size;
}

function change_line_width(width) {
    lineWidth = width;
}

function change_connectivity_distance(distance) {
    connectivity_distance = distance;
}



 
window.requestAnimFrame = function()
{
    return (
        window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback){
            window.setTimeout(callback, 1000 / 60);
        }
    );
}();

var canvas = document.getElementById('canvas'); 
var context = canvas.getContext('2d');

//get DPI
let dpi = window.devicePixelRatio || 1;
context.scale(dpi, dpi);

function fix_dpi() {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);

    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
}


var particle_count = 50
colors = ["#04AA5C","white","lightblue"];

var acc = 1;
var dec = 1;

var particle_size = 5;

var lineWidth = 1
var connectivity_distance = 200

particles = []

console.log(settings.particle_count)

function spawnSpeed(){
    return Math.round((Math.random()*201)+0)/100;
}
function Particle()
    {
        


        this.radius = Math.round((Math.random()*3)+particle_size);

        // spawn location
        this.x = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) * dpi) - this.radius + 1) + this.radius));
        this.y = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) * dpi) - this.radius + 1) + this.radius));

        // same spawn location below
        // this.x = 20;
        // this.y=20;

        // spawn colors
        this.color = colors[Math.floor(Math.random()*colors.length)];

        // spawn speed
        this.speedx = spawnSpeed();
        this.speedy = spawnSpeed();

        
        switch (Math.round(Math.random()*colors.length))
        {
            case 1:
            this.speedx *= acc;
            this.speedy *= acc;
            break;
            case 2:
            this.speedx *= -dec;
            this.speedy *= acc;
            break;
            case 3:
            this.speedx *= acc;
            this.speedy *= -dec;
            break;
            case 4:
            this.speedx *= -dec;
            this.speedy *= -dec;
            break;
        }
            
        this.move = function()
        {
            
            context.beginPath();
            context.globalCompositeOperation = 'source-over';
            context.fillStyle   = this.color;
            context.globalAlpha = 1;
            context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
            context.fill();
            context.closePath();

            this.x = this.x + this.speedx;
            this.y = this.y + this.speedy;
            
            if(this.x <= 0+this.radius)
            {
                this.speedx *= -1;
            }
            if(this.x >= canvas.width-this.radius)
            {
                this.speedx *= -1;
            }
            if(this.y <= 0+this.radius)
            {
                this.speedy *= -1;
            }
            if(this.y >= canvas.height-this.radius)
            {
                this.speedy *= -1;
            }

            for (var j = 0; j < particle_count; j++)
            {
                var particleActuelle = particles[j],
                    yd = particleActuelle.y - this.y,
                    xd = particleActuelle.x - this.x,
                    d  = Math.sqrt(xd * xd + yd * yd);

                if ( d < connectivity_distance )
                {
                    context.beginPath();
                    context.globalAlpha = (200 - d) / (200 - 0);
                    context.globalCompositeOperation = 'destination-over';
                    context.lineWidth = lineWidth;
                    context.moveTo(this.x, this.y);
                    context.lineTo(particleActuelle.x, particleActuelle.y);
                    context.strokeStyle = this.color;
                    context.lineCap = "round";
                    context.stroke();
                    context.closePath();
                }
            }
        };
    };
    for (var i = 0; i < particle_count; i++)
    {
        fix_dpi();
        var particle = new Particle();
        particles.push(particle);
    }


    function animate()
    {
        fix_dpi();
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particle_count; i++)
        {
            particles[i].move();
        }
        requestAnimFrame(animate);
    }
    
    

   
    animate(); 


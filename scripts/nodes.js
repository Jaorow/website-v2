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

function changeParticleCount(count) {
  particle_count = count;
}


var canvas = document.getElementById('canvas'); 
var context = canvas.getContext('2d');

//get DPI
let dpi = window.devicePixelRatio || 1;
context.scale(dpi, dpi);
console.log(dpi);

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
		particles = [],
        // ""#00eeff"
		colours   = ["#04AA5C","white","lightblue"];

        // og speeed
        var acc = 1;
        
        var dec = 1;


    function Particle()
    {
        


        this.radius = Math.round((Math.random()*3)+5);

        // spawn location
        this.x = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("width").slice(0, -2) * dpi) - this.radius + 1) + this.radius));
        this.y = Math.floor((Math.random() * ((+getComputedStyle(canvas).getPropertyValue("height").slice(0, -2) * dpi) - this.radius + 1) + this.radius));

        // same spawn location below
        // this.x = 20;
        // this.y=20;

        // spawn colours
        this.color = colours[Math.floor(Math.random()*colours.length)];

        // spawn speed
        this.speedx = Math.round((Math.random()*201)+0)/100;
        this.speedy = Math.round((Math.random()*201)+0)/100;

        
        switch (Math.round(Math.random()*colours.length))
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

                if ( d < 200 )
                {
                    context.beginPath();
                    context.globalAlpha = (200 - d) / (200 - 0);
                    context.globalCompositeOperation = 'destination-over';
                    context.lineWidth = 1;
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


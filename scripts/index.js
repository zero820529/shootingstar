var SkySpace = document.getElementById('Sky');
var width = SkySpace.offsetWidth;
var height = SkySpace.offsetHeight;

setInterval(()=>{
    var star = new ShootingStar();
    star.Run();
},200);


function ShootingStar(){
    //property
    let Star = create();

    //public function
    this.Run = function(){
        fall();
        setTimeout(()=>{
            disappear();
        },2000);
    }

    //private function
    function create(){
        //init property
        let x = Math.random() * width;
        let y = Math.random() * height / 2;

        //create star
        let star = document.createElement('i');
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.className = 'star';
        SkySpace.appendChild(star);

        return star;
    }

    function fall(){
        Star.classList.add('falling');
    }

    function disappear(){
        Star.remove();
    }
}


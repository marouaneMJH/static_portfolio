const secctionsIds=['#home', '#about', '#portfolio', '#news', '#contact'];

Jhidde("#home")

// trailer animation

const trailer=document.getElementById("trailer");
const trailerPoint=document.getElementById("trailer-point");


window.addEventListener("mousemove", el =>{
    const   x=el.clientX - trailer.offsetWidth/2,
            y=el.clientY -trailer.offsetWidth/2  ;
    trailer.style.transform =  `translate(${x}px,${y}px)`;
    trailer.style.transition = '0.06s ease-in-out';
    trailer.style.opacity =" 0.4";
    trailerPoint.style.transform =  `translate(${x+14}px,${y+14}px)`;
    trailerPoint.style.opacity ="1";
});

// trailer hover effect 



const trailerHover=document.querySelectorAll("header > *, .botton, .card");
console.log(trailerHover);
trailerHover.forEach(el => {
    el.addEventListener("mouseover", () => {
        trailer.classList.add("hover-effect");
        trailer.style.transition='0.3s';
        trailerPoint.style.visibility='hidden';
    });
    el.addEventListener("mouseout", () => {
        trailer.classList.remove("hover-effect"); 
        trailer.style.transition='0.3s';
        trailerPoint.style.visibility='visible';
    });
});

//MENU effect 

document.querySelector(".menu-icon").addEventListener("click", ()=>{
    document.querySelector("header ul").classList.toggle("block");
    
});

// working with jQuery

// section hidden 

function Jhidde(el){
    secctionsIds.forEach(e =>{
        $(`${e}`).hide();
        
    })

    $(`${el}`).show();
    
}

const colors = ["#FF0000", 
                "#00FF00",
                "#0000FF",
                "#FFFF00",
                "#800080",
                "#00FFFF",
                "#FF00FF",
                "#008080"];

$(":root").get(0).style.setProperty("--second-color", `${colors[Math.floor(Math.random()*colors.length)]}`);



// trailer animation

const trailer=document.getElementById("trailer");
const trailerPoint=document.getElementById("trailer-point");


window,addEventListener("mousemove", el =>{
    const   x=el.clientX - trailer.offsetWidth/2,
            y=el.clientY -trailer.offsetWidth/2  ;
    trailer.style.transform =  `translate(${x}px,${y}px)`;
    trailer.style.transition = " 0.06s ease-in-out";
    trailer.style.opacity =" 1";
    trailerPoint.style.transform =  `translate(${x+14}px,${y+14}px)`;
    trailerPoint.style.opacity =" 1";
    // trailerPoint.style.transition = " 0.03s ease-in-out";


});

// trailer hover effect 



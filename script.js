//////////////////////////// MODAL MANSONRY\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

$('#salaEstarModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#salaJantarModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#cozinhaModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#banheiroModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#escritorioModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#quartoModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#infantilModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})

$('#areaServicoModal').on( 'shown.bs.modal', function() {
  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 1,
    horizontalOrder: true
  });
})


//////////////////////////// ANIMÇÃO PUXADORES \\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Animação 01
gsap.fromTo(".puxador:nth-child(1)",
//de
{x:200},
{
//para
scrollTrigger: {
trigger: ".puxador:nth-child(1)",
start: "-20% center",
end: "120% center",
scrub: true,
},
	x:-100,
	ease: Power1.easeOut
}
);

//Animação 02
gsap.fromTo(".puxador:nth-child(2)",
//de
{x:100},
{
//para
scrollTrigger: {
trigger: ".puxador:nth-child(2)",
start:  "-20% center",
end: "120% center",
scrub: true,
},
	x:-50,
	ease: Power2.easeOut
}
);

// middle sem animação

//Animação 04
gsap.fromTo(".puxador:nth-child(4)",
//de
{x:-100},
{
//para
scrollTrigger: {
trigger: ".puxador:nth-child(4)",
start:  "-20% center",
end: "120% center",
scrub: true,
},
	x:50,
	ease: Power2.easeOut
}
);


//Animação 05
gsap.fromTo(".puxador:nth-child(5)",
//de
{x:-200},
{
//para
scrollTrigger: {
trigger: ".puxador:nth-child(5)",
start: "-20% center",
end: "120% center",
scrub: true,
},
	x:100,
	ease: Power1.easeOut
}
);


//Bokeh
gsap.fromTo(".bokeh",
//de
{opacity:0},
{
//para
	opacity: 0.5,
scrollTrigger: {
trigger: ".bokeh",
start: "top 80%",
end: "bottom 120%",
scrub: true,
markers: false,
},
	
	ease: "power2.inOut"
}
);


///////////////////////////// ANIMAÇÃO FOTO INSERÇÃO
//----------- Animação inserção


/*
//CIMA
gsap.fromTo(".acordeon img:nth-child(4)",
{x:80,y:-80,opacity:0.8},
{
//para
scrollTrigger: {
trigger: ".acordeon img:nth-child(4)",
toggleActions: "play pause restart reset",
start: "-30% center",
end: "100% center",
scrub: false,
},
	x:0,
	y:0,
	opacity:1,
	ease: Power1.easeOut
}
);

//MEIO
gsap.fromTo(".acordeon img:nth-child(3)",
{x:10,y:-10,opacity:0.6},
{
//para
scrollTrigger: {
trigger: ".acordeon img:nth-child(3)",
toggleActions: "play pause restart reset",
start: "-30% center",
end: "100% center",
scrub: false,
},
	x:0,
	y:0,
	opacity:1,
	ease: Power1.easeOut
}
);

//PENÚLTIMO
gsap.fromTo(".acordeon img:nth-child(2)",
{x:-50,
	y:50,
opacity:0.4}
,{
//para
scrollTrigger: {
trigger: ".acordeon img:nth-child(2)",
toggleActions: "play pause restart reset",
start: "-30% center",
end: "100% center",
scrub: false,
},
	x:0,
	y:0,
	opacity:1,
	ease: Power1.easeOut
}
);

//ÚLTIMO
gsap.fromTo(".acordeon img:nth-child(1)",
        {x:-120,y:120,opacity:0.2}
,{
//para
scrollTrigger: {
trigger: ".acordeon img:nth-child(1)",
toggleActions: "play pause restart reset",
start: "-30% center",
end: "100% center",
scrub: false,
},
	x:0,
	y:0,
	opacity:1,
	ease: Power1.easeOut
}
);*/

gsap.to(".ring", {
  scale: 1.75,
  opacity: 0,
  duration: 2,
  stagger: {
    each: 0.5,
    repeat: -1
  }
}).time(2);
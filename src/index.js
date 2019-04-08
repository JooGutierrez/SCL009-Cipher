//CIFRAR

//al hacer click en el boton "cifrartxt" va a darle la instruccion de que se desarrolle la funcion dentro del bloque de texto (lo que va entre las {})
document.getElementById("cifrartxt").addEventListener("click",()=>{
//declare variable para traer el valor del mensaje ingresado por el usuario
	let mnsj = document.getElementById("txtusuario").value; 

	//variable para traer el valor del offset ingresado por el usuario
	let offset = document.getElementById("offsetlisto").value;
	//console.log('texto: '+mnsj);
	let ofst = parseInt(offset); 
	//console.log('offset: '+ofst);

document.getElementById("rslt").value=cipher.encode(mnsj, ofst);
	})
document.getElementById("limpiar").addEventListener('click', function(){
		location.reload()
	})

//DESCIFRAR

//al hacer click en el boton "descifrartxt" va a darle la instruccion de que se desarrolle la funcion dentro del bloque de texto (lo que va entre las {})
document.getElementById("descifrartxt").addEventListener("click",()=>{
	//declare variable para traer el valor del mensaje ingresado por el usuario
	let mnsj = document.getElementById("txtusuario").value; 

	//variable para traer el valor del offset ingresado por el usuario
	let offset = document.getElementById("offsetlisto").value;
	//console.log('texto: '+mnsj);
	let ofst = parseInt(offset); 
	//console.log('offset: '+ofst);

document.getElementById("rslt").value=cipher.decode(mnsj,ofst);
})
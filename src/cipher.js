window.cipher = {
	encode: (mnsj, ofst) => {
	
		let result = "";
		let txtcifrado = "";

		for(let i=0; i<mnsj.length; i++){
	//si pongo "i<=mnsj.lenght" me agrega un caracter más, entonces lo hacemos solo con el "<" o también puede ser con "i=1" 
			let ascii=mnsj.charCodeAt(i);
			if(ascii >= 65 && ascii <= 90){
			//condición ASCII valores mayús
			result = String.fromCharCode((ascii - 65 + ofst) % 26 + 65);
			//obtiene el nuevo código ASCII mediante fórmula y convierte el nuevo ASCII en letra del alfabeto
			}else if(ascii >= 97 && ascii <= 122){
			//condición ASCII valor minús
				result = String.fromCharCode((ascii - 97 + ofst) % 26 + 97);
				//obtiene el nuevo código ASCII mediante fórmula y convierte el nuevo ASCII en letra del alfabeto 
			}else if(ascii==32){
				result=String.fromCharCode(ascii);
			//condicion para espacio	
			}	
			txtcifrado+= result;
			//concatenamos para formar nueva palabra   
 }
	return txtcifrado;
},

	decode: (mnsj, ofst) => {
		
	let result = "";
	let txtcifrado = "";

	for(let i=0; i<mnsj.length; i++){
	//si pongo "i<=mnsj.lenght" me agrega un caracter más, entonces lo hacemos solo con el "<" o también puede ser con "i=1" 
		let ascii = mnsj.charCodeAt(i);

	if(ascii >= 65 && ascii <= 90){
		result = String.fromCharCode((ascii + 65 - ofst) % 26 + 65);
}
	else if(ascii >= 97 && ascii <= 122){
		//condición ASCII valor minús
			result = String.fromCharCode((ascii + 97 - (ofst+12)) % 26 + 97);
}
		
	//condicion para espacio
	else if(ascii==32){
		result=String.fromCharCode(ascii);		
}	
	
	txtcifrado+= result;
	//concatenamos para formar nueva palabra 
}
return txtcifrado;
	}
};
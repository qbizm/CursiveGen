"use strict";

function convert(input){
	const big_a = 0x0041;
	const big_z = 0x005A;
	const big_a_flower_least = 0xDCD0;
	const little_a = 0x0061;
	const little_z = 0x007A;
	const little_a_cursive_least = 0xDCEA;
	const char_place = 0xD835;


	let output = "";

	for (let step = 0; step < input.length; step++) {
	
		let code = input.charCodeAt(step);
  
		if( (code >= big_a) && (code <= big_z) ){
			output += String.fromCharCode(char_place, code - big_a + big_a_flower_least);
		}
		
		else if( (code >= little_a) && (code <= little_z) ){
			output += String.fromCharCode(char_place, code - little_a + little_a_cursive_least);
		}
		else{
			output += input.substr(step, 1);
		}
	}
	return output;
}


function tweet() {
    let text = document.getElementById('output').value;
    let url = 'https://twitter.com/intent/tweet?text=' + encodeURI(text);

    window.open(url);
}

function copy() {
	if(navigator.clipboard){
    navigator.clipboard.writeText(document.getElementById('output').value);
	}
}

document.addEventListener("DOMContentLoaded", () => {
    const convertButton = document.getElementById("convert");
	const tweetButton = document.getElementById("tweet");
	const copyButton = document.getElementById("copy");
	
    convertButton.addEventListener("click", () => { 

        let input = document.getElementById("input").value;
        
		document.getElementById("output").value = convert(input);

    });
	
	tweetButton.addEventListener("click", () => { 
		tweet();
    });
	
	copyButton.addEventListener("click", () => { 
		copy();
    });
});

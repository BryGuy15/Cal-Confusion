
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const display = document.querySelector("#number-display");
const checkButton = document.querySelector("#check-button");

const winningNumbers = [7,5,2,9,1,4,8,0,6,3]; // Misssing numbers in order of keys 1 to 0. 

let numberMIX = [0,1,2,3,4,5,6,7,8,9]; 


const number2 = numberMIX.filter(n => n != 4 && n != 9 && n != 1 && n != 8 && n != 3 && n != 6 && n != 0 && n != 5 && n != 7);
const number4 = numberMIX.filter(n => n != 2 && n != 9 && n != 1 && n != 8 && n != 3 && n != 6 && n != 0 && n != 5 && n != 7);
const number9 = numberMIX.filter(n => n != 4 && n != 2 && n != 1 && n != 8 && n != 3 && n != 6 && n != 0 && n != 5 && n != 7);
const number1 = numberMIX.filter(n => n != 4 && n != 9 && n != 2 && n != 8 && n != 3 && n != 6 && n != 0 && n != 5 && n != 7);
const number8 = numberMIX.filter(n => n != 4 && n != 9 && n != 1 && n != 2 && n != 3 && n != 6 && n != 0 && n != 5 && n != 7);
const number3 = numberMIX.filter(n => n != 4 && n != 9 && n != 1 && n != 8 && n != 2 && n != 6 && n != 0 && n != 5 && n != 7);
const number6 = numberMIX.filter(n => n != 4 && n != 9 && n != 1 && n != 8 && n != 3 && n != 2 && n != 0 && n != 5 && n != 7);
const number0 = numberMIX.filter(n => n != 4 && n != 9 && n != 1 && n != 8 && n != 3 && n != 6 && n != 2 && n != 5 && n != 7);
const number5 = numberMIX.filter(n => n != 4 && n != 9 && n != 1 && n != 8 && n != 3 && n != 6 && n != 0 && n != 2 && n != 7);
const number7 = numberMIX.filter(n => n != 9 && n != 3 && n != 0 && n != 2 && n != 4 && n != 8 && n != 1 && n != 6 && n != 5);

let sortedArray = [];
let displayArray = [];

let arrayONE = [];
let arrayTWO = [];

let countONE = 0; 
let countTWO = 0;
let countTHREE = 0;
let countFOUR = 0;
let countFIVE = 0;
let countSIX = 0;
let countSEVEN = 0;
let countEIGHT = 0;
let countNINE = 0;
let countZERO = 0;
let checkButtonCount = 0;

let keyONE = []; 
let keyTWO = [];
let keyTHREE = [];
let keyFOUR = [];
let keyFIVE = [];
let keySIX = [];
let keySEVEN = [];
let keyEIGHT = [];
let keyNINE = [];
let keyZERO = [];

let keyColours = [];



//ONE

one.addEventListener("click", ()=>{

    //Missing 7

    //2,4,9,1,8,3,6,0,5

    countONE++; 

    if(countONE === 1){
     
        displayArray.push(number2);
        sortedArray.push(number2);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number2[0]){
		const one = n => n == number2[0];
                const found = sortedArray.findIndex(one); // finds the index of 2 (array key)

		keyONE.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}

        
    } else if(countONE === 2){

	displayArray.splice(keyONE[0],1,number4); 

    if(keyColours[0] === 'On'){
        colourKeys();
    };
    
        
    }else if(countONE === 3){
	displayArray.splice(keyONE[0],1,number9); 

    if(keyColours[0] === 'On'){
        colourKeys();
    };
    
       
    }else if(countONE === 4){

        displayArray.splice(keyONE[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countONE === 5){

        displayArray.splice(keyONE[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countONE === 6){

        displayArray.splice(keyONE[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countONE === 7){

        displayArray.splice(keyONE[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countONE === 8){

        displayArray.splice(keyONE[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countONE === 9){

        displayArray.splice(keyONE[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countONE = 1;
        displayArray.splice(keyONE[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };


    showNumbers();

});


// TWO



two.addEventListener("click", ()=>{
  
    //Missing 5
    //6,9,3,0,2,4,8,1,7
     
    countTWO++; 


    if(countTWO === 1){
      
            displayArray.push(number6);
            sortedArray.push(number6);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number6[0]){
		const one = n => n == number6[0];
                const found = sortedArray.findIndex(one);

		keyTWO.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
	}
           

        
    } else if(countTWO === 2){
      
	displayArray.splice(keyTWO[0],1,number9); 

    if(keyColours[0] === 'On'){
        colourKeys();
    };

    }else if(countTWO === 3){
        
    	displayArray.splice(keyTWO[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countTWO === 4){

        displayArray.splice(keyTWO[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    }else if(countTWO === 5){

       displayArray.splice(keyTWO[0],1,number2); 

       if(keyColours[0] === 'On'){
        colourKeys();
    };
    }else if(countTWO === 6){

        displayArray.splice(keyTWO[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    }else if(countTWO === 7){

        displayArray.splice(keyTWO[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countTWO === 8){

        displayArray.splice(keyTWO[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    }else if(countTWO === 9){

        displayArray.splice(keyTWO[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    } else {
        countTWO = 1;
        displayArray.splice(keyTWO[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    };



    showNumbers();
   
});




//Three


  three.addEventListener("click", ()=>{

    //Missing 2 
    //8,5,6,4,7,3,0,1,9

    countTHREE++; 


    if(countTHREE === 1){
      
            displayArray.push(number8);
            sortedArray.push(number8);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number8[0]){
		const one = n => n == number8[0];
                const found = sortedArray.findIndex(one); 
		
		keyTHREE.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}
           
            

        
    } else if(countTHREE === 2){
      
     	displayArray.splice(keyTHREE[0],1,number5); 

         if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countTHREE === 3){
        
        displayArray.splice(keyTHREE[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countTHREE === 4){

        displayArray.splice(keyTHREE[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countTHREE === 5){

        displayArray.splice(keyTHREE[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countTHREE === 6){

        displayArray.splice(keyTHREE[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countTHREE === 7){

        displayArray.splice(keyTHREE[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countTHREE === 8){

        displayArray.splice(keyTHREE[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countTHREE === 9){

        displayArray.splice(keyTHREE[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countTHREE = 1;
        displayArray.splice(keyTHREE[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };



    showNumbers();
   
});



	// FOUR



  four.addEventListener("click", ()=>{

    // Missing 9
    //3,5,1,0,4,8,2,6,7
    
    countFOUR++; 

    if(countFOUR === 1){
     
        displayArray.push(number3);
        sortedArray.push(number3);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number3[0]){
		const one = n => n == number3[0];
                const found = sortedArray.findIndex(one); 
		
		keyFOUR.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}

        
    } else if(countFOUR === 2){

	    displayArray.splice(keyFOUR[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
        
        
    }else if(countFOUR === 3){
	    displayArray.splice(keyFOUR[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
       
    }else if(countFOUR === 4){

        displayArray.splice(keyFOUR[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countFOUR === 5){

        displayArray.splice(keyFOUR[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countFOUR === 6){

        displayArray.splice(keyFOUR[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countFOUR === 7){

        displayArray.splice(keyFOUR[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countFOUR === 8){

        displayArray.splice(keyFOUR[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countFOUR === 9){

        displayArray.splice(keyFOUR[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countFOUR = 1;
        displayArray.splice(keyFOUR[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };


    showNumbers();

});




// FIVE



five.addEventListener("click", ()=>{

    //Missing 1
    //4,0,9,2,6,8,5,3,7
    
    countFIVE++; 

    if(countFIVE === 1){
     
        displayArray.push(number4);
        sortedArray.push(number4);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number4[0]){
		const one = n => n == number4[0];
                const found = sortedArray.findIndex(one); 
		
		keyFIVE.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}

        
    } else if(countFIVE === 2){

	    displayArray.splice(keyFIVE[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
        
    }else if(countFIVE === 3){
	    displayArray.splice(keyFIVE[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
       
    }else if(countFIVE === 4){

        displayArray.splice(keyFIVE[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countFIVE === 5){

        displayArray.splice(keyFIVE[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countFIVE === 6){

        displayArray.splice(keyFIVE[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countFIVE === 7){

        displayArray.splice(keyFIVE[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countFIVE === 8){

        displayArray.splice(keyFIVE[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countFIVE === 9){

        displayArray.splice(keyFIVE[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countFIVE = 1;
        displayArray.splice(keyFIVE[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };


    showNumbers();

});


// SIX


six.addEventListener("click", ()=>{

    // Missing 4
    //7,6,9,1,8,0,2,3,5
    
    countSIX++; 

    if(countSIX === 1){
     
        displayArray.push(number7);
        sortedArray.push(number7);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number7[0]){
		const one = n => n == number7[0];
                const found = sortedArray.findIndex(one); 
		
		keySIX.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}

        
    } else if(countSIX === 2){

	    displayArray.splice(keySIX[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
        
    }else if(countSIX === 3){
	    displayArray.splice(keySIX[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
       
    }else if(countSIX === 4){

        displayArray.splice(keySIX[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countSIX === 5){

        displayArray.splice(keySIX[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countSIX === 6){

        displayArray.splice(keySIX[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countSIX === 7){

        displayArray.splice(keySIX[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countSIX === 8){

        displayArray.splice(keySIX[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countSIX === 9){

        displayArray.splice(keySIX[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countSIX = 1;
        displayArray.splice(keySIX[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };


    showNumbers();

});



// SEVEN


seven.addEventListener("click", ()=>{

    // Missing 8
    //0,1,5,9,7,3,4,6,2

    
    countSEVEN++; 

    if(countSEVEN === 1){
     
        displayArray.push(number0);
        sortedArray.push(number0);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number0[0]){
		const one = n => n == number0[0];
                const found = sortedArray.findIndex(one); 
		
		keySEVEN.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}

        
    } else if(countSEVEN === 2){

	    displayArray.splice(keySEVEN[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
        
    }else if(countSEVEN === 3){
	    displayArray.splice(keySEVEN[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
       
    }else if(countSEVEN === 4){

        displayArray.splice(keySEVEN[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countSEVEN === 5){

        displayArray.splice(keySEVEN[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countSEVEN === 6){

        displayArray.splice(keySEVEN[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countSEVEN === 7){

        displayArray.splice(keySEVEN[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countSEVEN === 8){

        displayArray.splice(keySEVEN[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countSEVEN === 9){

        displayArray.splice(keySEVEN[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countSEVEN = 1;
        displayArray.splice(keySEVEN[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };


    showNumbers();

});



// EIGHT



eight.addEventListener("click", ()=>{

    // Missing 0
    //5,2,7,4,1,9,6,3,8
    
    countEIGHT++; 

    if(countEIGHT === 1){
     
        displayArray.push(number5);
        sortedArray.push(number5);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number5[0]){
		const one = n => n == number5[0];
                const found = sortedArray.findIndex(one); 
		
		keyEIGHT.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
	}

        
    } else if(countEIGHT === 2){

	    displayArray.splice(keyEIGHT[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
        
    }else if(countEIGHT === 3){
	    displayArray.splice(keyEIGHT[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
       
    }else if(countEIGHT === 4){

        displayArray.splice(keyEIGHT[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countEIGHT === 5){

        displayArray.splice(keyEIGHT[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countEIGHT=== 6){

        displayArray.splice(keyEIGHT[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        

    }else if(countEIGHT === 7){

        displayArray.splice(keyEIGHT[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countEIGHT === 8){

        displayArray.splice(keyEIGHT[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countEIGHT === 9){

        displayArray.splice(keyEIGHT[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    } else {
        countEIGHT = 1;
        displayArray.splice(keyEIGHT[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    };


    showNumbers();

});


//NINE


nine.addEventListener("click", ()=>{

    // Missing 6
    //1,3,4,8,9,7,2,0,5
    
    countNINE++; 

    if(countNINE === 1){
     
        displayArray.push(number1);
        sortedArray.push(number1);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number1[0]){
		const one = n => n == number1[0];
                const found = sortedArray.findIndex(one); 
		
		keyNINE.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };
	}

        
    } else if(countNINE === 2){

	    displayArray.splice(keyNINE[0],1,number3); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countNINE === 3){
	    displayArray.splice(keyNINE[0],1,number4); 
        

        if(keyColours[0] === 'On'){
            colourKeys();
        };
       
    }else if(countNINE === 4){

        displayArray.splice(keyNINE[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countNINE === 5){

        displayArray.splice(keyNINE[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countNINE === 6){

        displayArray.splice(keyNINE[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countNINE === 7){

        displayArray.splice(keyNINE[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    }else if(countNINE === 8){

        displayArray.splice(keyNINE[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    }else if(countNINE === 9){

        displayArray.splice(keyNINE[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    } else {
        countNINE = 1;
        displayArray.splice(keyNINE[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    };


    showNumbers();

});


// ZERO

zero.addEventListener("click", ()=>{

    // Missing 3
    //9,8,2,4,6,1,5,7,0
    
    countZERO++; 

    if(countZERO === 1){
     
        displayArray.push(number9);
        sortedArray.push(number9);

	if(display[0] || [1] || [2] || [3] || [4] || [5] || [6] || [7] || [8] || [9] === number9[0]){
		const one = n => n == number9[0];
                const found = sortedArray.findIndex(one); 
		
		keyZERO.push(found);

        if(keyColours[0] === 'On'){
            colourKeys();
        };

	}

        
    } else if(countZERO=== 2){

	    displayArray.splice(keyZERO[0],1,number8); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
        
    }else if(countZERO === 3){
	    displayArray.splice(keyZERO[0],1,number2); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
       
    }else if(countZERO === 4){

        displayArray.splice(keyZERO[0],1,number4); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countZERO === 5){

        displayArray.splice(keyZERO[0],1,number6); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countZERO === 6){

        displayArray.splice(keyZERO[0],1,number1); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countZERO === 7){

        displayArray.splice(keyZERO[0],1,number5); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countZERO === 8){

        displayArray.splice(keyZERO[0],1,number7); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    }else if(countZERO === 9){

        displayArray.splice(keyZERO[0],1,number0); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };

    } else {
        countZERO = 1;
        displayArray.splice(keyZERO[0],1,number9); 

        if(keyColours[0] === 'On'){
            colourKeys();
        };
    };


    showNumbers();

});






function showNumbers(){

    display.innerHTML = displayArray.join('');

    if(displayArray === winningNumbers.join(''))[
        alert("WINNER!")
        
    ];


};


//Check Button

checkButton.addEventListener('click', ()=>{

    checkButtonCount++;

    console.log(checkButtonCount);

    if(display.innerHTML === winningNumbers.join('')){
    
        display.innerHTML = winningNumbers.join('');

        if(checkButtonCount === 1){
            alert("WINNER!");

            setTimeout(function(){
            checkButton.innerHTML = "Clear";

            }, 1000);

        }else if(checkButtonCount === 2){
            display.innerHTML = "";
            displayArray = [];
            sortedArray = [];

            setTimeout(function(){
            checkButton.innerHTML = "Check";
            }, 1000);

            checkButtonCount = 0;
        };
    

        } else{
            alert("Sorry please try again.");

            checkButtonCount = 0;
            
        };



});



// HINTS

let lightBulbCount = 0;
let divideButtonCount = 0;
let multiplyButtonCount = 0;
let addButtonCount = 0;
let subtractButtonCount = 0;
const addButton = document.querySelector(".addition");
const subtractButton = document.querySelector(".subtraction");
const multiplyButton  = document.querySelector(".multiplication");
const divideButton  = document.querySelector(".division");
const hintsArray = [];


function hints(){

const lightBulb = document.querySelector('#light-bulb');
let lightBulbNumber = document.querySelector('#light-bulb span');

    setTimeout(function(){

        lightBulb.classList.add('light-bulb-colour');
        lightBulbNumber.innerHTML = 1;

        lightBulbNumber.classList.add('light-bulb-number');

        const hint = document.querySelector('.light-bulb-colour');

        

            lightBulb.addEventListener('click', ()=>{

                if(hint.style.color = "orange" && lightBulbCount === 0){


                  lightBulbCount = 1;
		          subtractButtonCount = lightBulbCount;
			
		            let hintONE = "What happens when you click a number more than once?";
                    
                    const clueONE = document.querySelector("#clues");
                    clueONE.innerHTML = hintONE;
		    
                    hintsArray.push(hintONE);
                    clueONE.classList.add("view-clues");
                    



                    setTimeout(function(){
                        clueONE.innerHTML = "";
                        lightBulb.classList.remove("light-bulb-colour");
                        lightBulbNumber.classList.remove("light-bulb-number");
                        lightBulbNumber.innerHTML = "";
			            clueONE.classList.remove("view-clues");

                        setTimeout(function(){
                            lightBulb.classList.add('light-bulb-colour');
                            lightBulbNumber.innerHTML = 2;
                            lightBulbNumber.classList.add('light-bulb-number');
                        },60000);



                    }, 6000);


                }else if(lightBulbNumber.innerHTML === "2"){

                            lightBulbCount = 2;
                            subtractButtonCount = lightBulbCount;

                            let hintTWO = "Is something missing when I click a numeber?.";
                        
                            const clueONE = document.querySelector("#clues");
                            clueONE.innerHTML = hintTWO;

                            hintsArray.push(hintTWO);
                            clueONE.classList.add("view-clues");


                        setTimeout(function(){
                            clueONE.innerHTML = "";
                            lightBulb.classList.remove("light-bulb-colour");
                            lightBulbNumber.classList.remove("light-bulb-number");
                            lightBulbNumber.innerHTML = "";
			                clueONE.classList.remove("view-clues");
                        }, 6000);


                        setTimeout(function(){
                            lightBulb.classList.add('light-bulb-colour');
                            lightBulbNumber.innerHTML = 3;
                            lightBulbNumber.classList.add('light-bulb-number');
                        },60000);

                        
                    
                }else if(lightBulbNumber.innerHTML === "3"){

                       lightBulbCount = 3;
		               subtractButtonCount = lightBulbCount;

		   	            let hintTHREE = "Can the division and multiplication buttons help?";

                        const clueONE = document.querySelector("#clues");
                        clueONE.innerHTML = hintTHREE;

                        hintsArray.push(hintTHREE);
                        clueONE.classList.add("view-clues");


                        setTimeout(function(){
                            clueONE.innerHTML = "";
                            lightBulb.classList.remove("light-bulb-colour");
                            lightBulbNumber.classList.remove("light-bulb-number");
                            lightBulbNumber.innerHTML = "";
			                clueONE.classList.remove("view-clues");
                        }, 6000);

                        setTimeout(function(){
                            lightBulb.classList.add('light-bulb-colour');
                            lightBulbNumber.innerHTML = 4;
                            lightBulbNumber.classList.add('light-bulb-number');
                        },60000);


                }else if(lightBulbNumber.innerHTML === "4"){

                        lightBulbCount = 4; 
                        subtractButtonCount = lightBulbCount;
			
  			            let hintFOUR = "What am I missing?";            

                        const clueONE = document.querySelector("#clues");
                        clueONE.innerHTML = hintFOUR;

                        hintsArray.push(hintFOUR);
                        clueONE.classList.add("view-clues");


                        setTimeout(function(){
                            clueONE.innerHTML = "";
                            lightBulb.classList.remove("light-bulb-colour");
                            lightBulbNumber.classList.remove("light-bulb-number");
                            lightBulbNumber.innerHTML = "";
			                clueONE.classList.remove("view-clues");
                        }, 6000);


                };

            });

        

    },60000);


};


hints();




   addButton.addEventListener('click', ()=>{

	const lastHintDisplay = document.querySelector("#clues, #add-minus-display");

    	const viewClues = document.querySelector("#clues");


       if(hintsArray[0]){

        	if(addButtonCount < hintsArray.length){
		  addButtonCount++;
		  subtractButtonCount = (addButtonCount -1);
		};

    
        const hintsForward = hintsArray[addButtonCount - 1];

        lastHintDisplay.innerHTML = hintsForward;

        viewClues.classList.add("clue-bg");
        const closeCluesBg = document.querySelector("#close-clues")
        const closeClues = document.querySelector("#close-clues span");

        closeClues.innerHTML = "x";
        closeCluesBg.style.backgroundColor ='#fff';

        closeClues.addEventListener('click', ()=>{
        lastHintDisplay.innerHTML = "";
        viewClues.classList.remove("clue-bg");
        closeClues.innerHTML = "";
        closeCluesBg.style.backgroundColor ='';
});


      }else{
	
	    lastHintDisplay.innerHTML = "";
			
      }
   });


  subtractButton.addEventListener('click', ()=>{

    // let hintsPrevious
	
	const previousHintDisplay = document.querySelector("#clues, #add-minus-display");

    const viewClues = document.querySelector("#clues");


       if(hintsArray[1]){

       	  if(subtractButtonCount > 0){
	 	subtractButtonCount--
		addButtonCount = (subtractButtonCount +1);
	  };

        

        const hintsPrevious = hintsArray[subtractButtonCount];

        previousHintDisplay.innerHTML = hintsPrevious;

        viewClues.classList.add("clue-bg");
        const closeCluesBg = document.querySelector("#close-clues")
        const closeClues = document.querySelector("#close-clues span");

        closeClues.innerHTML = "x";
        closeCluesBg.style.backgroundColor ='#fff';	

         closeClues.addEventListener('click', ()=>{
         previousHintDisplay.innerHTML = "";
         viewClues.classList.remove("clue-bg");
         closeClues.innerHTML = "";
	     closeCluesBg.style.backgroundColor ='';

         });


        
	}else{

        previousHintDisplay.innerHTML = "";
	
	}
   });



  multiplyButton.addEventListener('click', ()=>{

	const sequences = document.querySelector("#sequences-display");
	multiplyButtonCount++;

     if(hintsArray[2] && multiplyButtonCount === 1){
 
	sequences.classList.add("sequences-display-Show");
	sequences.innerHTML = 
	
	`
	<span>1: 2 4 9 1 8 3 6 0 5</span><br>
	<span>2: 6 9 3 0 2 4 8 1 7</span><br>
	<span>3: 8 5 6 4 7 3 0 1 9</span><br>
	<span>4: 3 5 1 0 4 8 2 6 7</span><br>
	<span>5: 4 0 9 2 6 8 5 3 7</span><br>
	<span>6: 7 6 9 1 8 0 2 3 5</span><br>
	<span>7: 0 1 5 9 7 3 4 6 2</span><br>
	<span>8: 5 2 7 4 1 9 6 3 8</span><br>
	<span>9: 1 3 4 8 9 7 2 0 5</span><br>
	<span>0: 9 8 2 4 6 1 5 7 0</span>
	
	`
	sequences.style.backgroundColor = '#ffc96b';

        }else if(multiplyButtonCount === 2){

	  sequences.classList.remove("sequences-display-Show");
	  sequences.innerHTML = "";
	  multiplyButtonCount = 0;
	
	};
  });


  // Key Colours
  

  divideButton.addEventListener('click', ()=>{

    divideButtonCount++;
    
    console.log(divideButtonCount);

    if(divideButtonCount === 1){
        divideButton.style.backgroundColor = '#ffc96b';
        keyColours.push('On');

            if(keyColours[0] === 'Off'){
                keyColours.splice(0,1);
            };
        
    }else if(divideButtonCount === 2){
	
	divideButton.style.backgroundColor = '';
        divideButtonCount = 0;
        keyColours.splice(0,1,'Off');
	

	one.style.backgroundColor ='';
	two.style.backgroundColor ='';
	three.style.backgroundColor ='';
	four.style.backgroundColor ='';
	five.style.backgroundColor ='';
	six.style.backgroundColor ='';
	seven.style.backgroundColor ='';
	eight.style.backgroundColor ='';
	nine.style.backgroundColor ='';
	zero.style.backgroundColor ='';
    };

  });


// Colour Keys

  function colourKeys(){


    if(keyONE[0] === 1 && displayArray[1][0] === 5){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 2 && displayArray[2][0] === 2){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 3 && displayArray[3][0] === 9){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 4 && displayArray[4][0] === 1){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 5 && displayArray[5][0] === 4){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 6 && displayArray[6][0] === 8){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 7 && displayArray[7][0] === 0){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 8 && displayArray[8][0] === 6){
        one.style.backgroundColor = 'lightgreen';

    }else if(keyONE[0] === 9 && displayArray[9][0] === 3){
        one.style.backgroundColor = 'lightgreen';
    };






    if(keyTWO[0] === 0 && displayArray[0][0] === 7){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 2 && displayArray[2][0] === 2){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 3 && displayArray[3][0] === 9){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 4 && displayArray[4][0] === 1){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 5 && displayArray[5][0] === 4){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 6 && displayArray[6][0] === 8){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 7 && displayArray[7][0] === 0){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 8 && displayArray[8][0] === 6){
        two.style.backgroundColor = 'lightgreen';
    }else if(keyTWO[0] === 9 && displayArray[9][0] === 3){
        two.style.backgroundColor = 'lightgreen';
    };



    if(keyTHREE[0] === 0 && displayArray[0][0] === 7){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 1 && displayArray[1][0] === 5){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 3 && displayArray[3][0] === 9){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 4 && displayArray[4][0] === 1){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 5 && displayArray[5][0] === 4){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 6 && displayArray[6][0] === 8){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 7 && displayArray[7][0] === 0){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 8 && displayArray[8][0] === 6){
        three.style.backgroundColor = 'lightgreen';

    }else if(keyTHREE[0] === 9 && displayArray[9][0] === 3){
        three.style.backgroundColor = 'lightgreen';
    };



    if(keyFOUR[0] === 0 && displayArray[0][0] === 7){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 1 && displayArray[1][0] === 5){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 2 && displayArray[2][0] === 2){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 4 && displayArray[4][0] === 1){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 5 && displayArray[5][0] === 4){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 6 && displayArray[6][0] === 8){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 7 && displayArray[7][0] === 0){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 8 && displayArray[8][0] === 6){
        four.style.backgroundColor = 'lightgreen';

    }else if(keyFOUR[0] === 9 && displayArray[9][0] === 3){
        four.style.backgroundColor = 'lightgreen';
    };






    if(keyFIVE[0] === 0 && displayArray[0][0] === 7){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 1 && displayArray[1][0] === 5){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 2 && displayArray[2][0] === 2){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 3 && displayArray[3][0] === 9){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 5 && displayArray[5][0] === 4){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 6 && displayArray[6][0] === 8){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 7 && displayArray[7][0] === 0){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 8 && displayArray[8][0] === 6){
        five.style.backgroundColor = 'lightgreen';

    }else if(keyFIVE[0] === 9 && displayArray[9][0] === 3){
        five.style.backgroundColor = 'lightgreen';
    };





    if(keySIX[0] === 0 && displayArray[0][0] === 7){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 1 && displayArray[1][0] === 5){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 2 && displayArray[2][0] === 2){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 3 && displayArray[3][0] === 9){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 4 && displayArray[4][0] === 1){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 6 && displayArray[6][0] === 8){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 7 && displayArray[7][0] === 0){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 8 && displayArray[8][0] === 6){
        six.style.backgroundColor = 'lightgreen';

    }else if(keySIX[0] === 9 && displayArray[9][0] === 3){
        six.style.backgroundColor = 'lightgreen';
    };





    if(keySEVEN[0] === 0 && displayArray[0][0] === 7){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 1 && displayArray[1][0] === 5){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 2 && displayArray[2][0] === 2){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 3 && displayArray[3][0] === 9){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 4 && displayArray[4][0] === 1){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 5 && displayArray[5][0] === 4){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 7 && displayArray[7][0] === 0){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 8 && displayArray[8][0] === 6){
        seven.style.backgroundColor = 'lightgreen';

    }else if(keySEVEN[0] === 9 && displayArray[9][0] === 3){
        seven.style.backgroundColor = 'lightgreen';
    };







    if(keyEIGHT[0] === 0 && displayArray[0][0] === 7){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 1 && displayArray[1][0] === 5){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 2 && displayArray[2][0] === 2){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 3 && displayArray[3][0] === 9){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 4 && displayArray[4][0] === 1){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 5 && displayArray[5][0] === 4){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 6 && displayArray[6][0] === 8){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 8 && displayArray[8][0] === 6){
        eight.style.backgroundColor = 'lightgreen';

    }else if(keyEIGHT[0] === 9 && displayArray[9][0] === 3){
        eight.style.backgroundColor = 'lightgreen';
    };




    if(keyNINE[0] === 0 && displayArray[0][0] === 7){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 1 && displayArray[1][0] === 5){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 2 && displayArray[2][0] === 2){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 3 && displayArray[3][0] === 9){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 4 && displayArray[4][0] === 1){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 5 && displayArray[5][0] === 4){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 6 && displayArray[6][0] === 8){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 7 && displayArray[7][0] === 0){
        nine.style.backgroundColor = 'lightgreen';

    }else if(keyNINE[0] === 9 && displayArray[9][0] === 3){
        nine.style.backgroundColor = 'lightgreen';
    };





    if(keyZERO[0] === 0 && displayArray[0][0] === 7){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 1 && displayArray[1][0] === 5){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 2 && displayArray[2][0] === 2){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 3 && displayArray[3][0] === 9){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 4 && displayArray[4][0] === 1){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 5 && displayArray[5][0] === 4){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 6 && displayArray[6][0] === 8){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 7 && displayArray[7][0] === 0){
        zero.style.backgroundColor = 'lightgreen';

    }else if(keyZERO[0] === 8 && displayArray[8][0] === 6){
        zero.style.backgroundColor = 'lightgreen';
    };

    

    // COLOUR KEYS OFF


    if(keyONE[0] === 1 && displayArray[1][0] != 5){
        one.style.backgroundColor = '';

    }else if(keyONE[0] === 2 && displayArray[2][0] != 2){
        one.style.backgroundColor = '';

    }else if(keyONE[0] === 3 && displayArray[3][0] != 9){
        one.style.backgroundColor = '';

    }else if(keyONE[0] === 4 && displayArray[4][0] != 1){
        one.style.backgroundColor = '';
        
    }else if(keyONE[0] === 5 && displayArray[5][0] != 4){
        one.style.backgroundColor = '';
        
    }else if(keyONE[0] === 6 && displayArray[6][0] != 8){
        one.style.backgroundColor = '';
        
    }else if(keyONE[0] === 7 && displayArray[7][0] != 0){
        one.style.backgroundColor = '';
        
    }else if(keyONE[0] === 8 && displayArray[8][0] != 6){
        one.style.backgroundColor = '';
        
    }else if(keyONE[0] === 9 && displayArray[9][0] != 3){
        one.style.backgroundColor = '';
        
    };




    if(keyTWO[0] === 0 && displayArray[0][0] != 7){
        two.style.backgroundColor = '';

    }else if(keyTWO[0] === 2 && displayArray[2][0] != 2){
        two.style.backgroundColor = '';

    }else if(keyTWO[0] === 3 && displayArray[3][0] != 9){
        two.style.backgroundColor = '';

    }else if(keyTWO[0] === 4 && displayArray[4][0] != 1){
        two.style.backgroundColor = '';
        
    }else if(keyTWO[0] === 5 && displayArray[5][0] != 4){
        two.style.backgroundColor = '';
        
    }else if(keyTWO[0] === 6 && displayArray[6][0] != 8){
        two.style.backgroundColor = '';
        
    }else if(keyTWO[0] === 7 && displayArray[7][0] != 0){
        two.style.backgroundColor = '';
        
    }else if(keyTWO[0] === 8 && displayArray[8][0] != 6){
        two.style.backgroundColor = '';
        
    }else if(keyTWO[0] === 9 && displayArray[9][0] != 3){
        two.style.backgroundColor = '';
        
    };




    if(keyTHREE[0] === 0 && displayArray[0][0] != 7){
        three.style.backgroundColor = '';

    }else if(keyTHREE[0] === 1 && displayArray[1][0] != 5){
        three.style.backgroundColor = '';

    }else if(keyTHREE[0] === 3 && displayArray[3][0] != 9){
        three.style.backgroundColor = '';

    }else if(keyTHREE[0] === 4 && displayArray[4][0] != 1){
        three.style.backgroundColor = '';
        
    }else if(keyTHREE[0] === 5 && displayArray[5][0] != 4){
        three.style.backgroundColor = '';
        
    }else if(keyTHREE[0] === 6 && displayArray[6][0] != 8){
        three.style.backgroundColor = '';
        
    }else if(keyTHREE[0] === 7 && displayArray[7][0] != 0){
        three.style.backgroundColor = '';
        
    }else if(keyTHREE[0] === 8 && displayArray[8][0] != 6){
        three.style.backgroundColor = '';
        
    }else if(keyTHREE[0] === 9 && displayArray[9][0] != 3){
        three.style.backgroundColor = '';
        
    };






    if(keyFOUR[0] === 0 && displayArray[0][0] != 7){
        four.style.backgroundColor = '';

    }else if(keyFOUR[0] === 1 && displayArray[1][0] != 5){
        four.style.backgroundColor = '';

    }else if(keyFOUR[0] === 2 && displayArray[2][0] != 2){
        four.style.backgroundColor = '';

    }else if(keyFOUR[0] === 4 && displayArray[4][0] != 1){
        four.style.backgroundColor = '';
        
    }else if(keyFOUR[0] === 5 && displayArray[5][0] != 4){
        four.style.backgroundColor = '';
        
    }else if(keyFOUR[0] === 6 && displayArray[6][0] != 8){
        four.style.backgroundColor = '';
        
    }else if(keyFOUR[0] === 7 && displayArray[7][0] != 0){
        four.style.backgroundColor = '';
        
    }else if(keyFOUR[0] === 8 && displayArray[8][0] != 6){
        four.style.backgroundColor = '';
        
    }else if(keyFOUR[0] === 9 && displayArray[9][0] != 3){
        four.style.backgroundColor = '';
        
    };




    if(keyFIVE[0] === 0 && displayArray[0][0] != 7){
        five.style.backgroundColor = '';

    }else if(keyFIVE[0] === 1 && displayArray[1][0] != 5){
        five.style.backgroundColor = '';

    }else if(keyFIVE[0] === 2 && displayArray[2][0] != 2){
        five.style.backgroundColor = '';

    }else if(keyFIVE[0] === 3 && displayArray[3][0] != 9){
        five.style.backgroundColor = '';
        
    }else if(keyFIVE[0] === 5 && displayArray[5][0] != 4){
        five.style.backgroundColor = '';
        
    }else if(keyFIVE[0] === 6 && displayArray[6][0] != 8){
        five.style.backgroundColor = '';
        
    }else if(keyFIVE[0] === 7 && displayArray[7][0] != 0){
        five.style.backgroundColor = '';
        
    }else if(keyFIVE[0] === 8 && displayArray[8][0] != 6){
        five.style.backgroundColor = '';
        
    }else if(keyFIVE[0] === 9 && displayArray[9][0] != 3){
        five.style.backgroundColor = '';
        
    };




    if(keySIX[0] === 0 && displayArray[0][0] != 7){
        six.style.backgroundColor = '';

    }else if(keySIX[0] === 1 && displayArray[1][0] != 5){
        six.style.backgroundColor = '';

    }else if(keySIX[0] === 2 && displayArray[2][0] != 2){
        six.style.backgroundColor = '';

    }else if(keySIX[0] === 3 && displayArray[3][0] != 9){
        six.style.backgroundColor = '';
        
    }else if(keySIX[0] === 4 && displayArray[4][0] != 1){
        six.style.backgroundColor = '';
        
    }else if(keySIX[0] === 6 && displayArray[6][0] != 8){
        six.style.backgroundColor = '';
        
    }else if(keySIX[0] === 7 && displayArray[7][0] != 0){
        six.style.backgroundColor = '';
        
    }else if(keySIX[0] === 8 && displayArray[8][0] != 6){
        six.style.backgroundColor = '';
        
    }else if(keySIX[0] === 9 && displayArray[9][0] != 3){
        six.style.backgroundColor = '';
        
    };



    if(keySEVEN[0] === 0 && displayArray[0][0] != 7){
        seven.style.backgroundColor = '';

    }else if(keySEVEN[0] === 1 && displayArray[1][0] != 5){
        seven.style.backgroundColor = '';

    }else if(keySEVEN[0] === 2 && displayArray[2][0] != 2){
        seven.style.backgroundColor = '';

    }else if(keySEVEN[0] === 3 && displayArray[3][0] != 9){
        seven.style.backgroundColor = '';
        
    }else if(keySEVEN[0] === 4 && displayArray[4][0] != 1){
        seven.style.backgroundColor = '';
        
    }else if(keySEVEN[0] === 5 && displayArray[5][0] != 4){
        seven.style.backgroundColor = '';
        
    }else if(keySEVEN[0] === 7 && displayArray[7][0] != 0){
        seven.style.backgroundColor = '';
        
    }else if(keySEVEN[0] === 8 && displayArray[8][0] != 6){
        seven.style.backgroundColor = '';
        
    }else if(keySEVEN[0] === 9 && displayArray[9][0] != 3){
        seven.style.backgroundColor = '';
        
    };



    if(keyEIGHT[0] === 0 && displayArray[0][0] != 7){
        eight.style.backgroundColor = '';

    }else if(keyEIGHT[0] === 1 && displayArray[1][0] != 5){
        eight.style.backgroundColor = '';

    }else if(keyEIGHT[0] === 2 && displayArray[2][0] != 2){
        eight.style.backgroundColor = '';

    }else if(keyEIGHT[0] === 3 && displayArray[3][0] != 9){
        eight.style.backgroundColor = '';
        
    }else if(keyEIGHT[0] === 4 && displayArray[4][0] != 1){
        eight.style.backgroundColor = '';
        
    }else if(keyEIGHT[0] === 5 && displayArray[5][0] != 4){
        eight.style.backgroundColor = '';
        
    }else if(keyEIGHT[0] === 6 && displayArray[6][0] != 8){
        eight.style.backgroundColor = '';
        
    }else if(keyEIGHT[0] === 8 && displayArray[8][0] != 6){
        eight.style.backgroundColor = '';
        
    }else if(keyEIGHT[0] === 9 && displayArray[9][0] != 3){
        eight.style.backgroundColor = '';
        
    };




    if(keyNINE[0] === 0 && displayArray[0][0] != 7){
        nine.style.backgroundColor = '';

    }else if(keyNINE[0] === 1 && displayArray[1][0] != 5){
        nine.style.backgroundColor = '';

    }else if(keyNINE[0] === 2 && displayArray[2][0] != 2){
        nine.style.backgroundColor = '';

    }else if(keyNINE[0] === 3 && displayArray[3][0] != 9){
        nine.style.backgroundColor = '';
        
    }else if(keyNINE[0] === 4 && displayArray[4][0] != 1){
        nine.style.backgroundColor = '';
        
    }else if(keyNINE[0] === 5 && displayArray[5][0] != 4){
        nine.style.backgroundColor = '';
        
    }else if(keyNINE[0] === 6 && displayArray[6][0] != 8){
        nine.style.backgroundColor = '';
        
    }else if(keyNINE[0] === 7 && displayArray[7][0] != 0){
        nine.style.backgroundColor = '';
        
    }else if(keyNINE[0] === 9 && displayArray[9][0] != 3){
        nine.style.backgroundColor = '';
        
    };




    if(keyZERO[0] === 0 && displayArray[0][0] != 7){
        zero.style.backgroundColor = '';

    }else if(keyZERO[0] === 1 && displayArray[1][0] != 5){
        zero.style.backgroundColor = '';

    }else if(keyZERO[0] === 2 && displayArray[2][0] != 2){
        zero.style.backgroundColor = '';

    }else if(keyZERO[0] === 3 && displayArray[3][0] != 9){
        zero.style.backgroundColor = '';
        
    }else if(keyZERO[0] === 4 && displayArray[4][0] != 1){
        zero.style.backgroundColor = '';
        
    }else if(keyZERO[0] === 5 && displayArray[5][0] != 4){
        zero.style.backgroundColor = '';
        
    }else if(keyZERO[0] === 6 && displayArray[6][0] != 8){
        zero.style.backgroundColor = '';
        
    }else if(keyZERO[0] === 7 && displayArray[7][0] != 0){
        zero.style.backgroundColor = '';
        
    }else if(keyZERO[0] === 8 && displayArray[8][0] != 6){
        zero.style.backgroundColor = '';
        
    };


  };


  const clearButton = document.querySelector("#clear");

  clearButton.addEventListener('click', ()=>{
	displayArray = [];
	sortedArray = [];

	arrayONE = [];
 	arrayTWO = [];

	keyONE = []; 
 	keyTWO = [];
 	keyTHREE = [];
 	keyFOUR = [];
 	keyFIVE = [];
 	keySIX = [];
 	keySEVEN = [];
 	keyEIGHT = [];
 	keyNINE = [];
 	keyZERO = [];

 	keyColours = [];

 	countONE = 0; 
 	countTWO = 0;
 	countTHREE = 0;
 	countFOUR = 0;
 	countFIVE = 0;
 	countSIX = 0;
 	countSEVEN = 0;
 	countEIGHT = 0;
 	countNINE = 0;
 	countZERO = 0;
 	checkButtonCount = 0;


	display.innerHTML = "";

	one.style.backgroundColor ='';
	two.style.backgroundColor ='';
	three.style.backgroundColor ='';
	four.style.backgroundColor ='';
	five.style.backgroundColor ='';
	six.style.backgroundColor ='';
	seven.style.backgroundColor ='';
	eight.style.backgroundColor ='';
	nine.style.backgroundColor ='';
	zero.style.backgroundColor ='';

	divideButton.style.backgroundColor = ''

	const sequences = document.querySelector("#sequences-display");

	sequences.classList.remove("sequences-display-Show");
	sequences.innerHTML = "";
	multiplyButtonCount = 0;

 });





  //const winningNumbers = [7,5,2,9,1,4,8,0,6,3]; Misssing numbers in order of keys 1 to 0 

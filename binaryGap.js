/*
solution to return the binary gap, longest 0 streak between ones in a binary
*/
const getBinaryGap = (num = '') => {

    let counter = 0;    
    let numLength = num.length;
    let bGap = 0;
    let current;
    let prev;

    for(i=0; i<numLength; i++){
        current = num.charAt(i);
        prev = num.charAt(i-1);

        if( counter===0 && current == 0 && prev == 1 ){
            counter++;
            continue;
        }

        if(counter === 0 && current == 0){
            continue;
        }
        if(counter > 0 && current == 0){
            counter++;
            continue;
        }

        if(counter > 0 && current == 1){           
            bGap = bGap < counter ? counter : bGap;            
            counter = 0;            
        }
    }  
    
    console.log(bGap);
}

getBinaryGap('0101');


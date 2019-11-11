let A = [9,3,9,3,2,7,9,7];
let Alength = A.length;
let result = '';
let step = 0;

for( i = 0; i < Alength; i++){
    if(A[i] === A[i+2]){
        step++;
        if(step === 2){
            i = i+2;
        }
        continue;
    }else{
        result = A[i];
        break;
    }
}

console.log(result);
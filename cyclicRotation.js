//missed boundary conditions - empty array - K=array length || multiple of K

A = [3, 8, 9, 7, 6];
K = 3;

for(i=0; i<K; i++){
    rightMost = A.pop();
    A.unshift(rightMost);
}

console.log(A);

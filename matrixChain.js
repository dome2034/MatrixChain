function matrixChain() {
    this.findMatrix = function(d){
        let n = d.length-1; // number of matrices
        let N = []; // n-by-n matrix; 
        for(let i=0;i<=n;i++){
            N[i]=[];
            for(let j=0;j<=n;j++){
                N[i][j]=0;
            }
        } //initially zeros

         for (let b=1; b < n; b++){ // number of products in subchain
            for (let i=0; i < n- b; i++) { // start of subchain
                let j = i + b; // end of subchain
                N[i][j] = 99999999999;
                for (let k=i; k < j; k++){
                    console.log("------------- before --------------------------------------");
                    console.log("N["+i+"]["+j+"]= min(N["+i+"]["+j+"]=" +N[i][j]+", N["+i+"]["+k+"]=" +N[i][k]+"+N["+(k+1)+"]["+j+"]=" +N[k+1][j]+"+"+"(d["+i+"]*d["+(k+1)+"]*d["+(j+1)+"])="+(d[i]*d[k+1]*d[j+1])+")");
                    N[i][j] = Math.min(N[i][j], N[i][k] + N[k+1][j] + d[i]*d[k+1]*d[j+1]);
                    console.log("------------- after --------------------------------------");
                    console.log("N["+i+"]["+j+"]= min(N["+i+"]["+j+"]=" +N[i][j]+", N["+i+"]["+k+"]=" +N[i][k]+"+N["+(k+1)+"]["+j+"]=" +N[k+1][j]+"+"+"(d["+i+"]*d["+(k+1)+"]*d["+(j+1)+"])="+(d[i]*d[k+1]*d[j+1])+")");
                    console.log("-----------------------------------------------------------");
                }
            }
        }
         return N;
        
    };
};

module.exports = matrixChain; 
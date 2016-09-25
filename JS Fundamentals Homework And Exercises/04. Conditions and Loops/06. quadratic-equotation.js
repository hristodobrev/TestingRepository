function quadraticEquotation([a, b, c]) {
     [a,b,c] = [a,b,c].map(Number);
     let descriminant = b * b - 4 * a * c;
     if (descriminant < 0) {
         return 'No';
     } else if (descriminant == 0) {
         let x = -b / 2 * a;
         return x;
     } else {
         let x1 = -b - Math.sqrt(descriminant) / 2 * a;
         let x2 = -b + Math.sqrt(descriminant) / 2 * a;
         return `${x1}\n${x2}`;
     }
}
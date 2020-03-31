var rect = {
    perimeter: (x,y) => (2*(x+y)), 
    area: (x,y) =>  (x*y)
};
    
function solveRect(l,w) {
    console.log("Solving for rectangle with i = " + l + " and w = " + w);
    
    if (l <= 0 || w <= 0) {
        console.log("");
    } 
    else {
        console.log("The area of the rectangle is " + rect.area(l,w));
        console.log("The perimeter of the rectangle is " + rect.perimeter(l,w));
    }
};    

solveRect(2,4);
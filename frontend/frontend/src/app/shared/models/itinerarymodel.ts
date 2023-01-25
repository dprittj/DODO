
//Should this be a class or interface?

let placeIdArray: number[];
let thisDoDoArray:number [];
let startingPoint: number;
let endPoint: number;


//takes in saved Number of Items value as argument, returns a number representing the starting index value for dodoPopulation (the function to populate the dodo itinerary!) 
function populateDodos(any){
    
    placeIdArray.push(
        //place_ids
    )
}


//from 12.6.1 in unit 1; 
//.floor rounds down to nearest decimal, while .random returns random value between 0, 1 (excluding 1); 
//thus, random decimal times the array length, rounded down
function pickDodoStart(x: number): number {

    startingPoint = Math.floor(Math.random()*placeIdArray.length)

    return startingPoint;
}

endPoint = (startingPoint + variable//reference variable with saved user-selected number of dodos to populate// 
);

//.slice creates a new array of selected entries, here: frome the randomly generated startingPoint to the endPoint.
thisDoDoArray = placeIdArray.slice(startingPoint, endpoint);

//push thisDoDoArray values to view generation
const firstName = "Adebambo";
const lastName = "Omolola";
const school = "GoMyCode";
const course = "Software Develop";
const job = "Developer";
const salary = 800000000;

const sentence = `My name is ${firstName} ${lastName}. I am a student of ${school}. I currrently studying ${course} to become a ${job} and earn over ${salary}`

console.log(sentence);


//ternary operator
let age = 23;
age >= 18 ? console.log("eligible to vote") : console.log("not eligible to vote");

let customer = "student"
customer === "student"? console.log("you get a discount") : console.log("you are too old for that");




//chained ternary operator
let client = "tailor"
client === "doctor"? console.log("medical service"):
client === "police"? console.log("security services"):
client === "artiste"? console.log("entertainment"):
client === "footballer"? console.log("sports"):
console.log("job not listed");


const area = (length)=> {
    return length * length

}
console.log(area(30));


const areaOfRectangle = (l,b)=> {
    let a= l * b;
    return a
}

console.log(areaOfRectangle(30,40));


const inec = (age)=>{
    age>= 18? console.log("eligible to vote"):
    console.log("not eligible to vote");
}

inec(19)


const minimumWage =(job)=> {
    job === "presido"? console.log("10m"):
    job === "doctor"? console.log("500k"):
    job === "customs"? console.log("275k"):
    job === "stripper"? console.log("5m"):
    job === "baller"? console.log("20m"):
    console.log("33k");
}

minimumWage("mechanic")



///destructuring...
const numbers = [1,2,3,4,5,6,7,8,9];
const[ , , Francis, kenny, ...rest]=numbers
console.log(rest);



///spread operator...
const cm =[1,2,3,4,5];
const bambo =[6,7,8,9,10];
const jt =[...cm, ...bambo];
console.log(jt);


function decodeColor( code ) {
    if ( code === 1 ) {
        console.log( 'Red' );
    } else if ( code === 2 ) {
        console.log( 'Yellow' );
    } else if ( code === 3 ) {
        console.log( 'Green' );
    } else {
        console.log( 'Unknown code' );
    }
}


var a= 3

switch (a) {
	case 4:
		alert( 'Exactly!' );
		break;
	default:
		alert( "I don't know such values" );
		break;
	case 3:
		alert( 'Too small' );
		break;  
	case 5:
		alert( 'Too large' );
		break; 
}


var i = 0;
while (i < 5) loop {
  console.log(i)
}
i++
/* 
question 1 
Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
Handle of author
content, 
An image link posted by the author of the post
Number of views
Number of likes
 */
function InstagramPost(handleOfAuthor, content, imageLink, numberOfViews, numberOfLikes){
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}
/*
Question 2 
Create 2 Instagram post objects from the constructor function you created above
*/

const instagramPost1 = new InstagramPost("magdalene", "Cute Faces", "https://cutefaces.com/jpg", 3045, 2456);
const instagramPost2 = new InstagramPost("david", "New Collection", "https://newcollection.com/jpg", 5005, 1471);
console.log(instagramPost1);
console.log(instagramPost2);

/*
Question 3
Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
ENG - 70
GOVT - 85
LIT - 82
CRK - 94
a)Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
*/
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}
const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos Nigeria');
console.log(musa);

//Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
function createJambScore(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}
const musaJambScore = createJambScore (70, 85, 82, 94);
//adding musa jamb score to musa object created in 3a) using the object.assign()
Object.assign ( musa, musaJambScore);
console.log(musa);

/*Question 4
//What are the different ways you can clone an object? Give examples for each of them.
*/
//Using the spread operator ...
const mainObj1 = { a: 'boy', b: 'girl' };
const clonedObj1 = { ...mainObj1 };
console.log(clonedObj1); // { a: boy, b: girl}

//Using Object.assign()
const mainObj2 = { a: 'boy', b: 'girl' };
const clonedObj2 = Object.assign({}, mainObj2);
console.log(clonedObj2); // { a: boy, b: girl }

//Using JSON.stringify() and JSON.parse()
const mainObj3 = { a: 'boy', b: 'girl' };
const clonedObj3 = JSON.parse(JSON.stringify(mainObj3));
console.log(clonedObj3); // { a: boy, b: girl }

//Using the Object.create() method
const mainObj4 = { a: 'boy', b: 'girl' };
const clonedObj4 = Object.create(Object.getPrototypeOf(mainObj4), Object.getOwnPropertyDescriptors(mainObj4));
console.log(clonedObj4); // { a: boy, b: girl }

//Using a custom clone method
function cloneObject5(obj5) {
    let clonedObj5  = {};
    for (let prop in obj5) {
      if (obj5.hasOwnProperty(prop)) {
        clonedObj5[prop] = obj5[prop];
      }
    }
    return clonedObj5;
  }
  
  const mainObj5 = { a: 'boy', b: 'girl' };
  const clonedObj5 = cloneObject5(mainObj5);
  console.log(clonedObj5); // { a: boy, b: girl }

  /* Question 5
  As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
  */
const presidentialCandidates = {
   AAC: 'Omoyele Sowore',
   ACCORD: 'Christopher Imumolen',
   APC: 'Bola Ahmed Tinubu',
   LP: 'Peter Obi',
   NNPP: 'Rabiu Kwankwaso',
   PDP: 'Atiku Abubakar',
}
/*Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	’Omoyele Sowore is the presidential candidate of AAC’
*/
//using for.. in loops
for ( let party in presidentialCandidates) {
    console.log (`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
}
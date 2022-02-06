//createTitle
//First, I made a createTitle function, I left it empty to start
//Then, I wanted to take in the parameter of 'title' - a string - so that I
//had something to edit
//I used interpolation to add the word'The' to the beginning of
//any title entered into the function as an argument
//I used the key word return, so the function will end once this new title
//is printed
function createTitle(title) {
  return `The ${title}`;
};

//buildMainCharacter
//First, I made an empty buildMainCharacter function
//Line 41 of the test document tells me that this function should create a
//character object, so I've added a return character = {} empty object
//Lines 42 & 43 of the test document, show me that I will need three parameters
//for this function
//I titled these 'name', 'age', and 'pronouns', but in retrospect, I would have
//titled them characterName, etc. for more clarity
//Lines 45-47 and 49-51 show me that my character object will need to have at least
//three key value pairs, accessed by the keys name, age, and pronouns
//So, within my character object, I created these three keys
//I set the value of each key equal to the parameter that it's associated with
function buildMainCharacter(name, age, pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

//saveReview
//This one took some time, and I tried a few different things before getting it
//I started with an empty saveReview function, with the end goal being to take in the
//existing reviews array and a newReview to add to this array
//Line 63 of the test document confirms these parameters - the new review should
//be first and will be a string, and the review arrays will be second
//I added these parameters to my function

//My original code did not have any 'for' statement, as I was just adding reviews,
//not checking to see if they were repetitive
//So my origianl function:
// function saveReview(newReview, reviews) {
//   return reviews.push(newReview)
// }
//I'll have to edit it below to check for repetitive reviews

//When to use < vs <= - I'm a little hazy on the difference
//I originally tried to do this as a !==, with no luck
//At end of project, try to work through this again?
function saveReview(newReview, reviews) {
  for (var i = 0; i <= reviews.length; i++) {
    if (reviews[i] === newReview) {
      return reviews;
    } else {
      return reviews.push(newReview);
    }
  }
};

//calculatePageCount
//First, I made an empty function just called calculatePageCount
//Then, I new that I would need to take in the bootTitle argument
//so that I have something to count the letters in
//Lines 98 and 105 of the test document show me that this should be my only parameter
//To do this, I made a new variable setting bookPageCount equal to the length of the bookTitle
//(number of characters in the title) multiplied by 20
//I then returned the page count
//I'm going to try to refactor this function below my orginial to return a
//value without first declaring a variable

// function calculatePageCount(bookTitle) {
//   var bookPageCount = (bookTitle.length * 20);
//   return bookPageCount;
// };

function calculatePageCount(bookTitle) {
  return (bookTitle.length * 20);
};
//Sweet! This new function still works, just does it in a simpler way!

//writeBook
//As with the other functions so far, I started by just opening up an empty
//writeBook function and testing that
//Then, I looked at the test document line 119 to see what parameters my
//function will need to take in (bookTitle, bookCharacter, and a string that equals the genre)
//Lines 121-124 of the test document show my that to pass this test, the function will need
//to return correct values for four different key/value pairs in a book object
//These pairs: (title, mainCharacter, pageCount, and genre)

//After determining this, I made a book object, and opened it up giving it these keys
//Now, I keep referencing the test document to see what my values should be
//title = bookTitle as defined on test document line 117
//mainCharacter = bookCharacter as defined on test document line 118
//pageCount = the calculatePageCount function that I defined earlier in my code
//genre = the genre string passed into the function as an argument

//Originally, I used var bookObject = {}, then returned bookObject at the end
//of my function
//I changed this as I refactored to just return bookObject from the start,
//getting rid of the var keyword
function writeBook(bookTitle, bookCharacter, genre) {
  return bookObject = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
};

//editBook
//First, I returned an empty editBook function

//Line 151 of the test document lets me know that my function should have one parameter
//equal to the book that the function is taking in
//Then I need to reassign the book.pageCount key to equal three quarters of itself
//I did this with book.pageCount = book.pageCount*0.75

//I had some trouble getting this one to pass, and my mentor gave me a great tip
//For example: this is what I was trying to pas before:
// function editBook(book) {
//   return ((book.pageCount)*0.75);
// };

//He gave me the hint that I am not actually returning anything from this function,
//I am just trying to reassign or edit an existing value
//When the test document tests to see if my function is corect, they are
//doing so on line 153 - checking to see if the pageCount key of my book has been edited

function editBook(book) {
  book.pageCount = book.pageCount*0.75;
};


//In general, I feel okay about this book.js section
//It got a lot easier when I did two things
  //1. Figured out what the test document was exactly asking for and testing
  //as well as learned how to read the test a bit better.
  //I still need a lot of practice deciphering the tests though!

  //2. I explicitly typed out what logic I was trying to accomplish in simple language
  //before trying to figure out how to write this logic as code.

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

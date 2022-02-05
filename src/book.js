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

//My original code did not have any for statement, as I was just adding reviews,
//not checking to see if they were repetitive
//So:
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


function calculatePageCount(bookTitle) {
  var bookPageCount = (bookTitle.length * 20);
  return bookPageCount;
};

// // function writeBook() {
//   return book = {
//
//   }
// // }

//can write var book = {object}, but more concise to jsut write return
function writeBook(bookTitle, bookCharacter, genre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  }
};

//Edit book

// function editBook(book) {
//   return ((book.pageCount)*0.75);
// };

function editBook(book) {
  book.pageCount = book.pageCount*0.75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}

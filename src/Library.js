//createLibrary
//First! I read through the test trying to get more information about what it was
//asking for
  //I will need a function called createLibrary
  //Line 18 of my test doc tells me that this function will have one parameter
  //and this parameter will be equal to a string
  //Again, according to line 18, it will be testing this by seeing if a library
  //object inside of the createLibrary function has a name key equal to the argument
  //passed into the function
  //I know that it's an object because of the dot notation

//At this point, my function just looked like this:
// function createLibrary(libraryName) {
//   var library = {
//     name: libraryName,
//   }
//  return library;
// };
//My object is just names library

//The next test says that my library object should have shelves
//What else does the test say?
  //Line 30 of the test shows me that shelves will be another key inside of my
  //library object (dot notation!)
  //I added shelves, but I also made it an object because I will need to store other
  //key/value pairs inside of it (specifically, the different genres will be different keys)
  //I added these different shelves based on lines 36-38 of the test doc because
  //that looks like how it will test if my next part of the function is correct
  //At the moment, I have each shelf key set to an empty array because lines 36-38
  //tell me that this is what it should return
function createLibrary(libraryName) {
  var library = {
      name: libraryName,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: [],
      },
  };
  return library;
};

//addBook
//I got a little overwhelmed on this one and tried a few different things
//Starting at the beginnning, let's see what information the test doc is giving me
  //Ulitmately, I need to add a book object to a library
  //This gets more complicated, because I need to add each object to the correct
  //shelf based on its genre
  //On line 52 of the test doc, I see that my addBook function will have two parameters,
  //or take in two arguments
  //The first will be the library object created by the createLibrary function
  //The second will be a book object
  //I know what information is associated with each book object because of lines
  //45-50 of the test doc
  //When they test to see if my code works, they will be searching my library's
  //fantasy shelf contents, to see if the first element in the fantasy shelf array
  //is the book object that I entered as an argument of my function

//My logic:
  //I need to run through the genre of the book object entered as an argument and
  //put this book on the correct shelf

//To start, I first did this by making a big if statement that will manually compare
//each book object's genre to the three shelves that I have at the moment
//I wanted to see if my logic would work, but I know that this is not great code
//because it is not dynamic and will not work as I add shelves

// function addBook(library, book) {
//   if (book.genre === 'fantasy') {
//     library.shelves.fantasy.push(book);
//   } else if (book.genre === 'fiction'){
//     library.shelves.fiction.push(book);
//   } else {
//     library.shelves.nonFiction.push(book);
//   }
// };

//Would directly add 'Dracula' to the fantasy shelf
// console.log(library.shelves.fantasy.push(book));

// Now that I know that this works above, how can I make it dynamic?
// Ultimately, if the book.genre is the same as the library.shelves, then I want
//to push that book object to that shelf
//I read MDN's property accessors/bracket notation page
//'The key in an object functions as as string'
//Can I do this:
  //I'm accessing the library's shelves key with dot notation
  //Then, I'm accessing the specific genre array with bracket notation
  //The [book.genre] says that if my book object's genre is equal to the
  //specific shelf name, then push that book into the shelves array
  //No need for a for loop or iterations because it's telling the computer to
  //push to a specific shelf already
function addBook(library, book) {
    library.shelves[book.genre].push(book);
};

//Played around with using an if statement, before a hint from Eli told me that
//I could just add it using this notation, I don't need to check externally
// function addBook(library, book) {
//   if (book.genre === library.shelves[book.genre]) {
//     library.shelves[book.genre].push(book);
//   }
// };

//Another way that I tried before getting a solution
// function addBook(library, book) {
//   var bookGenre = book.genre;
//   if(book.genre === libary.shelves)
//     library.shelves[bookGenre].push(book);
// }

//checkoutBook
function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === book) {
    library.shelves[genre].splice(i, 1);
    return `You have now checked out ${book} from the ${library.name}`;
  }
 }
 return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
}


//Ohter code blocks I tried with no luck
//Could any of these be refactored to actually work?

// function checkoutBook(library, book, genre) {
//   if (book != library.shelves[genre][0].title) {
//     return`Sorry, there are currently no copies of ${book} available at the ${library.name}`;
//   } else if (book === library.shelves[genre][0].title) {
//     library.shelves[genre].splice(0, 1);
//     return `You have now checked out ${book} from the ${library.name}`;
//   }
// }

// function checkoutBook(library, book, genre) {
//   if (book === book.title && genre === 'fantasy') {
//     library.shelves.fantasy.splice(0, 1);
//   } else if (book === book.title && genre === 'fiction') {
//     library.shelves.fiction.splice(0, 1);
//   } else {
//     library.shelves.nonFiction.splice(0, 1);
//   }
//     console.log(`You have now checked out ${book} from the ${library}`);
// };

//Works for only one at a time, have not added a loop yet
//Would also only work when there is only one element in each genre array at a time
// function checkoutBook(library, book, genre) {
//   if (book === library.shelves[genre][0].title) {
//     library.shelves[genre].splice(0, 1);
//     return `You have now checked out ${book} from the ${library.name}`;
//   } else {
//     return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
//   }
// };


//library.shelves[genre]
//because shelves is an object, you can use bracket
//notation to access the key directly

module.exports = {
createLibrary,
addBook,
checkoutBook
};

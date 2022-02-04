function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

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

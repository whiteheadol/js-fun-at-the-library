//createLibrary
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
// function addBook(library, book) {
//   library.shelves.fantasy.push(book);
// };

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    library.shelves.fantasy.push(book);
  } else if (book.genre === 'fiction'){
    library.shelves.fiction.push(book);
  } else {
    library.shelves.nonFiction.push(book);
  }
};

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

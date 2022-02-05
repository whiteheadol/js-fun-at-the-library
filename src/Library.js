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

//This passes the first check in this section, but does not pass the second
// function checkoutBook(library, book, genre) {
//   console.log(library.shelves);
//   if (book === library.shelves[genre][0].title) {
//     library.shelves[genre].splice(0, 1);
//     return `You have now checked out ${book} from the ${library.name}`;
//   } else {
//     return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
//   }
// };

// function checkoutBook(library, book, genre) {
//   console.log(library.shelves);
//   if (book === library.shelves[genre][0].title) {
//     library.shelves[genre].splice(0, 1);
//     return `You have now checked out ${book} from the ${library.name}`;
//   } else {
//     return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
//   }
// };

function checkoutBook(library, book, genre) {
  console.log(library.shelves);
  if (book != library.shelves[genre][0].title) {
    return`Sorry, there are currently no copies of ${book} available at the ${library.name}`;
  } else if (book === library.shelves[genre][0].title) {
    return `You have now checked out ${book} from the ${library.name}`;
  }
}


//library.shelves[genre]
//because shelves is an object, you can use bracket
//notation to access the key directly

module.exports = {
createLibrary,
addBook,
checkoutBook
};

//Shelf book
// var sciFiShelf = [];
//Originally had the sciFiShelf array declared as well,
//didn't need it though?
function shelfBook(book, sciFiShelf) {
    if (book.genre === 'sciFi' && (sciFiShelf.length < 3)) {
      sciFiShelf.unshift(book);
    }
  };

//unshelfBook
function unshelfBook(bookTitle, sciFiShelf) {
    for (var i = 0; i < sciFiShelf.length; i++) {
      if (bookTitle === sciFiShelf[i].title) {
        sciFiShelf.splice(i, 1);
      }
    }
  };

//listTitles
// function listTitles(fantasyShelf) {
//   for (var i = 0; i < fantasyShelf.length; i++) {
//     console.log(fantasyShelf[i].title);
//   }
// };
function listTitles(fantasyShelf) {
  var titles = [];
  for (var i = 0; i < fantasyShelf.length; i++) {
    titles.push(fantasyShelf[i].title);
  }
  return titles.join(", ");
};

//searchShelf
function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      return true;
    }
  }
  return false;
};

// var bookShelf = [book.genre + 'Shelf'];


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

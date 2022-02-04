//Shelf book

// var sciFiShelf = [];
//Originally had the sciFiShelf array declared as well,
//didn't need it though?
function shelfBook(book, sciFiShelf) {
    if (book.genre === 'sciFi' && (sciFiShelf.length < 3)) {
      sciFiShelf.unshift(book);
    }
  };


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};

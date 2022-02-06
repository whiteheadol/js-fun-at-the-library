//shelfBook
//First, I made an empty shelfBook function
//Then, I tried to figure out exactly what was being asked:
  //I am adding books to a shelf
  //To do this, the shelfBook function will have two parameters (shown on test document
  //lines 31 and 32)
  //It's taking in a book object and a shelf name as an array
  //I know that the book is an object because it's defined right above than (lines 17 & 23)
  //I know that the sciFiShelf is an array because it's defined on line 29 of the test

  //When the test document runs to see if my function is correct, it's taking the index of
  //sciFiShelf at [0] and [1] and seeing if it returns the correct object

  //NOTE: the book objects are being added in reverse order, so .push() will not work
  //I'll have to use a method that adds things to an array from the begining first
  //But I'll have to look up what this method could be

  //My basic logic:
  //If the book object's genre (a string) is equal to 'sciFi', then add this book object
  //to the array
  //I used .unshift() to add this, becuase it will add from the beginning, not the end

  //The function I originally had before there was a cap on the number of books allowed:
  // function shelfBook(book, sciFiShelf) {
  //     if (book.genre === 'sciFi') {
  //       sciFiShelf.unshift(book);
  //     }
  //   };

  //Origianlly I also had the sciFiShelf declared in my code, but I got rid of it
  //when I realized that I didn't need it


  //When I get to the next part of this test, I need to limit the number of books allowed
  // on the shelf to 3
  //I decided to do this by adding an 'and' statement (&&)
  //My code is the same, but I added the condition that sciFiShelf.length needs to be less than 3
  //if I want to .unshift() another item to the array
function shelfBook(book, sciFiShelf) {
    if (book.genre === 'sciFi' && (sciFiShelf.length < 3)) {
      sciFiShelf.unshift(book);
    }
  };


//unshelfBook
//Okay! This function will need to remove a book by its name
//I started with an empty unshelfBook function
//From there, I looked at what my parameters should be (line 132 of test document)
//I need to take in a book name as a string and the name of the shelf
//For now, I am going to use the sciFiShelf specifically, although I expect that
//I will have to find a way to make the shelf name more dynamic in the future

//I want to see how they're going to test this function (lines 134 & 135 of test)
//First, they're going to check the length of the sciFiShelf, and it should equal 2,
//showing that one object was removed
//Then, they're going to check the contents of the sciFiShelf to make sure that the two
//objects returned are correct and the the right item was ultimately removed

//My basic logic before attempting to write anything:
//I will need to loop through my sciFiShelf array and remove the object that is equal
//to the bookTitle that was passed into my function as an argument
//I think this can get tricky, because I am passing in a title as a string,
//but the sciFiShelf array contains books as objects, and I'll have to find a way
//to access the object's title

//My for loop to start says: iterate through each object of the sciFiShelf, and
//check to see if the bookTitle string passed into the function as an argument is the
//same as the current iteration's object name (access through dot notation)
//IF those two things are equal, remove that object from the shelf
//I used .splice() to remove the object
//.splice() notation is (index of object to remove, how many objects to remove)
//If I had a string that I wanted to put into this index, I could list it as a string
//within the .splice()

// function unshelfBook(bookTitle, sciFiShelf) {
//     for (var i = 0; i < sciFiShelf.length; i++) {
//       if (bookTitle === sciFiShelf[i].title) {
//         sciFiShelf.splice(i, 1);
//       }
//     }
//   };

//I originally did this, by explicitly naming sciFiShelf as one of my parameters,
//When this function (above) passed the 'different shelf' part of the test,
//I realized that the parameter could be as simple as 'shelf' or 'shelfName'
//I changed this in my function, and ran the test again seeing that it still passed

  function unshelfBook(bookTitle, shelfName) {
      for (var i = 0; i < shelfName.length; i++) {
        if (bookTitle === shelfName[i].title) {
          shelfName.splice(i, 1);
        }
      }
    };



//listTitles
//First, I made an empty function titled listTitles
//Then I'm just reading through the test document trying to get more information
  //I see that I will need to take in one argument (line 196 of test), so I will
  //need to give my function one parameter, probably shelfName as that's what I'll take in
  //defined as an array on line 194 of test
  //Next, how will they be testing this to see if my output is correct?
  //On line 198, they will be testing that the titles of my shelf are correct

//My logic:
//I got a little confused and was given the hint by someone that I will need to declare
//a variable to return the correct result
//I don't know if I could do this without declraing a vairable first, but I think
//I have an idea of how to do it with another array
//My plan is to make a new array (I've called it titles), and add the titles from
//the shelf book objects in question to this new array
//The titles array will only store those title strings, not the full book objects
//It will list them vertically, so I'll have to figure out how to make this a
//horizontal list instead

//This is what I was attempting before getting a hint that I would need a new variable
// function listTitles(shelfName) {
//   for (var i = 0; i < shelfName.length; i++) {
//     console.log(shelfName[i].title);
//   }
// };

//Now, I have my titles array
//I've created a for loop to run through the whole length of the shelf array that
//was passed in as an argument
//I don't need an if statement inside of this for loop, I just need to do a certain
//action each time I get to an object
  //Specifically, each time I get to an object, I need to pull that object's title
  //and put it into my new defined, but empty array
  //I did this by .push()ing into my titles array the current iteration's title!
//Sweet! Now I have a titles array with each of these object's titles listed as an element
//Now, I have to list these titles out in a horizontal line to match the output on
//line 198 of the test doc
  //I didn't know how to do this, so I read through MDN's site, and .join() looked right?
  //It took me few tries to get the syntax of this method right, but figured it out
  //For this to be the output of the function, I need to return it

function listTitles(shelfName) {
  var titles = [];
  for (var i = 0; i < shelfName.length; i++) {
    titles.push(shelfName[i].title);
  }
  return titles.join(", ");
};


//searchShelf
//Onto the searchShelf function!
//I declared an empty function to start
//Then I ran through the test to get more information
  //Lines 218 and 219 of the test show me that I will have two parameters for my function
  //because they are passing in two arguments when they test
  //It looks like the first parameter will be the name of the shelf, and the second
  //will be a string equal to the title of a book
  //I also see that I have a sciFiShelf array declared on line 216 that holds both
  //of my book objects
  //Finally, lines 218 and 219 also let me know that when they test my code, they will
  //be looking for a Boolean response
    //So, I know that the ultimate outpout of my function will be true or false

//My logic:
//I want to create a for loop that will run though each element in my shelf array and
//check for something along the way
//What I'm checking for: does the bookTitle passed into my function as an argument
//match any element's title in the array
//Because the array holds objects, I'll have to check the object's names with .title
//(the key that holds the string that should equal a title)
//IF these two things are equal, then YES this title exists on the shelf - return true
//If not, return false

//The biggest mistake I made when writing this the first time, was putting the second
//return statement inside of my for loop
//It was terminating my loop early, and it wasn't running through each iteration
//When I moved it outside of my loop, but still inside the function it worked!
function searchShelf(shelf, bookTitle) {
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
      return true;
    }
  }
  return false;
};



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};

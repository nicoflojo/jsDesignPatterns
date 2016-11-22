var Book = function(id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pageCount = pageCount;
  this.publisherID = publisherID;
  this.ISBN = ISBN;
  this.checkoutDate = checkoutDate;
  this.checkoutMember = checkoutMember;
  this.dueReturnDate = dueReturnDate;
  this.availability = availability;
};

Book.prototype = {
  getTitle: function() {
    return this.title;
  },
  getAuthor: function() {
    return this.author;
  },
  getISBN: function() {
  },
  // c'mon for brevity..

  updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
    this.id = bookID;
    this.availability = newStatus;
    this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = dueReturnDate;
  },
  extendCheckoutPeriod: function(bookID, newReturnDate) {
    this.id = book.ID;
    this.dueReturnDate = newReturnDate;
  },
  isPastDue: function(bookID) {
    var currentDate = new Date();
    return currentDate.getTime() > Date.parse(this.dueReturnDate);
  }
};

// Optimized var Book with Flyweight
var Book = function(title, author, genre, pageCount, publisherID, ISBN) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pageCount = pageCount;
  this.publisherID = publisherID;
  this.ISBN = ISBN;
};

// Book factory singleton
var BookFactory = (function() {
  var existingBooks = {}, existingBook;
  return {
    createBook: function(title, author, genre, pageCount, publisherID, ISBN) {
      existingBook = existingBook[ISBN];
      if (!!existingBook) {
        return existingBook;
      } else {
        var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
        existingBooks[ISBN] = book;
        return book;
      }
    }
  };
}());

// BookRecordManager singleton
var BookRecordManager = (function () {
  var bookRecordDatabase = {};
  return {
    addBookRecord: function(title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
      var book = bookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);
      bookRecordDatabase[id] = {
        checkoutMember: checkoutMember,
        checkoutDate: checkoutDate,
        dueReturnDate: dueReturnDate,
        availability: availability,
        book: book
      };
    },
    updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
      var record = bookRecordDatabase[bookID];
      record.availability = newStatus;
      record.checkoutDate = checkoutDate;
      record.checkoutMember = checkoutMember;
      record.dueReturnDate = newReturnDate;
    },
    extendCheckoutPeriod: function(bookID, newReturnDate) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    },
    isPastDue: function(bookID) {
      var currentDate = new Date();
      return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
    }
  };
}());

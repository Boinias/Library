// let library = [

// ];


// let addBook = document.getElementById('addBook')
// let form = document.getElementById('form');

// function displayForm () {
//     form.style.display = 'flex';
//     dimBg.style.display = 'flex';
//   };

// function hideForm () {
//     form.style.display = 'none';
//     dimBg.style.display = 'none';
// }

// function clearForm () {
//     let form = document.getElementById('form')
//     let inputs = document.getElementsByTagName('input')

//     for (let i = 0; i < inputs.length; i++) {
//         let input = inputs[i]

//         if (input.type == 'text') {
//             input.value = '';
//         } else {
//             input.checked = false;
//         }
//     }
// }

// function displayObjs () {
//     var newestBook = library[library.length - 1];
//     var details = [newestBook.author, newestBook.title, newestBook.pages, newestBook.readStatus]
//     var idCreator = ['author', 'title', 'pages', 'readStatusDisplay']
//     let libraryDiv = document.getElementById('library')

//     libraryDiv.innerHTML = '';

//     //make master div
//     library.forEach(function(book) {
//     var newObj = document.createElement('div')
//     newObj.style.width = "300px";
//     newObj.style.height = '100px';
//     newObj.style.backgroundColor = 'green';
//     newObj.id = `BookOjectFor${newestBook.title}`
    
//     //make info detail displays
//     for (i=0; i < 4; i++) {
//     var newDetail = document.createElement('div')
//     newDetail.id = `${idCreator[i]}`;

//     newDetail.style.width = "80px";
//     newDetail.style.height = '80px';
//     newDetail.style.backgroundColor = 'white';
//     newDetail.style.color = 'black';
//     newDetail.textContent = `${details[i]}`

//     newObj.appendChild(newDetail);
//     }
    
//     //make readStatus button
//     var readStatusBtn = document.createElement('button')
//     readStatusBtn.textContent = "Change Read Status";
//     readStatusBtn.style.display = 'inline-block';
//     readStatusBtn.style.border = 'none';
//     readStatusBtn.style.padding = '4px 12px';
//     readStatusBtn.style.fontSize = "normal";
//     readStatusBtn.style.fontWeight = 'normal';
//     readStatusBtn.style.textAlign = 'center';
//     readStatusBtn.Cursor = 'pointer';
//     readStatusBtn.style.borderRadius = '4px';

//     readStatusBtn.addEventListener('click', function () {
//         var bookStatus = newObj.querySelector('#readStatusDisplay')
//         var bookReadStatus = bookStatus.textContent
//         var bookTitle = newObj.querySelector('#title').textContent
//         // var objectIndex = undefined;
//         // for (let i=0; i < library.length; i++) {
//         //     if (library[i].title == bookTitle.textContent) {
//         //         objectIndex = i;
//         //         console.log(objectIndex)
//         //         break;
//         //     }
//         // }
//         if (bookReadStatus === 'read') {
//             var bookIndex = Array.from(libraryDiv.children).indexOf(bookTitle);
//             bookStatus.textContent = 'unread';
//             library[bookIndex].readStatus = 'unread'
//         } else {
//             bookStatus.textContent = 'read';
//             library[bookIndex].readStatus = 'read'
//         }

//         console.log(library)
//     });

//     newObj.appendChild(readStatusBtn)


//     //make delete button
//     var button = document.createElement('button')
//     button.id = 'delete'
//     button.textContent = "Delete"
//     button.style.display = 'inline-block';
//     button.style.border = 'none';
//     button.style.padding = '4px 12px';
//     button.style.fontSize = "normal";
//     button.style.fontWeight = 'normal';
//     button.style.textAlign = 'center';
//     button.Cursor = 'pointer';
//     button.style.borderRadius = '4px';

//     button.addEventListener('click', function () {
//         let title = newObj.querySelector('#title').textContent

//         for (let i = 0; i <= library.length; i++) {
//             let array = Object.values(library[i])
//             if (array.includes(title)) {
//                 library.splice(i,1)
//             }
//             break;
//         }

//         libraryDiv.removeChild(newObj)

//     })

//     newObj.appendChild(button);

//     libraryDiv.appendChild(newObj);
//     })
// };

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
      
//         var authorForBook = document.getElementById('author').value;
//         var titleForBook = document.getElementById('name').value;
//         var pagesForBook = document.getElementById('pages').value;
//         var readStatusForBook = document.getElementById('readStatus').checked;
        
//         var book = {
//           author: authorForBook,
//           title: titleForBook,
//           pages: pagesForBook,
//           readStatus: readStatusForBook ? 'read' : 'unread'
//         };
        
//         library.push(book);
            
//         console.log(library);
        
//         displayObjs();
//         hideForm();
//         clearForm();
//       });


      
let library = [];

let addBook = document.getElementById('addBook');
let form = document.getElementById('form');

let dimBackground = document.getElementById('dimBg')
dimBackground.addEventListener('click', () => {
  hideForm()
  clearForm()
})

function displayForm() {
  form.style.display = 'flex';
  dimBg.style.display = 'flex';
}

function hideForm() {
  form.style.display = 'none';
  dimBg.style.display = 'none';
}

function clearForm() {
  let form = document.getElementById('form');
  let inputs = document.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    if (input.type == 'text') {
      input.value = '';
    } else {
      input.checked = false;
    }
  }
}

function displayObjs() {
  let libraryDiv = document.getElementById('library');

  libraryDiv.innerHTML = ''; // Clear the existing content
  
  library.forEach(function(book) {
    var newObj = document.createElement('div');
    newObj.style.display = 'flex';
    newObj.style.flexDirection = 'column';
    newObj.style.alignItems = 'center'
    newObj.style.width = '350px';
    newObj.style.height = '350px';
    newObj.style.gap = '20px'
    newObj.style.padding = '20px 50px'
    newObj.style.margin = '5px'
    newObj.id = `BookObjectFor${book.title}`;
    newObj.style.backgroundColor = bg();

    function bg () { 
        var bookReadStatus = book.readStatus;
        if (bookReadStatus === 'read') {
            return 'green';
          } else if (bookReadStatus === 'unread'){
            return 'red';
          }
    }


    var details = [book.author, book.title, book.pages, book.readStatus];
    var idCreator = ['author', 'title', 'pages', 'readStatusDisplay'];
    for (let i = 0; i < 4; i++) {
      var newDetail = document.createElement('div');
      newDetail.id = `${idCreator[i]}`;
      newDetail.style.width = '250px';
      newDetail.style.height = 'fit-content';
      newDetail.style.gap = '5px'
      newDetail.style.margin = '5px';
      newDetail.style.justifyContent = 'start';
    //   newDetail.style.backgroundColor = 'white';
    newDetail.style.whiteSpace = 'nowrap';
      newDetail.style.color = 'white';
      newDetail.textContent = newDetail.id === 'readStatusDisplay' ? `${details[i]}` : `${newDetail.id}: ${details[i]}`;
      newDetail.style.overflowX = 'scroll';

      newObj.appendChild(newDetail);
    }
    

    var readStatusBtn = document.createElement('button');
    readStatusBtn.textContent = 'Change Read Status';
    readStatusBtn.style.display = 'inline-block';
    readStatusBtn.style.border = 'none';
    readStatusBtn.style.padding = '4px 12px';
    readStatusBtn.style.fontSize = 'normal';
    readStatusBtn.style.fontWeight = 'normal';
    readStatusBtn.style.textAlign = 'center';
    readStatusBtn.style.cursor = 'pointer';
    readStatusBtn.style.borderRadius = '4px';

    readStatusBtn.addEventListener('click', function() {
      var bookStatus = newObj.querySelector('#readStatusDisplay');
      var bookReadStatus = bookStatus.textContent;
      var bookTitle = newObj.querySelector('#title').textContent;
      var bookIndex = library.findIndex(book => book.title === bookTitle);

      if (bookReadStatus === 'read') {
        newObj.style.backgroundColor = 'red';
        bookStatus.textContent = 'unread';
        library[bookIndex].readStatus = 'unread';
      } else if (bookReadStatus === 'unread'){
        newObj.style.backgroundColor = 'green';
        bookStatus.textContent = 'read';
        library[bookIndex].readStatus = 'read';
      }

      console.log(library);
    });

    newObj.appendChild(readStatusBtn);


    var button = document.createElement('button');
    button.id = 'delete';
    button.textContent = 'Delete';
    button.style.display = 'inline-block';
    button.style.border = 'none';
    button.style.padding = '4px 12px';
    button.style.fontSize = 'normal';
    button.style.fontWeight = 'normal';
    button.style.textAlign = 'center';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '4px';

    button.addEventListener('click', function() {
      let title = newObj.querySelector('#title')
      let bookIndex = library.findIndex(book => book.title === title.textContent);
        library.splice(bookIndex, 1);
        libraryDiv.removeChild(newObj);

      console.log(library);
    });


    newObj.appendChild(button);

    libraryDiv.appendChild(newObj);

  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  var authorForBook = document.getElementById('author').value;
  var titleForBook = document.getElementById('name').value;
  var pagesForBook = document.getElementById('pages').value;
  var readStatusForBook = document.getElementById('readStatus').checked;

  var book = {
    author: authorForBook,
    title: titleForBook,
    pages: pagesForBook,
    readStatus: readStatusForBook ? 'read' : 'unread'
  };

  library.push(book);

  console.log(library);

  displayObjs();
  hideForm();
  clearForm();

});
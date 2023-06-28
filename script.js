let library = [

];


let addBook = document.getElementById('addBook')
let form = document.getElementById('form');

function displayForm () {
    form.style.display = 'flex';
    dimBg.style.display = 'flex';
  };

function hideForm () {
    form.style.display = 'none';
    dimBg.style.display = 'none';
}

function clearForm () {
    let form = document.getElementById('form')
    let inputs = document.getElementsByTagName('input')

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i]

        if (input.type == 'text') {
            input.value = '';
        } else {
            input.checked = false;
        }
    }
}

function displayObjs () {
    var newestBook = library[library.length - 1];
    var details = [newestBook.author, newestBook.title, newestBook.pages, newestBook.readStatus]
    var idCreator = ['author', 'title', 'pages', 'readStatusDisplay']
    let libraryDiv = document.getElementById('library')

    library.forEach(function(book) {
    var newObj = document.createElement('div')
    newObj.style.width = "300px";
    newObj.style.height = '100px';
    newObj.style.backgroundColor = 'green';
    
    for (i=0; i < 4; i++) {
    var newDetail = document.createElement('div')
    newDetail.id = `${idCreator[i]}`;

    newDetail.style.width = "80px";
    newDetail.style.height = '80px';
    newDetail.style.backgroundColor = 'white';
    newDetail.style.color = 'black';
    newDetail.textContent = `${details[i]}`

    newObj.appendChild(newDetail);
    }
    libraryDiv.appendChild(newObj);
    })
};

    form.addEventListener('submit', (e) => {
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
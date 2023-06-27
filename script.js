let library = [

];


let addBook = document.getElementById('addBook')
let form = document.getElementById('form');

document.getElementById('addBook').addEventListener('click', () => {

});

function displayForm () {
    form.style.display = 'flex';
    dimBg.style.display = 'flex';
  };

function hideForm () {
    form.style.display = 'none';
    dimBg.style.display = 'none';
}


  function addInfo() {
    document.getElementById('form').addEventListener('submit', (e) => {
      e.preventDefault();
  
      var author = document.getElementById('author').value;
      var name = document.getElementById('name').value;
      var pages = document.getElementById('pages').value;
      var readStatus = document.getElementById('readStatus').checked;
  
      var book = {
        author: author,
        title: name,
        pages: pages,
        readStatus: readStatus ? 'read' : 'unread'
      };
  
      library.push(book);
      console.log(library)

    })
};


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

// function displayObj () {
//     var newObj = document.createElement('div')
//     var library = document.getElementById('library');

//     newObj.style.width = "300px";
//     newObj.style.height = '100px';
//     newObj.style.backgroundColor = 'green';

//     for (i=0; i < 5; i++) {
//     var newDetail = document.createElement('div')

//     newdetail.style.width = "80px";
//     newdetail.style.height = '80px';
//     newdetail.style.backgroundColor = 'white';
//     newdetail.style.color = 'black'
//     newdetail.innerText = `${library[library.length-1].title}`;

//     newObj.appendChild(newDetail);
//     }

//     function findReadStatus {

//          }
         
//     }
//     var changeReadStatus = document.createElement('button')
//     changeReadStatus.textContent = readStatus of this book
//     newObj.appendChild(changeReadStatus);

//     var del = document.createElement('button')
//     newObj.appendChild(del);

//     library.appendChild(newObj);
// };

function displayObjs () {
    var library = document.getElementById('library');
    var newestBook = library[library.length-1];

    library.forEach(function(book) {
    var newObj = document.createElement('div')
    newObj.style.width = "300px";
    newObj.style.height = '100px';
    newObj.style.backgroundColor = 'green';
    
    for (i=0; i < 5; i++) {
    var newDetail = document.createElement('div')

    newdetail.style.width = "80px";
    newdetail.style.height = '80px';
    newdetail.style.backgroundColor = 'white';
    newdetail.style.color = 'black';

    newObj.appendChild(newDetail);
    }

    })
};
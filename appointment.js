<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>parcel sandbox</title>
</head>
<body>

  <div class="container">
   
    <h2 class="title">Appointment booking app</h2>
    <form id="addForm" class="form-inline mb-3">
      <input type="text" class="form-control mr-2" id="name">
      <input type="text" class="form-control mr-2" id="email">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    
    <ul id="items" class="list-group"><li class="list-group-item"></li></ul>
   
  </div>
  
    <script>
const form = document.getElementById('addForm');
const item = document.getElementById('items');
const itemList=document.getElementsByClassName('list-group-items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event//
item.addEventListener('click', removeItem);
//form.addEventListerner('submit',saveToLocalStorage);
form.addEventListener('submit', saveToLocalStorage);


//itemList.addEventListener('click', edtBtn);//
for(let i=0;i<itemList.length;i++)  {
    const editBtn=document.createElement('button');
    editBtn.className='btn btn-sm float-right editBtn';
    editBtn.appendChild(document.createTextNode('edit'));
    itemList[i].appendChild(editBtn);
}


// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  const inputValue = document.getElementById('name').value;
  
  // Create new li element
  const li= document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  const newText=document.createTextNode(inputValue)
  const description=document.getElementById('email').value;
  
  // Add text node with input value
  const emailNode=document.createTextNode(email);

  li.appendChild(newText);
  li.appendChild(emailNode);

  // Create del button element
  const deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);
  
  // Append li to list
  item.appendChild(li);
  const editBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('edit'));

  // Append button to li
  li.appendChild(editBtn);
  
  // Append li to list
  item.appendChild(li);
  
  
}
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      item.removeChild(li);
    }
  }
}

 function saveToLocalStorage(event){
            event.preventDefault();
            const name=event.target.name.value;
            const email=event.target.email.value;
            
            /*localStorage.setItem('name',name);
            localStorage.setItem('email',email);
            localStorage.setItem('number',number);*/
            let myObj={
              name,
              email
              
            }
            localStorage.setItem(myObj.email, JSON.stringify(myObj));
        }
    </script>
  </body>
</html>
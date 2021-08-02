
//fetching the container where card will be added
const taskContainer = document.querySelector('.task_container');
const globalStore = [];

const loadInitialCardData = () =>
{
  //Localstorage to access Card Data
  const getCardData = localStorage.getItem("tasky");
  //Convert to Normal Object
  const {cards} = JSON.parse(getCardData);
  //loop over the array of task objects to create HTML Cards, inject it in DOM
  cards.map((card)=>
  {
    taskContainer.insertAdjacentHTML('beforeend', newCard);
  });
}

const saveChanges = () =>
{
  //Fetching data from the modal
  const taskData = {
    id : `${Date.now()}`,
    imageUrl : document.getElementById('imgurl').value,
    taskTitle : document.getElementById('title').value,
    taskType : document.getElementById('type').value,
    taskDescription : document.getElementById('description').value,
  }
  
  //Making the New Cart
  const newCard = `
  <div class="col-sm-12 col-md-6 col-lg-4" id=${taskData.id}">
    <div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success"><i class="fas fa-edit"></i></button>
    <button type="button" class="btn btn-outline-danger" onclick="taskDelete()"><i class="fas fa-trash-alt"></i></button>
  </div>
  <div class="card-body">
      <img src=${taskData.imageUrl} class="card-img-top" alt="event image">
    <h5 class="card-title fw-bolder text-primary mt-3">${taskData.taskTitle}</h5><span class="badge bg-secondary p-1">${taskData.taskType}</span>
    <p class="card-text">${taskData.taskDescription}</p>
    <a href="#" class="btn btn-primary px-4">Open</a>
  </div>
  </div>
  `;

  //Adding a new card ajdacent to the previous card
  taskContainer.insertAdjacentHTML('beforeend', newCard);

  //Pusing the new task object into a global store array
  globalStore.push(taskData);

  //Adding the Global Store array into the Local Storage
  localStorage.setItem("tasky",JSON.stringify({cards : globalStore}));












};




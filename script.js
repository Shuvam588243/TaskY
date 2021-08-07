
// card = document.getElementsByClassName('card');
// card.addEventListener('hover',()=>
// {
//   card.classList.add('animate__headShake');
// });

//fetching the container where card will be added
const taskContainer = document.querySelector('.task_container');
//Initializing a Empty Global store array
const globalStore = [];


const generateNewCard = (taskData) =>`<div class="col-sm-12 col-md-6 col-lg-4 h-100 mb-4" id=${taskData.id} style="height:200px">
    <div class="card animated animate__headShake">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-info"><i class="fas fa-edit"></i></button>
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



//Loading Initial Data
const loadInitialCardData = () =>
{
  //Localstorage to access Card Data
  const getCardData = localStorage.getItem("tasky");
  //Convert to Normal Object
  const {cards} = JSON.parse(getCardData);
  //loop over the array of task objects to create HTML Cards, inject it in DOM
  cards.map((card)=>
  {
    taskContainer.insertAdjacentHTML('beforeend', generateNewCard(card));
    //Updates Global store
    globalStore.push(card);
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


  //Adding a new card ajdacent to the previous card
  taskContainer.insertAdjacentHTML('afterbegin', generateNewCard(taskData));

  //Pusing the new task object into a global store array
  globalStore.push(taskData);

  //Adding the Global Store array into the Local Storage
  localStorage.setItem("tasky",JSON.stringify({cards : globalStore}));

  document.getElementById('imgurl').value = ""
  document.getElementById('title').value = ""
  document.getElementById('type').value = ""
  document.getElementById('description').value = ""

};




//1
 const myBtn = document.querySelector('#click');

 function handleMyBtnClick(event) {
   const battonClick = document.querySelector('#click');
 if(battonClick){
  battonClick.remove();
 }
console.log(battonClick);
console.log(event);
}
myBtn.addEventListener('click', handleMyBtnClick);


  //2
  let img = document.createElement('img'); 
  Img.src='https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg';
  document.body.appendChild(img);

  //3
  const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg "
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg "
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg "
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg "
    }
    ];
  
  function renderUser(){
    const userTableContainer = document.querySelector('#user-list-container');
    const userTableBody = userTableContainer.querySelector('tbody');
  
    const userItems = users.map(user => {
      return `<tr>
                  <td>${user.id}</td>
                  <td>${user.email}</td>
                  <td>${user.first_name}</td>
                  <td>${user.last_name}</td>
                  <td><button data-user-id="${user.id}" class="user-remove" type="button">წაშლა</button></td>
                  <td><button data-user-id="${user.id}" class="user-remove" type="button">ინფორმაცია</button></td>
              </tr>`;
    });
    console.log(userItems);
    userTableBody.innerHTML = userItems.join('');
  }
  
  renderUser();
  


  
  
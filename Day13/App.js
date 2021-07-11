function fetchData(){

  fetch('https://reqres.in/api/users')
  .then(response =>{
      if(!response.ok){
          throw Error("Error");
      }

  
        return response.json();

     
  })
  .then(data =>{
     
      const html = data.data.map(user =>{
        // return `<p> Name: ${user.first_name}</p>`;
        return `
        <div class='user'> 
        <p> <img src="${user.avatar}" alt="${user.first_name}" /> </p>
        <p> Name: ${user.first_name}</p>
        <p> Email: ${user.email}</p>
        </div>
        `;
      }).join("");
    //   console.log(html);

      document .querySelector('#app').insertAdjacentHTML('afterbegin',html);
  }) 
  .catch(error =>{
      console.log(error);
      });
}
fetchData();

function postData(){
    fetch('https://reqres.in/api/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name : "Mprpheus",
            job : "leader"

        })
    })
  .then(response =>{
      if(!response.ok){
          throw Error("Error");
      }

  
        return response.json();

     
  })
  .then(data =>{
      console.log(data) 
      }) 
  .catch(error =>{
      console.log(error)
      });
}
postData();

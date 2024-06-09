document.addEventListener('DOMContentLoaded',()=>{
    const fetchButton = document.getElementById('fetchButton');
    const userList = document.getElementById('userList');

    fetchButton.addEventListener('click',async()=>{
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users'); //Errores HTTP
            const data = await response.json();
            
            userList.innerHTML='';

            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = ` EL usuario ${user.name}`;
                userList.appendChild(listItem);
            });

        }catch(error){
            console.log('Fetching Error',error);
            userList.innerHTML = '<li> Failed to Fetch</li>'
        }
    })
})
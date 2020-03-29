// Version 3

/*
1.
Make an API call using the Fetch API or the regular XMLHttpRequest (whichever one you're more comfortable with).
Use the following URL: https://jsonplaceholder.typicode.com/users
Display the "name", "email" and "city" of the first person inside an unordered list.
*/
async function fetchUsers(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  fetchUsers(url).then(data => {
    console.log(data);
    const ul = document.createElement('ul');
    
    console.log(data.name);
    const liName = document.createElement('li');
    liName.innerText = `Name : ${data[0].name}`;
  
    console.log(data.email);
    const liEmail = document.createElement('li');
    liEmail.innerText = `Email : ${data[0].email}`;
  
    const liCity = document.createElement('li');
    liCity.innerText = `City : ${data[0].address['city']}`;
  
    ul.appendChild(liName);
    ul.appendChild(liCity);
    ul.appendChild(liEmail);
    document.body.appendChild(ul);
  });

/*
2.
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/
const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];
const newArray = ["Zebra", "Cookie", "Flower"];
fruits.push(...newArray)

// console.log (fruits);
fruits.sort(function (a, b) {
            if (a > b) {
                return 1;
            }
            if (b > a) {
                return -1;
            }
            return 0;
});

console.log (fruits);

/*
3.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
function createButton (){
    const btn = document.createElement('button');
    btn.textContent = 'click me!';
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = 'https://avatars3.githubusercontent.com/u/20858568?s=200&v=4';
        btn.style.display = 'none';
        document.body.appendChild(img)
    });
}
createButton();
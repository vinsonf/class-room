
// const elements = createElements();
// appendElements(elements);
// styleElements(elements);

// const {textbox, sendButton} = elements;



// function createElements() {
//     const textbox = document.createElement('textarea');
//     const sendButton = document.createElement('button');
//     return {textbox, sendButton};
// }

// function appendElements({textbox, sendButton}) {
//     document.body.appendChild(textbox);
//     document.body.appendChild(sendButton);
// }

// function styleElements({textbox, sendButton}) {
//     textbox.classList.add('text-section');
//     sendButton.style.fontSize = '40px';
// }


// sendButton.innerHTML = 'Send';


// sendButton.addEventListener('click', function() {
//     console.log('run');
//  fetch('/question', {

//     method: 'POST',
//     body: JSON.stringify({ data: textbox.value}),
//     headers: {
//         'Content-Type': 'application/json'
//     }


//  }).then((res) => console.log(res));

// });


// setInterval(() => {
//     fetch('/questions').then(function(res){
//         console.log(res);
//         return res.json();
//     }).then((data) => {

//         ul.innerHTML = '';
//         data.forEach(function(item) {
//             const li = document.createElement('li');
//             ul.prepend(li);

//             li.innerHTML = item.data;
//         })
//     });
// }, 1000 * 15);


// const ul = document.createElement('ul');
// document.body.appendChild(ul);

// fetch('/questions').then(function(res){
//     console.log(res);
//     return res.json();
// }).then((data) => {

//     ul.innerHTML = '';
//     data.forEach(function(item) {
//         const li = document.createElement('li');
//         ul.prepend(li);

//         li.innerHTML = item.data;
//     })
// });



import { io } from "socket.io-client";

const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: false });

export default socket;









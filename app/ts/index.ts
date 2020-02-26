import {Typicode} from 'typicode'

const divPosts = document.querySelector('[posts]')

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(elements => elements.map((obj: Typicode) => obj)
    .filter((element : Typicode) => element.userId == 9)
    .forEach((element : Typicode) => {
      console.log(element.userId + ' - ' + element.id + ' - ' + element.title);
      divPosts.innerHTML += `<a href="#" data-id="${element.id}" class="list-group-item list-group-item-action">${element.title}</a>`;
    })
  )
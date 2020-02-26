const divPosts = document.querySelector('[posts]');
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(elements => elements.map((obj) => obj)
    .filter((element) => element.userId == 9)
    .forEach((element) => {
    console.log(element.userId + ' - ' + element.id + ' - ' + element.title);
    divPosts.innerHTML += `<a href="#" data-id="${element.id}" class="list-group-item list-group-item-action">${element.title}</a>`;
}));

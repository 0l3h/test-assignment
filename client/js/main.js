'use strict'

const users = [
    {
        order: (Math.random() * 100).toFixed(0),
        username: 'First'
    },
    {
        order: (Math.random() * 100).toFixed(0),
        username: 'Second'
    },
    {
        order: (Math.random() * 100).toFixed(0),
        username: 'Third'
    },
    {
        order: (Math.random() * 100).toFixed(0),
        username: 'Fourth'
    },
    {
        order: (Math.random() * 100).toFixed(0),
        username: 'Fifth'
    }
];

getUsernames();

function addUsername(e) {
    e.preventDefault();

    const usernameInput = form.elements[0];
    const username = usernameInput.value;
    
    users.push({order: (Math.random() * 100).toFixed(0), username});
};

function getUsernames() {
    const orderedList = document.querySelector('ol');
    orderedList.replaceChildren();

    for (const user of users) {
        const listElement = document.createElement('li');
        const order = document.createElement('span');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const usernameElement = document.createElement('span');

        order.textContent = user.order;
        usernameElement.textContent = user.username;
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', deleteUsername);
        
        listElement.appendChild(order);
        listElement.appendChild(usernameElement);
        listElement.appendChild(editButton);
        listElement.appendChild(deleteButton);

        orderedList.appendChild(listElement);
    };
};

function updateUsername() {

};

function deleteUsername() {
    
};

const form = document.querySelector('form');

form.addEventListener('submit', addUsername);
form.addEventListener('submit', getUsernames);
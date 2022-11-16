'use strict'

const usernames = ['username_1', 'username_2', 'username_3', 'username_4'];

getUsernames();

const form = document.querySelector('form');

form.addEventListener('submit', addUsername);
form.addEventListener('submit', getUsernames);

function addUsername(e) {
    e.preventDefault();

    const usernameInput = form.elements[0];
    const inputValue = usernameInput.value;
    
    usernames.push(inputValue);
};

function getUsernames() {
    const orderedList = document.querySelector('ol');
    orderedList.replaceChildren();

    for (const name of usernames) {
        const listElement = document.createElement('li');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');

        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';
        
        listElement.textContent = name;
        listElement.appendChild(editButton);
        listElement.appendChild(deleteButton);

        orderedList.appendChild(listElement);
    };
};

function updateUsername() {

};

function deleteUsername() {

};

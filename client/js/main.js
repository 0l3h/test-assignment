'use strict'

import { createUserRequest, getAllUsersRequest, updateUserRequest, deleteUserRequest } from '../api/user.js';

getUsers();

async function addUser(e) {
    e.preventDefault();

    const usernameInput = form.elements[0];
    const username = usernameInput.value;
    const user = {order: (Math.random() * 1000).toFixed(0), username};

    createUserRequest(user);
};

async function getUsers() {
    const orderedList = document.querySelector('ol');
    orderedList.replaceChildren();

    const users = await (await getAllUsersRequest()).json();

    for (const user of users) {
        const listElement = document.createElement('li');
        const order = document.createElement('span');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const usernameElement = document.createElement('span');

        order.textContent = user.order;
        usernameElement.textContent = user.name;
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', deleteUser);
        editButton.addEventListener('click', updateUser);

        listElement.setAttribute('data-user-id', user.id);
        
        listElement.appendChild(order);
        listElement.appendChild(usernameElement);
        listElement.appendChild(editButton);
        listElement.appendChild(deleteButton);

        orderedList.appendChild(listElement);
    };
};

async function updateUser(e) {
    const listElement = e.target.parentElement;
    const userId = listElement.getAttribute('data-user-id');
    const inputElement = document.querySelector(`li[data-user-id=${userId}]`);

    console.log(inputElement.value);

    updateUserRequest(userId);
};

async function deleteUser(e) {
    const listElement = e.target.parentElement;
    const userId = listElement.getAttribute('data-user-id');

    deleteUserRequest(userId).then(getUsers);
};

const form = document.querySelector('form');

form.addEventListener('submit', addUser);
form.addEventListener('submit', getUsers);
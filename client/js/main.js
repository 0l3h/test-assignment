import { 
    createUserRequest, 
    getAllUsersRequest, 
    updateUsernameRequest,
    changeRankRequest,
    deleteUserRequest 
} from '../api/user.js';

getUsers();

async function addUser(e) {
    e.preventDefault();

    const usernameInput = form.elements[0];
    const username = usernameInput.value;
    const user = {rank: (Math.random() * 1000).toFixed(0), username};

    await createUserRequest(user);

    document.location.reload();
};

async function getUsers() {
    const orderedList = document.querySelector('ol');
    orderedList.replaceChildren();

    const users = await (await getAllUsersRequest()).json();

    for (const user of users) {
        const listElement = document.createElement('li');
        const rankElement = document.createElement('span');
        const inputElement = document.createElement('input');
        const formElement = document.createElement('form');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        const rankDownButton = document.createElement('button');
        const rankUpButton = document.createElement('button');
        const usernameElement = document.createElement('span');

        rankElement.textContent = user.rank;
        usernameElement.textContent = user.name;
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';
        rankUpButton.textContent = 'Rank up';
        rankDownButton.textContent = 'Rank down';

        deleteButton.addEventListener('click', () => deleteUser(user.id));
        editButton.addEventListener('click', () => updateUsername(user.id));
        rankUpButton.addEventListener('click', () => changeRank({ id: user.id, rankBy: 1 }));
        rankDownButton.addEventListener('click', () => changeRank({ id: user.id, rankBy: -1 }));

        inputElement.placeholder = 'New username'
        listElement.setAttribute('data-user-id', user.id);
        
        listElement.appendChild(rankElement);
        listElement.appendChild(usernameElement);
        formElement.appendChild(inputElement);
        listElement.appendChild(formElement);
        listElement.appendChild(editButton);
        listElement.appendChild(deleteButton);
        listElement.appendChild(rankUpButton);
        listElement.appendChild(rankDownButton);

        orderedList.appendChild(listElement);
    };
};

async function updateUsername(id) {
    const editForm = document.querySelector(`li[data-user-id="${id}"] > form`);

    const usernameInput = editForm.elements[0];
    const name = usernameInput.value;

    await updateUsernameRequest({ id, name });

    document.location.reload();
};

async function changeRank({ id, name, rankBy }) {
    await changeRankRequest({ id, rankBy, name });

    document.location.reload();
};

async function deleteUser(userId) {
    await deleteUserRequest(userId);              
    
    document.location.reload();
};

const form = document.querySelector('main > form');

form.addEventListener('submit', addUser);
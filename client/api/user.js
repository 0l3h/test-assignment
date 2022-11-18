const getAllUsersRequest = () => {
    return fetch('/get-users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
};

const createUserRequest = (data) => {
    console.log(data);

    return fetch('/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const updateUserRequest = (data) => {
    return fetch(`/update-user/${data.userId}`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    });
};

const deleteUserRequest = (userId) => {
    return fetch(`/delete-user/${userId}`, {
        method: 'DELETE'
    });
};

export { getAllUsersRequest, createUserRequest, updateUserRequest, deleteUserRequest };
const getAllUsersRequest = () => {
    return fetch('/get-users', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
};

const createUserRequest = (data) => {
    return fetch('/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const updateUsernameRequest = (data) => {
    return fetch(`/update-username/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const changeRankRequest = (data) => {
    return fetch(`/change-rank/${data.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

const deleteUserRequest = (userId) => {
    return fetch(`/delete-user/${userId}`, {
        method: 'DELETE'
    });
};

export { 
    getAllUsersRequest, 
    createUserRequest, 
    updateUsernameRequest, 
    changeRankRequest,
    deleteUserRequest 
};
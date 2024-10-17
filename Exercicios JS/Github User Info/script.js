function getUserInfo() {
    const username = $('#username').val();

    if (username.trim() !== '') {
        $.ajax ({
            URL: `https://api.github.com/users/${username}`,
            method: 'GET',
            success: function (data) {
                displayUserInfo(data);
            },
            error: function (error) {
                displayError(error.responseJSON.message);
            }
        });
    } else {
        displayError('Por favor, insira um nome de usuário válido.');
    }
}

function displayUserInfo(user) {
    const resultContainer = $('#result-container');
    resultContainer.html(`
        <h2>${user.name}</h2>
        <p>Seguidores: ${user.followers}</p>
        <p>Repositório públicos: ${user.public_repos}</P>
        <p>Biografia: ${user.bio}</P>        
        <img src="${user.avatar_url}" alt="Avatar" width="100">
        `);
}



function displayError(message) {
    const resultContainer = $('#result-container');
    resultContainer.html(`<p class="error">${message}</p>`);
}
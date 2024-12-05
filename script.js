document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (localStorage.getItem(phone)) {
        alert('Вы уже отправили заявку.');
        return;
    }

    const data = {
        stream_code: 'vv4uf',
        client: {
            phone: phone,
            name: name,
        },
    };

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer RLPUUOQAMIKSAB2PSGUECA',
    };

    fetch('https://order.drcash.sh/v1/order', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            localStorage.setItem(phone, 'submitted');
            window.location.href = 'thx.html';
        } else {
            alert('Произошла ошибка при отправке заявки.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке заявки.');
    });
});
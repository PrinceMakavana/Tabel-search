

window.onload = async () => {
    await setData();
}

const setData = async () => {

    requestUrl = './data.json';
    request = new Request(requestUrl);
    response = await fetch(request);
    if (response.status = "200") {
        data = await response.json();
        document.querySelector('#tbody');
        var allRow = []
        data.forEach((element, index) => {
            var row = `<tr><td>${index}</td><td>${element.name}</td><td>${element.degree}</td></tr>`
            allRow.push(row);
        });
        document.querySelector('#tbody').innerHTML = allRow.join(' ')
    } else {
        alert("data not Given");
    }

}


const searchData = () => {
    let inputValue = document.getElementById('search').value;
    let tabledata = document.getElementById('data-table');
    let tr = tabledata.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const element = tr[i];
        let td = element.getElementsByTagName('td');

        if (td[0].textContent == inputValue || td[1].textContent.indexOf(inputValue) > -1 || td[2].textContent.indexOf(inputValue) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }

}

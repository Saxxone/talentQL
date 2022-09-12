// @ts-ignore
const startApp = async () => {
    const url = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84';
    let response = null;
    const tableBody = document.querySelector('tbody');
    const nextButton = document.querySelectorAll('[data-foo]');

    function getData(path = url) {
        fetch(url).then((response) => {
            if (!response.ok) throw new Error('An error occurred while fetching data.');
            return response.json();
        }).then(data => {
            response = data.results[0];
            populateTableData(response);
        }).catch(error => {
            console.log(error);
        });
    }

    getData();

    function next() {
        getData(response.paging.next);
    }

    function previous() {
        getData(response.paging.previous);
    }

    function populateTableData(data) {
        let rows = tableBody.children;
        data['1'].forEach((item, index) => {
            let cols = rows[index].children;
            cols[0].innerHTML = item.row;
            cols[1].innerHTML = item.gender;
            cols[2].innerHTML = item.age;
        });
    }
};

document.addEventListener('DOMContentLoaded', startApp);
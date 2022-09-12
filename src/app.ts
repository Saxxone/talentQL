// @ts-ignore
const startApp = async () => {
  const url = 'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84';
  let response = null;
  let currentPage = 1;
  let values = null;
  const tableBody = document.querySelector('tbody');
  const previousButton = document.querySelector('[data-prevbtn]');
  const nextButton = document.querySelector('[data-nextbtn]');
  const label = document.querySelector('[data-pageview]');

  function getData(path) {
    fetch(path).then((response) => {
      if (!response.ok) throw new Error('An error occurred while fetching data.');
      return response.json();
    }).then(data => {
      response = data.results[0];
      populateTableData(response[currentPage]);
    }).catch(error => {
      console.log(error);
    });
  }

  function next() {
    ++currentPage
    if (response[currentPage])
      populateTableData(response[currentPage])
    else {
      console.log(response.paging.next)
      getData(response.paging.next);
    }
  }

  function previous() {
    --currentPage
    if (response[currentPage])
      populateTableData(response[currentPage])
    else {
      getData(response.paging.previous);
    }
  }

  function populateTableData(data) {
    currentPage !== 1 ? previousButton.removeAttribute('disabled') : previousButton.setAttribute('disabled', 'true');

    (response.paging.next || response[currentPage + 1]) ? nextButton.removeAttribute('disabled') : nextButton.setAttribute('disabled', 'true');

    const rows = tableBody.children;

    data.forEach((item, index) => {
      const cols = rows[index].children;
      rows[index].setAttribute('data-entryid', item.id)
      cols[0].innerHTML = item.row;
      cols[1].innerHTML = item.gender;
      cols[2].innerHTML = item.age;
    });
    label.innerHTML = `Showing Page ${currentPage}`
  }

  getData(url);
  previousButton.addEventListener('click', previous);
  nextButton.addEventListener('click', next);
};

document.addEventListener('DOMContentLoaded', startApp);
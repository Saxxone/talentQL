# How Does This Work

# Introduction
The project starts with values being initialized, the API url is initialized to the first page, I also set the table body, next button and previous button to their respective variables.


## Data Fetching

Using the **Fetch API**, I get the values from the randomapi endpoint, I then pass the values gotten to a function named **populateTableData**.
The populateTableData function simply takes values in an array and injects them into the appropriate table rows and columns.

## Page Navigation

I initialized the **currentPage** to **1** for when the first page received. When the user is on page 1, the previous button is disabled, same happens when the user is on the last page. On the last page, the next button is also disabled.  When the user clicks the **previous** button, I check that the page is available on the response gotten from the API, if the page is available, I pass the data to the **populateTableData** function which populates the table. If the page is not available, I check for the **paging.previous** property and pass the url to the **getData** function which fetches the data and passes the data to **populateTableData** and then the table is populated.

This process is repeated when the user clicks the **next** button. In this case however, I pass the value of the **paging.next** property to the **getData** function which fetches the data and passes the data to **populateTableData** and then the table is populated.

Also, inside the **populateTableData** function I set the **data-entryid** attribute to the id of the data item received.


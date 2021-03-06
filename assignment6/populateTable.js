addDataRows = async () => {
    let ds = new DataService();
    // if (debug) { console.log(ds.fetchData())}
    //call the createRow() funciton for each element in the data
    try {
        let response = await ds.fetchData()
        if (debug) {
            console.log('Response: ', JSON.stringify(response))
            console.log('fetched data')
            console.log('getting data', ds.getData())
        }
        ds.getData()
            .results
            .forEach((element) => {
                createRow(document.getElementById("rows"), element)
            })
        if (debug) { console.log('populated table') }
    } catch (err) {
        console.log('Error adding data rows: ', err)
    }
}

// Thanks to Joelvh on this StackOverflow page for this function
//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalize(s)
{
    return s && s[0].toUpperCase() + s.slice(1);
}

// need to update this to update the table successfully.
createRow = (parentElem, rowData) => {
    
    if (debug) { console.log('got inside createRow') }
    //create a new row to populate
    let row = parentElem.insertRow(1)
    
    if (debug) { console.log("this is what createRow() got...", rowData) }
    
    //populate the row with cells for each param
    let cell = row.insertCell(0)
    cell.innerHTML = `${rowData.name.first} ${rowData.name.last}`
    
    let cell1 = row.insertCell(1)
    cell1.innerHTML = capitalize(rowData.gender)
    
    let cell2 = row.insertCell(2)
    cell2.innerHTML = `${rowData.location.street.number} ${rowData.location.street.name}`
    
    let cell3 = row.insertCell(3)
    cell3.innerHTML = rowData.dob.age
    
    let cell4 = row.insertCell(4)
    cell4.innerHTML = rowData.phone
    
    let cell5 = row.insertCell(5)
    var image = document.createElement('img')
    image.src = rowData.picture.large
    cell5.append(image)
    
}


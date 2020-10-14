addDataRows = () => {
    let ds = new DataService();
    //call the createRow() funciton for each element in the data
    ds.getData().forEach((element) => { createRow(document.getElementById("rows"), element) }) 
        
}

createRow = (parentElem, rowData) => {
    //create a new row to populate
    let row = parentElem.insertRow(1)
    
    //populate the row with cells for each param
    let cell = row.insertCell(0)
    cell.innerHTML = rowData.name
    
    let cell1 = row.insertCell(1)
    cell1.innerHTML = rowData.gender
    
    let cell3 = row.insertCell(2)
    cell3.innerHTML = rowData.address
    
    let cell4 = row.insertCell(3)
    cell4.innerHTML = rowData.age
    
    let cell5 = row.insertCell(4)
    cell5.innerHTML = rowData.phoneNumber
    
}


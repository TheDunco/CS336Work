// Psuedo dataservice class with built-in values
try {
  const fetch = require('node-fetch');
} catch {}


class DataService {
    
    // data = [
    //     { name: "Duncan", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7890" },
    //     { name: "Joel", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7891" },
    //     { name: "Alex", gender: "M", address: "Alpha 12", age: 20, phoneNumber: "(123)456-7892" }
    // ];
    constructor() { this.data = [] }
    
    // Returns everything if no params are specified. 
    getData = (numRecords) => {
        return (numRecords === undefined ? this.data
            : this.data.slice(0, numRecords))
    }
    
    // TODO: Make this an async function.
    fetchData = async () => {
        try {
            console.log("fetching data")
            let response = await fetch('https://randomuser.me/api/?results=10');
            
            console.log('is response ok?')
            if (!response.ok) {
                console.log('no')
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }
            console.log('yes')
            // Examine the text in the response
            response.json().then((data) => {
                // console.log(JSON.stringify(data, undefined, 2));
                this.data = data
            });
            
        }
        catch (err) {
            console.log('Fetch Error :-S', err);
        };

    }
}
 
// let ds = new DataService();
// console.log(ds.getData())
// console.log(ds.getData(1))
// console.log(ds.getData(2))
// console.log(ds.getData(3))

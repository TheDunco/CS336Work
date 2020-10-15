// Psuedo dataservice class with built-in values
try {
  const fetch = require('node-fetch');
} catch { }

const debug = true;

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
    
    fetchData = async () => {
        return new Promise( async (resolve, reject) => {
            
            // wait for and fetch the data
            if (debug) { console.log("fetching data") }
            let response = await fetch('https://randomuser.me/api/?results=10')
            
            // check if the response is ok
            if (debug) { console.log('is response ok?') }
            if (!response.ok) {
                // response not ok, print error message and reject
                if (debug) { console.log('no') }
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                reject(response)
            } else {
                // response is ok, resolve and set this.data to the fetched data
                if (debug) { console.log('yes') }
                // Examine the text in the response
                await response.json().then((data) => {
                    // console.log(JSON.stringify(data, undefined, 2));
                    if (debug) { console.log('This is the data: ', data) }
                    this.data = data
                });
                resolve(response)
            };
        })
    }
}
 
// let ds = new DataService();
// console.log(ds.getData())
// console.log(ds.getData(1))
// console.log(ds.getData(2))
// console.log(ds.getData(3))

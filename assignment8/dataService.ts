// Psuedo dataservice class with built-in values
try {
  const fetch = require('node-fetch');
} catch { }

export const debug = false;

export class DataService {
    data: Person[];
    // data = [
        //     { name: "Duncan", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7890" },
        //     { name: "Joel", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7891" },
        //     { name: "Alex", gender: "M", address: "Alpha 12", age: 20, phoneNumber: "(123)456-7892" }
        // ];
    constructor() { this.data = [] }
    
    // Returns everything if no params are specified. 
    getData = (numRecords?: number): Person[] => {
        return (numRecords === undefined ? this.data
            : this.data.slice(0, numRecords))
    }
    
    // fetchData will fetch the data from the api and put it into this.data
    fetchData = async (): Promise<void> => {
        return new Promise( async (resolve, reject) => {
            
            // wait for and fetch the data
            if (debug) { console.log("fetching data") }
            try {
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
                    let json = await response.json()   
                    if (debug) { console.log('This is the data: ', json) }
                    this.data = json
                    // resolve(response)
                };
            }
            catch (err) {
                console.log('Fetch Error :-S', err);
            }
            
        })
    }
}

// Generated by https://quicktype.io
export interface Person {
 gender: string;
 name: Name;
 location: Location;
 email: string;
 login: Login;
 dob: Dob;
 registered: Dob;
 phone: string;
 cell: string;
 id: ID;
 picture: Picture;
 nat: string;
}
 
export interface Dob {
 date: string;
 age: number;
}
 
export interface ID {
 name: string;
 value: string;
}
 
export interface Location {
 street: Street;
 city: string;
 state: string;
 country: string;
 postcode: number;
 coordinates: Coordinates;
 timezone: Timezone;
}
 
export interface Coordinates {
 latitude: string;
 longitude: string;
}
 
export interface Street {
 number: number;
 name: string;
}
 
export interface Timezone {
 offset: string;
 description: string;
}
 
export interface Login {
 uuid: string;
 username: string;
 password: string;
 salt: string;
 md5: string;
 sha1: string;
 sha256: string;
}
 
export interface Name {
 title: string;
 first: string;
 last: string;
}
 
export interface Picture {
 large: string;
 medium: string;
 thumbnail: string;
}

 
// let ds = new DataService();
// console.log(ds.getData())
// console.log(ds.getData(1))
// console.log(ds.getData(2))
// console.log(ds.getData(3))
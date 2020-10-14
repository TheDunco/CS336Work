// Psuedo dataservice class with built-in values
class DataService {
    
    data = [
        { name: "Duncan", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7890" },
        { name: "Joel", gender: "M", address: "Alpha 12", age: 21, phoneNumber: "(123)456-7891" },
        { name: "Alex", gender: "M", address: "Alpha 12", age: 20, phoneNumber: "(123)456-7892" }
    ];
    constructor() { }
    
    // Returns everything if no params are specified. 
    getData = (numRecords) => {
        return (numRecords === undefined ? this.data
        : this.data.slice(0, numRecords))
    }
}
 
// let ds = new DataService();
// console.log(ds.getData())
// console.log(ds.getData(1))
// console.log(ds.getData(2))
// console.log(ds.getData(3))

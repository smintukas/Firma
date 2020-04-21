const express = require('express')
const app = express()
const port = 3500

const cacheHours = 24 * 60 * 60; //24 hours
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Max-Age', `${cacheHours}`);
    next();
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))



class Department {
    constructor(id, name, regionId) {
        this.id = id;
        this.name = name;
        this.regionId = regionId;
    }
}

app.get('/all', (req, res) => {

    const obj1 = new Department(34, "Subaciaus 83", 'abd124')
    const obj2 = new Department(31, "Subaciaus 85", 'abd125')
    res.json([obj1, obj2]);
})
const express = require('express')
const app = express()
const port = 3500

class Department {
    constructor(id, name, regionId) {
        this.id = id;
        this.name = name;
        this.regionId = regionId;
    }
}

const greenHill = new Department(34, "Subaciaus 85", 'abd124')

app.get('/', (req, res) => res.json(greenHill))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
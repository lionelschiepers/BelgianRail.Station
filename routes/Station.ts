/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

const data = [
    {
        StationId: 'Los Angeles',
        Name: 'Los Angeles',
        Country: 'USA'
  
    },
    {
        StationId: 'Madrid',
        Name: 'Madrid',
        Country: 'Spain'
    },
    {
        StationId: 'Gotham',
        Name: 'Gotham City',
        Country: 'USA'
    },
    {
        StationId: 'DarkWeb',
        Name: 'Dark Web',
        Country: 'Dark Earth'
    },
    {
        StationId: 'Earth',
        Name: 'Earth',
        Country: 'Earth'
    },
    {
        StationId: 'Moon',
        Name: 'Moon',
        Country: 'Moon'
    }
]

router.get('/', (req: express.Request, res: express.Response) => {
    res.json(data);
});

router.get('/:id', (req: express.Request, res: express.Response) => {
    let station = data.find(ele => ele.StationId.toString() === req.params.id);
    if (!station) {
        const err = new Error('Not Found');
        err['status'] = 404;
        res.status(404).send(`Journey ${req.params.id} not found`);
        return;
    }

    res.json(station);
});

export default router;
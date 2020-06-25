/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

const data = [
    {
        StationId: 1,
        NameFr: 'Liege',
        NameNl: 'Luik',
        NameEn: 'Liege',
        NameDe: 'Liege'
    },
    {
        StationId: 2,
        NameFr: 'Anvers',
        NameNl: 'Antwerpen',
        NameEn: 'Antwerpen',
        NameDe: 'Antwerpen'
    },
    {
        StationId: 3,
        NameFr: 'Paris',
        NameNl: 'Parijs',
        NameEn: 'Paris',
        NameDe: 'Paris'
    },
    {
        StationId: 4,
        NameFr: 'Madrid',
        NameNl: 'Madrid',
        NameEn: 'Madrid',
        NameDe: 'Madrid'
    },
    {
        StationId: 5,
        NameFr: 'Amsterdam',
        NameNl: 'Amsterdam',
        NameEn: 'Amsterdam',
        NameDe: 'Amsterdam'
    },
    {
        StationId: 6,
        NameFr: 'Lille',
        NameNl: 'Rijsel',
        NameEn: 'Lille',
        NameDe: 'Lille'
    }
]

router.get('/', (req: express.Request, res: express.Response) => {
    res.json(data);
});

router.get('/:id', (req: express.Request, res: express.Response) => {
    let station = data.find(ele => ele.StationId.toString() === req.params.id);
    if (!station) {
        res.status(404).send(`Station ${req.params.id} not found`);
        return;
    }

    res.json(station);
});

export default router;
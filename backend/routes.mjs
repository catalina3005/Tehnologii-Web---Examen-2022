import express from 'express';
import {ship, crewMember} from './repository.mjs';
import {getRecords, postRecord, deleteRecords, getRecord,
headRecord, putRecord, patchRecord, deleteRecord} from './service.mjs';


const router = express.Router();

router.route('/ship')
    .get((request, response) => getRecords(ship, request, response))
    .post((request, response) => postRecord(ship, request, response))
    .delete((request, response) => deleteRecords(ship, request, response))

router.route('/ship/:id')
.get((request, response) => getRecord(ship, request, response))
.head((request, response) => headRecord(ship, request, response))
.put((request, response) => putRecord(ship, request, response))
.patch((request, response) => patchRecord(ship, request, response))
.delete((request, response) => deleteRecord(ship, request, response))

router.route('/crewMember')
    .get((request, response) => getRecords(crewMember, request, response))
    .post((request, response) => postRecord(crewMember, request, response))
    .delete((request, response) => deleteRecords(crewMember, request, response))

router.route('/crewMember/:id')
.get((request, response) => getRecord(crewMember, request, response))
.head((request, response) => headRecord(crewMember, request, response))
.put((request, response) => putRecord(crewMember, request, response))
.patch((request, response) => patchRecord(crewMember, request, response))
.delete((request, response) => deleteRecord(crewMember, request, response))


export default router;
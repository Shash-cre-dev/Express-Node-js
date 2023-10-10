const express = require('express')
const router = express.Router()

const { getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
} = require('../controllers/people')

// Two ways of Setting Up Routes
// One Way

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete(':id', deletePerson)

// Another Way (can chain the methods with same routes)
router.route('/').get(getPeople).post(createPerson) // as they have same route /
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router
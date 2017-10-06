const express = require('express')
const router = express.Router();

/* GET quantity listing. */
router.get('/', (request, response)=> {
    //  knex('quantity').then(quantity =>{
        response.json({
            message: "quantities route"
        });

    // });
});

module.exports = router;

const router = require('express').Router();
const controllers = require('./controllers.js');

// TODO: Connect router to controller functions

router
  .route('/items')
    .get(controllers.getAll)
    .post(controllers.post)


router
  .route('/items/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.deleteOne)



module.exports = router;
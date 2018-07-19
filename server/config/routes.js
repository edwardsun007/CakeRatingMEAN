const cakeControl = require('../controllers/cakeControl.js');


/* note (app)  means that in the file you import this, you need to require('route.js')(app) 
got it? */
module.exports = function(app){
    // get for read
    // this is the first part in those routes,  get('route', functionFromControl)
    /* form submit to here , we need to validate and show error if there is, if not save to db */
    app.get('/cake/:id',cakeControl.getOne);
    
    app.post('/create', cakeControl.create);

    app.put('/cake/:id',cakeControl.put);

    app.get('/cakes',cakeControl.index);

    
    /* skips button get route */
   // app.get('/quotes', quoteControl.quotes);
    
}


var mongoose = require("mongoose");

var Cake = mongoose.model("Cake");

module.exports = {
    // this is the second part in taskAPI , that starts with function(req,res)
    // retrieve all
    index: function(req, res) {
        console.log('Inside Control->Index.');
        Cake.find({},function(err,cakes){
            if(err){
                console.log('Got Error from index:',err);
                res.json({message:"Error",error:err});
            }
            else{
                res.json({message:"Success",data:cakes});
            }
        })
    },
    
    getOne:function(req,res) {
        console.log('Inside Control->getOne..');
        console.log('req.params.id=',req.params.id);
        Cake.findOne({_id:req.params.id},function(err,cake){
            if(err){
                console.log('Got Error from index:',err);
                res.json({message:"Error",error:err});
            }
            else{
                res.json({message:"Success",data:cake});
            }
        })
    },

    // create new cake
    create: function(req, res) {
        console.log('POST DATA',req.body);
        console.log('req.body.baker=',req.body.baker);
        console.log('req.body.image=',req.body.image);

        // add from req to database
        var newCake = new Cake({
            baker:req.body.baker,
            image:req.body.image,
            ratings:{
                rates:[],
                comments:[]
            }
        });
    
        newCake.save(function(err){
            if(err){
                console.log('We have error from control.create!',err);
                res.json({message:"Error",error:err});
            }
            else{
                res.json({message:"Success created!"});
            }
        });
    },

    // put new comment with rating into DB by the id
    put:function(req, res) {
        console.log('POST DATA',req.body);
        console.log('req.params.id=',req.params.id);
        console.log('req.body.rating=',req.body.rating);
        console.log('req.body.comment=',req.body.comment);

        // add from req to database
        Cake.findOneAndUpdate(
            {_id:req.params.id},
            {$push:
                {ratings:
                    {
                     rates:req.body.rating,
                     comments:req.body.comment
                    }
                }
            },function(err,cake){
                if(err){
                    console.log('Update cake got err:',err);
                    res.json(err);
                }else{
                    res.json({message:"update success",data:cake});
                }
            }
        
        );
    },


    // show everything in desc order
    /*quotes: function(req,res){
        Quote.find({}).sort({createdAt:'desc'}).exec(function(err,quotes){
            if(err){
                console.log('Failed to execute this query on db:',err);
            }else{
                console.log('results:',quotes);
                //res.render('quotehome',{quotes});
                res.json({messages:"Success",data:quotes});
            }
        });
    }*/

}
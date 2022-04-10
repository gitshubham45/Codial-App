const Post = require('../models/post');
const User = require('../models/user');



module.exports.home = async function (req, res) {
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title:"Codial | Home",
    //         posts:posts
    //     });
    // });

    try {
        let posts = await Post.find({})
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                }
        })

        let users = await User.find({});


        return res.render('home', {
            title: "Codial | Home",
            posts: posts,
            all_users: users
        });
    } catch(err) {
        console.log('Error', err);
        return;
    }

    //Polpulate the user of each post

    // .exec(function(err,posts){

    //     User.find({},function(err,users){

    //     });


    // })

}

// module.exports.actionName=function(req,res){
//     return res.end('<h1>Module used</h1>')
// }

// module.exports.go=function(req,res){
//     return res.end('<h1>go controller used</h1>')
// }

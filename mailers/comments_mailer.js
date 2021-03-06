const nodemailer = require('../config/nodemailer');


//this is another way of exporting a mrthod 
exports.newComment = (comment)=>{
    
    let htmlString = nodemailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');

    nodemailer.transporter.sendMail({
        from:'codial.development.project@gmail.com',
        to: comment.user.email,
        subject:'New Comment Published',
        html: htmlString
    
    },(err,info)=>{
        if(err){
            console.log('Error in sending email',err);
            return;
        }

        console.log('Message sent',info)
        return;
    })
}
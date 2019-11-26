const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

/*
 * Here is what each of these packages do:
 * 
 * express - Popular web framework built on top of Node.js. We'll be using it for developing REST API.
 * body-parser - Node.js request body parsing middleware which parses the incoming request body before your handlers, and make it available under req.body property. In short, it simplifies the incoming request.
 * cors - Another Express middleware for enabling CORS (Cross-Origin Resource Sharing) requests.
 * express-fileupload - Simple Express middleware for uploading files. It parses multipart/form-data requests, extracts the files if available, and make them available under req.files property.
 * morgan - Node.js middleware for logging HTTP requests.
 * lodash - A JavaScript library which provides utility functions for arrays, numbers, objects, strings, etc.
 */

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.post('/upload-profile-pic', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "profile_pic") to retrieve the uploaded file
            let profile_pic = req.files.profile_pic;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            profile_pic.mv('./uploads/' + profile_pic.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: profile_pic.name,
                    mimetype: profile_pic.mimetype,
                    size: profile_pic.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/upload-photos', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            let data = [];

            //loop all files
            _.forEach(_.keysIn(req.files.photos), (key) => {
                let photo = req.files.photos[key];

                //move photo to uploads directory
                photo.mv('./uploads/' + photo.name);

                //push file details
                data.push({
                    name: photo.name,
                    mimetype: photo.mimetype,
                    size: photo.size
                });
            });

            //return response
            res.send({
                status: true,
                message: 'Files are uploaded',
                data: data
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

//start app 
const port = process.env.PORT || 3000;

app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);
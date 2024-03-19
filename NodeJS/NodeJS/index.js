const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var siblingController = require('./controllers/siblingControllers.js');
var treatmentController = require('./controllers/treatmentControllers.js');
var detailsController = require('./controllers/detailsControllers.js');
var adolescenceController = require('./controllers/adolescenceController.js');
var experienceController = require('./controllers/experienceControllers.js');
var problemsController = require('./controllers/problemsControllers.js');
var commentController = require('./controllers/commentController.js');
var patternController = require('./controllers/patternController.js');
var patientController = require('./controllers/patientControllers.js');
var adolsController = require('./controllers/adolsController.js');
var occController = require('./controllers/occupational.js');
var occController1 = require('./controllers/occupational1.js');
var marital2Controller = require('./controllers/marital2Controller.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200'}));
app.listen(3000, () => console.log('Server started at port :3000'));

app.use('/siblings', siblingController);
app.use('/treatment', treatmentController);
app.use('/details', detailsController);
app.use('/adols',adolescenceController);
app.use('/experiences',experienceController);
app.use('/problems', problemsController);
app.use('/comments', commentController);
app.use('/patterns', patternController);
app.use('/patients', patientController);
app.use('/medicals', adolsController);
app.use('/occs',occController);
app.use('/occupations',occController1);
app.use('/marital2',marital2Controller);

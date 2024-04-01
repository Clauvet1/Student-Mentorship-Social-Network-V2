const express = require('express');
const app = express();

// Initialize Firebase Admin SDK
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/firebase/serviceAccountKey.json'); // Download this from Firebase Console

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-firebase-project.firebaseio.com'
});

// Routes setup
const dataRoutes = require('./routes/dataRoutes');
app.use('/api', dataRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const admin = require('firebase-admin');
    
exports.addData = (req, res) => {
    const { data } = req.body;
    
    // Add data to Firebase Firestore
    const db = admin.firestore();
    db.collection('data').add(data)
        .then(() => {
            res.status(200).json({ message: 'Data added successfully' });
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
};
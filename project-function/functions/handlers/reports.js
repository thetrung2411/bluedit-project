const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.getAllReports = (req, res) => {
    db.collection("reports")
        .orderBy("reportedDate", "desc")
        .get()
        .then(data => {
            let reports = [];
            data.forEach(doc => {
                reports.push({
                    reportId: doc.id,
                    reportedDate: doc.data().reportedDate,
                    type: doc.data().type,
                    reportObject: doc.data().reportObject,
                    description: doc.data().description,
                    status: doc.data().status
                });
            });
            return res.json(reports);
        })
        .catch(err => console.error(err));
};
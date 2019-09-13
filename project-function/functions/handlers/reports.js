const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.getReport = (req, res) => {
  let reportData = {};
  db.doc(`/reports/${req.params.reportId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Report not found" });
      }
      reportData = doc.data();
      reportData.reportId = doc.id;
      return res.json(reportData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.getAllReports = (req, res) => {
  db.collection("reports")
    .orderBy("reportedDate", "desc")
    .get()
    .then(data => {
      let reports = [];
      data.forEach(doc => {
        reports.push({
          reportId: doc.id,
          reportedAt: doc.data().reportedDate,
          type: doc.data().type,
          objectId: doc.data().reportObject,
          description: doc.data().description,
          status: doc.data().status
        });
      });
      return res.json(reports);
    })
    .catch(err => console.error(err));
};

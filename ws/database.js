const mongoose = require("mongoose");
const URI = "mongodb+srv://dev123a:dev123a@clusterdev.cylvt.mongodb.net/odontologia-db?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => console.log("DB is UP"))
  .catch(() => console.log(err));

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
 res.send("<h1>WristTaker</h1><p>Enjoy the selection of wristwatches.</p>");
});
app.listen(PORT, () => {
 console.log("Shop at http://localhost:" + PORT);
});

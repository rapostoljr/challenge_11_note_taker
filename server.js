const express = require("express");
const htmlRoutes  = require("./routes");
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Router
app.use(apiRoutes);
app.use(htmlRoutes);

// Starting server
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
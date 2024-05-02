const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes  = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Router
app.use(apiRoutes);
app.use(htmlRoutes);

// Starting server
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
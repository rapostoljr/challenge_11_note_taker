const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes  = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Router
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Delete note ...

// Starting server.
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
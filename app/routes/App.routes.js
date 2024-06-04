const express = require("express");
const websiteRoutes = require("@routes/Website.routes");
const apiRoutes = require("@routes/Api.routes");
app.use("/", websiteRoutes);
app.use("/api", apiRoutes);

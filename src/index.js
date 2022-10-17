const express = require("express");
const appRouter = require("./routes/app.routes.js");
// const authorizer = require("./middlewares/authorizer");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

// app.use(authorizer);
app.use("/api", appRouter);

const connectedServer = app.listen(PORT, () => {
  console.log(` 🚀 Server is connected and listing in the PORT: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log(`error:`, error.message);
});

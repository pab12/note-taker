const express = require('express');
const HTMLRoutes = require('./routes/HTMLRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api",apiRoutes);
app.use("/",HTMLRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`)
})
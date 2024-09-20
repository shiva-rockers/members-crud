const express = require("express");
const cors = require('cors');
const userController = require("./controllers/member.controller");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/members", userController.getAllMembers);
app.delete("/members/:id", userController.deleteOneMember);
app.put("/members", userController.updateManyByIds);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

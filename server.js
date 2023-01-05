// CONFIGURATION
const app = require("./app");
 
// DEPENDENCIES
require("dotenv").config();
// PORT
const PORT = process.env.PORT;
 
app.listen(PORT, () => {
 console.log(`Server listening on port ${PORT}`);
});

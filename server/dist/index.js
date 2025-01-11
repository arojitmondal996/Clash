import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 7000;
// Middleware (if required later for handling JSON or form data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
    res.send("Hey, it's working... 🙌");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

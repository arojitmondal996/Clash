import express, { Application, Request, Response } from "express";
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT || 7000;

// Middleware (if required later for handling JSON or form data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send("Hey, it's working... 🙌");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

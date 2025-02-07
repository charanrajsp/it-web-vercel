import express from "express";
import cors from "cors";
import chatRoutes from "./Route/chatRoutes.js"; // Import chatbot routes

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chat", chatRoutes); // Set up chatbot routes

const PORT =  4000; // Default to port 4000

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);

});

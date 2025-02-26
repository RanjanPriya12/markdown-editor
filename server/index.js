const express = require("express");
const cors = require("cors");
const { marked } = require("marked");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("markdown-update", (markdown) => {
        const html = marked(markdown);
        io.emit("html-update", html);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

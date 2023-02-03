const app = require("express")();
const fs = require('fs');

app.post("/change", (req, res) => {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        fs.writeFile("./src/Ideas.json", body, (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been updated");
        });
    });
    res.end("ok");
});
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
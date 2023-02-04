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
            console.log("Item has been updated");
        });
    });
    res.end("ok");
});
app.post("/add", (req, res) => {
    let body = "";
    req.on("data", chunk => {
        body += chunk.toString();
    });
    req.on("end", () => {
        fs.readFile("./src/Ideas.json", (err, data) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log(body)
            let json = JSON.parse(data);
            json.push(JSON.parse(body));
            json = JSON.stringify(json);
            fs.writeFile("./src/Ideas.json", json, (err) => {
                if (err) {
                    console.error(err);
                    return;
                };
                console.log("Item has been added");
            });
        });
    });
    res.end("ok");
});
app.post("/delete", (req, res) => {
    let body;
    req.on("data", chunk => {
        body = Number(chunk);
    });
    req.on("end", () => {
        fs.readFile("./src/Ideas.json", (err, data) => {
            if (err) {
                console.error(err);
                return;
            };
            let json = JSON.parse(data);
            console.log(body)
            json = json.filter(item => item.id !== body);
            json = JSON.stringify(json);
            fs.writeFile("./src/Ideas.json", json, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    };
                    console.log("Item has been deleted");
                });
        });
    });
    res.end("ok");
});
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
import app from "./app";
import "./database";
import "./index.css";    // aca esta el queso, si se comenta la linea pasa y carga bootwea

// Server is listening
app.listen(app.get("port"));

console.log("Server on port", app.get("port"));
console.log("Environment:", process.env.NODE_ENV);

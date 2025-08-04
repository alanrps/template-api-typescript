import express from "express";
const app = express();
import { router } from "./routes/router";
import { dataSource } from "./config/database";

async function index() {
    const port = process.env.PORT || 3000;

    try {
        // await dataSource.initialize();
        console.log("Data Source has been initialized!")
    } catch (error) {
        console.error("Error during Data Source initialization", error)
    }
    
    app.use(express.json());
    app.use(router);
    
    app.listen(port, () => {
        console.log(`Aplication is running in port ${port}`)
    });
}

index();
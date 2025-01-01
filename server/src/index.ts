import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dynamoose from "dynamoose";
import serverless from "serverless-http";
import seed from "./seed/seedDynamodb"
/* Route import */
import courseRoutes from "./routes/courseRoutes";
import { createClerkClient, requireAuth } from "@clerk/express";
import userClerkRoutes from "./routes/userClerkRoutes";
import transactionRoutes from "./routes/transactionRoutes";

/* Configs */
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

// setup dynamoose db
if (!isProduction) {
    dynamoose.aws.ddb.local();
}

// connect to clerk api
export const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
})

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

/* routes */
app.get("/", (req, res) => {
    res.send("hello world");
}); 

app.use("/courses", courseRoutes);
app.use("/users/clerk", userClerkRoutes);
app.use("/transactions", requireAuth(), transactionRoutes);

/* server */
const port = process.env.PORT || 3000;
if (!isProduction) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
}

/* run aws production env */
const serverlessApp = serverless(app);
export const handler = async (event: any, context: any) => {
    // trigger seed
    if (event.action === "seed") {
        await seed();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data seeded"})
        }
    } else {
        return serverlessApp(event, context);
    }
}
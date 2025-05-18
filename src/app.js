import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

const app = express();
// the app is just a Express application instance, it supports routing, middleware, and so on

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({ limit: "17kb"})); // Parses JSON bodies with size limit 17KB
app.use(express.urlencoded({extended: true, limit: "17kb"})); // 	Parses form submissions with nested objects, limit 17KB
app.use(express.static("public")); // Serves static files from public/ folder
app.use(cookieParser()); // Parses cookies and makes them available as req.cookies

export default app 

// cors() middleware
// ->  It tells the browser which origins are permitted to access resources from your server.
// When credentials: true is set, it means the server allows cookies, authorization headers, or TLS client certificates to be included in the cross-origin requests.

// When credentials: true is set on the server, it means the server is telling the browser: "It's okay to send cookies, session IDs, or authorization headers in cross-origin requests."
// When the browser makes the request, it will include cookies if the server allows them (via the credentials header in the response).

// TLDR
// it's just telling the browser that if the request comes from an allowed origin, then the browser should send the credentials along with the request.


// express.json() middleware
// Parsing = Transforming data from a raw string format (like JSON) into an accessible JavaScript object and available as req.body.

// express.json() is doing this specifically for Content-Type: application/json


// routes import

import userRouter from './routes/user.routes.js';

app.use('/api/v1/users', userRouter);
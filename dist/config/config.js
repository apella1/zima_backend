import dotenv from "dotenv";
dotenv.config();
const MONGO_DB_USER = process.env.MONGO_DB_USER || "";
const NODE_ENV = process.env.NODE_ENV || "";
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || "";
const MONGO_URL = `mongodb+srv://Apella:jf9SZ4fYwHpeC29u@zima.avmf4kp.mongodb.net/?retryWrites=true&w=majority`;
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
const MONGO_URL_LOCAL = `mongodb+srv://Apella:jf9SZ4fYwHpeC29u@zima.avmf4kp.mongodb.net/?retryWrites=true&w=majority`;
// config object
const config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};
if (NODE_ENV === "production") {
    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
}
else if (NODE_ENV === "development") {
    config.mongo.url = MONGO_URL_LOCAL;
    config.server.port = SERVER_PORT;
}
export default config;
//# sourceMappingURL=config.js.map
import type { Mongoose } from "mongoose";

declare global {
    namespace globalThis {
        var mongoose: {
            connection: Mongoose | null
            promise: Promise<Mongoose> | null
        } | null;
    }
}
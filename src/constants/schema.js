import { schema } from "normalizr";

export const userSchema = new schema.Entity("users");

export const convSchema = new schema.Entity("conversations", {
  user: [userSchema]
});

export const messageSchema = new schema.Entity("messages");

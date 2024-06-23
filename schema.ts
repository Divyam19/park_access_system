import {pgTable,serial,text,varchar} from "drizzle-orm/pg-core";

export const users=pgTable('users',{
    id:serial('id').primaryKey(),
    name:text("full_name"),
    phone: varchar('phone',{length:26}),
});


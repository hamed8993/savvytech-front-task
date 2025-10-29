import type { ItemType } from "./item.type";

export type FormObjectType = Pick<ItemType, "title" | "subtitle">;

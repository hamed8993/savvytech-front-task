import type { ItemType } from "../types/item.type";

export function generateFakeItems(count: number): ItemType[] {
  return Array.from({ length: count }, (_, index) => ({
    id: Math.random().toString(36).substr(2, 9),
    title: `Item ${index + 1} Title`,
    subtitle: `This is the subtitle for item ${
      index + 1
    }. It contains more detailed description about the item.`,
    createdAt: new Date(Date.now() - Math.random() * 10000000000),
  }));
}

export const fakeItems = generateFakeItems(5);

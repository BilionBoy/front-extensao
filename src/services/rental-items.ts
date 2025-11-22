// src/services/rental-items.ts
// Serviço simples que usa localStorage para mocks.
// API: listItems(), createItem(), updateItem(), deleteItem(), seedDefaults()

export type RentalItem = {
    id: string;
    name: string;
    price: number;
    icon?: string;
};

const STORAGE_KEY = "rentalItems_v1";

const defaultItems: RentalItem[] = [
    { id: "mesa", name: "Mesa", price: 50, icon: "🪑" },
    { id: "cadeira-sem", name: "Cadeira sem apoio", price: 15, icon: "🪑" },
    { id: "cadeira-com", name: "Cadeira com apoio", price: 20, icon: "🪑" },
    { id: "geleira", name: "Geleira 360L", price: 80, icon: "❄️" },
    { id: "tampao", name: "Tampão redondo (6 lugares)", price: 35, icon: "⭕" },
    { id: "toalha", name: "Toalha Oxford", price: 25, icon: "🧺" },
];

function read(): RentalItem[] {
    try {
        if (typeof window === "undefined") return defaultItems;
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaultItems.slice();
        return JSON.parse(raw) as RentalItem[];
    } catch {
        return defaultItems.slice();
    }
}

function write(items: RentalItem[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch { }
}

export function listItems(): RentalItem[] {
    return read();
}

export function seedDefaults() {
    write(defaultItems.slice());
    return defaultItems.slice();
}

export function createItem(data: Omit<RentalItem, "id">) {
    const items = read();
    const id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
    const newItem: RentalItem = { id, ...data };
    items.push(newItem);
    write(items);
    return newItem;
}

export function updateItem(id: string, patch: Partial<Omit<RentalItem, "id">>) {
    const items = read();
    const idx = items.findIndex((i) => i.id === id);
    if (idx === -1) return null;
    items[idx] = { ...items[idx], ...patch };
    write(items);
    return items[idx];
}

export function deleteItem(id: string) {
    const items = read().filter((i) => i.id !== id);
    write(items);
    return items;
}

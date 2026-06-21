import { fetchRandomItem, fetchAllItems } from '../services/itemService.js';

export const getRandomItem = async (req, res) => {
    const item = await fetchRandomItem();
    res.json({ item });
};

export const getAllItems = async (req, res) => {
    try {
        const items = await fetchAllItems();
        res.json({ items });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

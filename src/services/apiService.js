const apiUrl = 'https://dashboard.elering.ee/api';

export async function getPriceData({ start, end }) {

    const params = new URLSearchParams({
        start,
        end,
    });

    const response = await fetch(`${apiUrl}/nps/price?${params}`);
    return response.json();
}

export async function getCurrentPrice() {
    const response = await fetch(`${apiUrl}/nps/price/EE/current`);
    return response.json();
}

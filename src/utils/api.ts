export async function sendMessageAPI(idInstance: string, apiTokenInstance: string, phoneNumber: string, message: string) {
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const payload = { chatId: `${phoneNumber}@c.us`, message };
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}
export async function sendMessageAPI(idInstance: string, apiTokenInstance: string, phoneNumber: string, message: string) {
    const url = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const payload = { chatId: `${phoneNumber}@c.us`, message };
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
}

export async function receiveMessagesAPI(idInstance: string, apiTokenInstance: string) {
    const url = `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;
    return fetch(url).then((response) => response.json());
}

export async function deleteNotificationAPI(idInstance: string, apiTokenInstance: string, data: number) {
    const url = `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data}`;
    return fetch(url, {
        method: "DELETE",
    })
}


export async function sendInfo (url, data) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let json = await response.text();
        console.log(json);
    } catch (error) {
        console.error(error);
        return false;
    }
    return true;
}
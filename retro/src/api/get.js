const toJson = async (res) => {
    const js = await res.json()
    if (res.ok) {
        return js
    } else {
        throw new Error(js.message)
    }
}

export const getMainAPI = async () => {
    const resp = await fetch(`https://your-domain.com`, {
        method: "GET",
        credentials: "same-origin",
    })
    return await toJson(resp)
}
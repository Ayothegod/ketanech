
export const sendContactData = async(url, data) => {
     fetch(url, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept:"application/json"
        },
        body: JSON.stringify(data)
    })
}
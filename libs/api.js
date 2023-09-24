
//  for any post request
export const sendApiData = async (url, data) => {
     fetch(url, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Accept:"application/json"
        },
        body: JSON.stringify(data)
    })
}
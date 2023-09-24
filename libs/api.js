//  for any post request
export const sendApiData = (url, data) => {
  const res = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};

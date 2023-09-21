function getAccessToken() {
  return JSON.parse(
    decodeURIComponent(
      document.cookie.split("; ").reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.split("=")[0]]: currentValue.split("=")[1],
        }),
        {}
      )["__wtoken"]
    )
  )["accessToken"];
}

function getOrderId() {
  return window.location.href.split('/').at(-2)
}

async function getGroupOrderDetails() {
  const accessToken = getAccessToken();
  const orderId = getOrderId();
  let myHeaders = new Headers();
  myHeaders.append("accept", "application/json, text/plain, */*");
  myHeaders.append("accept-language", "en-US,en;q=0.9,he;q=0.8");
  myHeaders.append("cache-control", "no-cache");
  myHeaders.append("authorization", `Bearer ${accessToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const response = await fetch(
    `https://restaurant-api.wolt.com/v1/group_order/${orderId}`,
    requestOptions
  )
  return response.json()
}

function getCibusFriendsNames() {
  return [...document.querySelectorAll("#friendsList label span")].map(x => x.innerText)
}
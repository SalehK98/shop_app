async function getData() {
  let data;
  fetch("https://63fa279abeec322c57ee67b5.mockapi.io/shop/shoe")
    .then((res) => {
      if (!res.ok) {
        throw new Error("response was not ok");
      }
      return res.json();
    })
    .then((results) => {
      console.log(results);
      data = results;
    })
    .catch((err) => {
      console.log("Error", err);
    });
  return data;
}

export default getData;

const getData = () => {
  fetch("https://63fa279abeec322c57ee67b5.mockapi.io/shop/shoe")
    .then((res) => {
      if (!res.ok) {
        throw new Error("response was not ok");
      }
      return res.json();
    })
    .then((data) => data)
    .catch((err) => {
      console.log("Error", err);
    });
};

export default getData;

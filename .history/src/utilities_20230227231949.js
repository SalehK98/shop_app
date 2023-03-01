const getData = () => {
  fetch("https://63fa279abeec322c57ee67b5.mockapi.io/shop/shoe")
    .then((res) => {
      if (res.ok) {
        res.json();
      } else {
        throw er;
      }
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log("Error", err);
    });
};

export default getData;

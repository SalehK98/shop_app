const getData = () => {
  fetch("https://63fa279abeec322c57ee67b5.mockapi.io/shop/shoe")
    .then((res) => res.JSON())
    .then((data) => console.log(data));
};

export default getData;

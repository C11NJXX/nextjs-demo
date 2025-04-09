const Peach = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res("simulate");
    }, 3000);
  });
  return <div>Peach</div>;
};

export default Peach;

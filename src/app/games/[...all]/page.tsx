const Details = async ({ params }: { params: { all: string[] } }) => {
  const { all } = await params;
  return (
    <div>
      {all.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default Details;

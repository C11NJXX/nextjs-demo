const GameId = async ({ params }: { params: { gameId: string } }) => {
  const { gameId } = params;
  return <div>GameId: {gameId}</div>;
};

export default GameId;

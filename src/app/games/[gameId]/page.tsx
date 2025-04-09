const GameId = async ({ params }: { params: { gameId: string } }) => {
  const { gameId } = await params;
  return <div>GameId: {gameId}</div>;
};

export default GameId;

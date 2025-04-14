import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);
  return movie
    ? Response.json(movie)
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movieId = +id;
  //find if movie-id exist
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return new Response("Movie not exists", { status: 404 });
  }
  //movie exists => find index and update movie
  const updateMovie = await req.json();
  const movieIndex = movies.findIndex((m) => m.id === movieId);
  movies[movieIndex] = { ...movie, ...updateMovie };
  return new Response(JSON.stringify(movies[movieIndex]), { status: 200 });
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieId = +id;
  //find if exists
  const index = movies.findIndex((m) => m.id === movieId);
  if (index === -1) {
    return new Response("Movie not found", { status: 404 });
  }
  //Delete
  movies.splice(index, 1);
  return Response.json(movies);
}

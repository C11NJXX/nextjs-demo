import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: String } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);
  return movie
    ? Response.json(movie)
    : new Response("Movie not found", { status: 404 });
}

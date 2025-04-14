import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

export async function POST(req: Request) {
  const newMovie = await req.json();
  movies.push(newMovie);
  return Response.json(movies);
}

import { NextRequest } from "next/server";
import { movies } from "./db";

// export async function GET() {
//   return Response.json(movies);
// }

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryParam = searchParams.get("query");
  //filter
  const filteredMovies = queryParam
    ? movies.filter((m) => m.name.toLowerCase().includes(queryParam))
    : movies;
  return Response.json(filteredMovies);
}

export async function POST(req: Request) {
  const newMovie = await req.json();
  movies.push(newMovie);
  return Response.json(movies);
}

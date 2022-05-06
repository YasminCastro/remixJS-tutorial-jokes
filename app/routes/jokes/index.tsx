import { db } from "~/utils/db.server";

export default async function JokesIndexRoute() {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });

  console.log(randomJoke);

  return (
    <div>
      <p>Here's a random joke:</p>
      <p>I was wondering why the frisbee was getting bigger, then it hit me.</p>
    </div>
  );
}

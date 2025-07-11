import GoToButton from "./GoToPage";
import SpaceXPage from "./spacex/[spacex]/page";

export default function PostFormPage() {
  return (
    <div>
      <p>
        9. Create a Next.js 15 setup where data is fetched from a GraphQL API in
        a Server Component using Apollo Client (or any GraphQL client). The
        Server Component should fetch a paginated list of items (e.g., books,
        movies, or products) and pass this data to a Client Component, which
        displays the items and provides pagination controls for navigating
        through the dataset.
      </p>
      <GoToButton/>
    </div>
  );
}

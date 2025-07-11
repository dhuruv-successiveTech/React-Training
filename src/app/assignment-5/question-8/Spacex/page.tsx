import client from "../apolloClient";
import { gql } from "@apollo/client";
import Launches from "./Launches";

const GET_LAUNCHES = gql`
  query ExampleQuery {
    company {
      ceo
    }
    landpads {
      attempted_landings
      id
      wikipedia
      status
      details
      full_name
    }
  }
`;

export default async function SpaceXPage() {
  const { data } = await client.query({ query: GET_LAUNCHES });


  return <Launches launches={data} />;
}

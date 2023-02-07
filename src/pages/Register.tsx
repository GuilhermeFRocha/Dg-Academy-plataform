import { ApolloClient, gql, useQuery } from "@apollo/client";

export function Register() {
  const GET_USERS = gql`
    query MyQuery {
      subscribers {
        createdAt
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  console.log(data);

  return <ul></ul>;
}

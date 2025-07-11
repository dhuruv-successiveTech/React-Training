
import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
  } from '@apollo/client';
  
 
  const spaceXLink = new HttpLink({
    uri: 'https://spacex-production.up.railway.app/',
  });
  

  
  const client = new ApolloClient({
    link: spaceXLink,
    cache: new InMemoryCache(),
  });
  
  export default client;
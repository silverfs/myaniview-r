import { useQuery, gql } from "@apollo/client";


const GET_MANGA = gql`
query GetManga($id: Int!) 
  {  
  Media(id: $id) {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      extraLarge
    }
    description
    chapters
    characters {
      edges {
        id
      }
    }
    status
    synonyms
    startDate {
      year
      month
      day
    }
    isFavourite
    countryOfOrigin
    format
    countryOfOrigin
    genres
  }
}
`

export const useManga = (id) => {
  const { error, data, loading } = useQuery(GET_MANGA, {
      variables: {
          id,
      }
  });
  
  // dir > log for non-string console messages.
  // console.dir({ error, loading, data });
  return {
      error,
      data,
      loading,
  }
}
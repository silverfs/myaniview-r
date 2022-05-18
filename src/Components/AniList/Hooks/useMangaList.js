import { useQuery, gql } from '@apollo/client'

const GET_MANGA = gql`
{
  Page(perPage: 10){
    media( type: MANGA) {
      id,
      title {
        romaji
        english
      }
      coverImage {
        medium
      }
    }
  }
}
`

export const useMangaList = () => {
    const { error, data, loading } = useQuery(GET_MANGA);
    // dir > log for non-string console messages.
    // console.dir({ error, loading, data });
    return {
        error,
        data,
        loading,
    }
}
import { useQuery, gql } from '@apollo/client'


const GET_CURRENT_MANGA = gql`
query GetCurrentManga($userName: String!)
    {
    Page(perPage: 10){
        mediaList(userName: $userName, status: CURRENT, type: MANGA) {
            media {
                id
                title {
                romaji
                english
                native
                userPreferred
                }
                coverImage {
                medium
                }
            }
        }
    }
    }
`

export const useCurrentManga = (userName) => {
    const { error, data, loading } = useQuery(GET_CURRENT_MANGA, {
        variables: {
            userName,
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
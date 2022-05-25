import { useQuery, gql } from '@apollo/client'

const GET_PROFILE = gql`
query GetProfile($userName: String!)
{
User (search: $userName) {
    id
    name
    about
    avatar {
        large
        medium
    }
    bannerImage
    updatedAt
    }
}
`;

export const useProfile = (userName) => {
    const { error, data, loading } = useQuery(GET_PROFILE, {
        variables: {
            userName,
        }
    });

    return {
        error,
        data,
        loading,
    }


}
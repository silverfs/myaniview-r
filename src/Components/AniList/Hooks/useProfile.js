import { useQuery, gql } from '@apollo/client'

const GET_PROFILE = gql`
query {
    User (search: "SilverFS") {
        id
        name
        about
        avatar {
            large
            medium
        }
        bannerImage
    }
}
`;

export const useProfile = () => {
    const { error, data, loading } = useQuery(GET_PROFILE);
    // dir > log for non-string console messages.
    //console.dir({ error, loading, data });

    return {
        error,
        data,
        loading,
    }

    
}
import gql from 'graphql-tag';

export default gql`
  query Notifications {
    notifications {
      id
      type
      notifiable_id
      notifiable_type
      data
      read_at
      created_at
      updated_at
    }
  }
`;

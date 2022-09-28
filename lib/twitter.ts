import axios from "axios";

const USER_FIELDS = [
  'created_at',
  'location',
  'name',
  'profile_image_url',
  'username',
  'verified'
]

export const fetchUserData = async (username: string) => {
  const token = process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN;
  const userFields = USER_FIELDS.join(',');
  const response = await axios.get(
    `https://api.twitter.com/2/users/by/username/${username}?user.fields=${userFields}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.data;
};

import type { NextApiRequest, NextApiResponse } from 'next';
import { fetchUserData } from '../../../lib/twitter';


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const username = req.query.username as string;
  if (username) {
    try {
      const data = await fetchUserData(username);
      res.status(200).json({ data });
    } catch (error) {
      res.status(400).json({ error: 'Bad Request To Twitter' });
    }
  } else {
    res.status(400).json({ error: 'No username provided' });
  }
}

export default handler;

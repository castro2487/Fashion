import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TCommonObject>
) {
  const slug = req.query.slug;

  res.status(200).json({
    slug,
    revalidatedAt: new Date().toLocaleString(),
  });
}

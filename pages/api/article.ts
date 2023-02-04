// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchArticle, fetchArticles } from "../../utils/articles";

type Data = {
  article: any;
};

const apiKey =
  "27d2c2e08fb27734661eaf85c7db6c5818d6f4dff83789806777922e7dcb4a2fe";
const userId =
  "163464c7cce742cbe86250df5a84e66918f84a511337a9769015b7e9389170e48";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const slug = req.body;

  const data = await fetchArticle(slug);

  if (data) {
    res.status(200).json({ article: data });
  }
}

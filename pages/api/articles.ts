// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchArticles } from "../../utils/articles";

type Data = {
  article: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetchArticles();

  //   const parseBody = JSON.parse(req.body);
  if (data) {
    res.status(200).json({ article: data });
  } else {
    res.status(400).json({ article: "No article found" });
  }
}

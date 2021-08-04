// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../utils/db";

type Data = {
  name: string;
  batch: any;
};
const headers: { "api-key"?: string } = {
  "api-key": process.env.FOREM_API_KEY,
};

const fetchFromForem = async () => {
  const r = await fetch(`https://dev.to/api/articles/me`, { headers });
  const data = await r.json();
  return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    var batch = db.batch();

    const foremArticles = await fetchFromForem();

    foremArticles.forEach((doc: any) => {
      batch.set(db.collection("col").doc(), doc);
    });

    batch.commit();

    res.status(200).json({ name: "John Doe", batch });
  } catch (err) {}
}

import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const entries = await db.collection("col").get();
    const entriesData = entries.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
};

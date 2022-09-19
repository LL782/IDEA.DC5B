import { NextApiResponse, NextApiRequest } from "next";

import { storeInFirestore } from "../../src/webActions/storeInFirestore";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const doc: WebActionDocument = JSON.parse(req.body);

  const { data, error } = await storeInFirestore(doc);

  if (error) {
    console.error("Error with Web Action handler: ", error);
  }
  return res.status(200).json(data);
}

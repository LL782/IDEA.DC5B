import { NextApiResponse, NextApiRequest } from "next";
import { clearDisallowed } from "../../webActions/dataManagement/clearDisallowed";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { data, error } = await clearDisallowed();

  if (error) {
    console.error("Error with Web Action handler: ", error);
  }
  return res.status(200).json(data);
}

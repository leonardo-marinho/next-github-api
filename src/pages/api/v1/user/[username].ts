import { GithubUser } from "@/interfaces";
import { GithubService } from "@/services/Github.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<GithubUser>) {
  const { username } = req.query;
  const user = await GithubService.getUser(username as string);
  res.status(200).json(user);
}
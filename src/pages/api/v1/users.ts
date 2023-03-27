import { GithubRepo, GithubUser } from "@/interfaces";
import { GithubService } from "@/services/Github.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<GithubUser[]>) {
  const users = await GithubService.getUsers();
  res.status(200).json(users);
}
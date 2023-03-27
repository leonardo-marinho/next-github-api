import { GithubRepo, GithubUser } from "@/interfaces";
import { GithubService } from "@/services/Github.service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<GithubRepo>) {
  const { username } = req.query;
  const repo = await GithubService.getUserRepos(username as string);
  res.status(200).json(repo);
}
import { GithubRepo, GithubUser } from "@/interfaces";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserRepos() {
  const router = useRouter();

  const [repos, setRepos] = useState<GithubRepo[]>();
  const { username } = router.query;

  useEffect(() => {
    if (!username) return;

    const fetchRepos = async () => {
      const response = await fetch(`/api/v1/user/${username}/repos`);
      const data = await response.json();
      setRepos(data);
    }
    fetchRepos();
  }, [username])

  if (!repos) return null;

  return (
    <>
      <Head>
        <title>Repos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.id}</td>
                <td>{repo.name}</td>
                <td><a href={repo.url}>{repo.url}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
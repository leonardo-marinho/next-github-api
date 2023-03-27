export class GithubService {
  static async getUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
  }

  static async getUserRepos(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    return data;
  }

  static async getUsers() {
    const response = await fetch(`https://api.github.com/users`);
    const data = await response.json();
    return data;
  }
}
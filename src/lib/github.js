import { Octokit } from 'octokit'

const TARGET_USERNAME = 'franciscocoya'
const TARGET_REPO = 'franciscocoya'

const octokit = new Octokit({
  auth: process.env.VITE_GITHUB_ACCESS_TOKEN,
})

/**
 * Get the latest release version from a GitHub repository.
 */
const getRepoLatestReleaseVersion = async (owner, repo) => {
  try {
    const response = await octokit.request(
      'GET /repos/{owner}/{repo}/releases/latest',
      {
        owner: TARGET_USERNAME,
        repo: TARGET_REPO,
      },
    )

    const latestVersion = response.data.tag_name
    return latestVersion
  } catch (error) {
    return null
  }
}

export { getRepoLatestReleaseVersion }

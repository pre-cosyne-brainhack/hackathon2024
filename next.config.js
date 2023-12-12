/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
let assetPrefix = ''
let basePath = ''
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    REGISTRATION_URL: 'https://docs.google.com/forms/d/e/1FAIpQLSc2Z_PTM8bGo_ViJ9vIWwCZ64zxGll6KlT5tKdEEWaEkE9tCA/viewform?usp=sf_link',
    PROJECTS_SUBMISSION_URL: 'TBD',

    MATTERMOST_URL: 'https://mattermost.brainhack.org/brainhack/channels/pre-cosyne-brainhack',
    GITHUB_URL: 'https://github.com/pre-cosyne-brainhack/hackathon2024',
    MAPS_URL: 'https://maps.app.goo.gl/opcrzuDBAvznkunQA',
    OHBM_HACKATHON_URL: 'https://github.com/ohbm/hackathon2023',
  },
}

module.exports = nextConfig

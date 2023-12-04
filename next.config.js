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
    REGISTRATION_URL: 'TBD',
    PROJECTS_SUBMISSION_URL: 'TBD',

    MATTERMOST_URL: 'TBD',
    GITHUB_URL: 'https://github.com/cosyne-brainhack/',
    MAPS_URL: 'https://maps.app.goo.gl/opcrzuDBAvznkunQA',
    OHBM_HACKATHON_URL: 'https://github.com/ohbm/hackathon2023',
  },
}

module.exports = nextConfig

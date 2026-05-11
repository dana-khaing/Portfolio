import { useState, useEffect } from 'react'

interface GitHubData {
  avatar_url: string
  public_repos: number
  followers: number
  following: number
  bio: string | null
}

const FALLBACK: GitHubData = {
  avatar_url: 'https://github.com/dana-khaing.png',
  public_repos: 13,
  followers: 4,
  following: 5,
  bio: 'Software Engineer & Full-Stack Developer',
}

export function useGitHub() {
  const [data, setData] = useState<GitHubData>(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/dana-khaing')
      .then(r => r.json())
      .then((json: GitHubData) => {
        setData({
          avatar_url: json.avatar_url || FALLBACK.avatar_url,
          public_repos: json.public_repos ?? FALLBACK.public_repos,
          followers: json.followers ?? FALLBACK.followers,
          following: json.following ?? FALLBACK.following,
          bio: json.bio || FALLBACK.bio,
        })
      })
      .catch(() => {/* use fallback */})
      .finally(() => setLoading(false))
  }, [])

  return { ...data, loading }
}

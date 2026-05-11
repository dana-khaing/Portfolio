import { useState, useEffect } from 'react'

interface GitHubData {
  avatar_url: string
  name: string | null
  bio: string | null
  location: string | null
  public_repos: number
  followers: number
  following: number
}

const FALLBACK: GitHubData = {
  avatar_url: 'https://github.com/dana-khaing.png',
  name: 'Dana Khaing',
  bio: 'Full-Stack Code Mage conjuring scalable web applications.',
  location: 'London, UK',
  public_repos: 13,
  followers: 4,
  following: 5,
}

export function useGitHub() {
  const [data, setData] = useState<GitHubData>(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/dana-khaing')
      .then(r => r.json())
      .then((json: GitHubData) => {
        setData({
          avatar_url:   json.avatar_url   || FALLBACK.avatar_url,
          name:         json.name         || FALLBACK.name,
          bio:          json.bio          || FALLBACK.bio,
          location:     json.location     || FALLBACK.location,
          public_repos: json.public_repos ?? FALLBACK.public_repos,
          followers:    json.followers    ?? FALLBACK.followers,
          following:    json.following    ?? FALLBACK.following,
        })
      })
      .catch(() => {/* use fallback */})
      .finally(() => setLoading(false))
  }, [])

  return { ...data, loading }
}

const API_URL = import.meta.env.VITE_API_URL

export const api = async (url: string, options?: RequestInit) => {

  const res = await fetch(`${API_URL}${url}`, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  })

  if (!res.ok) {
    throw new Error("API error")
  }

  return res.json()
}
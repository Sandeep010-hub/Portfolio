'use client'

import { useEffect } from 'react'
import { useProfileStore } from '../../store/useProfileStore'

export const ClientSEO = () => {
  const mode = useProfileStore((state) => state.mode)

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }

    if (mode === 'explorer') {
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23f59e0b"/><text x="50" y="65" font-size="50" font-family="sans-serif" font-weight="bold" fill="%23ffffff" text-anchor="middle">YS</text></svg>'
    } else {
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23ffffff"/><text x="50" y="65" font-size="50" font-family="sans-serif" font-weight="bold" fill="%23000000" text-anchor="middle">YS</text></svg>'
    }
  }, [mode])

  const explorerSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'AEO Comprehensive Guide & Agent Architect',
    author: {
      '@type': 'Person',
      name: 'Yaswanth Sai Sandeep Kalagatla'
    }
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Yaswanth Portfolio',
    applicationCategory: 'WebApplication',
    author: {
      '@type': 'Person',
      name: 'Yaswanth Sai Sandeep Kalagatla'
    }
  }

  const activeSchema = mode === 'explorer' ? explorerSchema : softwareSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(activeSchema) }}
    />
  )
}

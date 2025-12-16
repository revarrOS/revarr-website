import { Share2, Twitter, Linkedin, Facebook, Mail, Link as LinkIcon, Check } from 'lucide-react'
import { useState } from 'react'

interface SocialShareProps {
  title?: string
  description?: string
  url?: string
}

export default function SocialShare({
  title = 'revARR - Partner-Led Revenue Operating System',
  description = 'Transform partner ecosystem chaos into predictable revenue. World\'s first Partner-Led Revenue Operating System.',
  url = typeof window !== 'undefined' ? window.location.href : 'https://revarr.com'
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=revARR,PartnerRevenue,ChannelStrategy`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        })
      } catch (err) {
        console.log('Share cancelled or failed')
      }
    } else {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-all text-sm font-medium"
        aria-label="Share this page"
      >
        <Share2 size={18} />
        <span>Share</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-2xl p-4 z-50">
            <div className="space-y-2">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 hover:bg-slate-700 rounded-lg transition-all group"
              >
                <Twitter size={20} className="text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 text-sm font-medium">Share on Twitter</span>
              </a>

              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 hover:bg-slate-700 rounded-lg transition-all group"
              >
                <Linkedin size={20} className="text-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 text-sm font-medium">Share on LinkedIn</span>
              </a>

              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 hover:bg-slate-700 rounded-lg transition-all group"
              >
                <Facebook size={20} className="text-[#1877F2] group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 text-sm font-medium">Share on Facebook</span>
              </a>

              <a
                href={shareLinks.email}
                className="flex items-center gap-3 px-3 py-2 hover:bg-slate-700 rounded-lg transition-all group"
              >
                <Mail size={20} className="text-slate-400 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200 text-sm font-medium">Share via Email</span>
              </a>

              <button
                onClick={copyToClipboard}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-slate-700 rounded-lg transition-all group"
              >
                {copied ? (
                  <Check size={20} className="text-emerald-400" />
                ) : (
                  <LinkIcon size={20} className="text-slate-400 group-hover:scale-110 transition-transform" />
                )}
                <span className="text-slate-200 text-sm font-medium">
                  {copied ? 'Link Copied!' : 'Copy Link'}
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
'use client'

import Link from 'next/link'
import styles from './shareIcons.module.scss'
import { SOCIAL_MEDIA_SHARE_LINKS } from '@/lib/constants'

import {
  RiTwitterXFill,
  RiWhatsappLine,
  RiLinkedinFill,
  RiFacebookFill,
} from 'react-icons/ri'
import { createSocialMediaShareLink } from '@/lib/socialMedia'

function IconWrapper({ linkHref, children }) {
  return (
    <Link href={linkHref} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  )
}

function ShareIcons({ pageUrlToShare, iconSize, iconColor }) {
  
  const createLink = (socialMediaDenomination) => {
    return createSocialMediaShareLink(socialMediaDenomination, pageUrlToShare)
  }

  return (
    <div className={styles.shareIconsContainer}>
      <IconWrapper linkHref={createLink('twitter')}>
        <RiTwitterXFill size={iconSize} color={iconColor} />
      </IconWrapper>

      <IconWrapper linkHref={createLink('linkedin')}>
        <RiLinkedinFill size={iconSize} color={iconColor} />
      </IconWrapper>

      <IconWrapper linkHref={createLink('facebook')}>
        <RiFacebookFill size={iconSize} color={iconColor} />
      </IconWrapper>

      <IconWrapper linkHref={createLink('whatsapp')}>
        <RiWhatsappLine size={iconSize} color={iconColor} />
      </IconWrapper>
    </div>
  )
}

export default ShareIcons

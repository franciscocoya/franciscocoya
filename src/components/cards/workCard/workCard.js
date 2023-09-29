'use client'

import styles from './workCard.module.scss'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { PiGithubLogoFill } from 'react-icons/pi'
import BaseBadge from '@/components/badges/BaseBadge'
import { useEffect, useRef } from 'react'

function WorkCard({
  bgImage,
  title,
  status,
  techStack,
  gridRowPosition,
  gridColPosition,
  isFeatured,
  work_url,
  githubRepo_url,
  animationDelay = 0,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.1 })

  const animationControls = useAnimation()

  const handleRedirectToDemoWebsite = () => {
    window.open(work_url, '_blank')
  }

  const handleRedirectToGiHubRepo = () => {
    window.open(githubRepo_url, '_blank')
  }

  useEffect(() => {
    if (isInView) {
      animationControls.start('visible')
    }
  }, [isInView])

  return (
    <div
      ref={ref}
      style={{
        gridRow: gridRowPosition,
        gridColumn: gridColPosition,
      }}
    >
      <motion.article
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animationControls}
        transition={{ duration: 0.3, delay: animationDelay, ease: 'easeInOut' }}
        className={`${styles.workCard} ${
          isFeatured && styles.workCard__featured
        }}`}
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backdropFilter: 'blur(10px)',
        }}
        whileHover={{
          cursor: '/assets/images/custom_cursor.png',
          transition: { duration: 0.1, ease: 'linear' },
        }}
      >
        <div className={styles.workCard__techStack}>
          {techStack.length > 0 &&
            techStack.map((tech) => {
              return <BaseBadge key={tech} text={tech} />
            })}
        </div>

        <span>{status}</span>
        <h2>{title}</h2>

        <div className={styles.buttonsContainer}>
          {githubRepo_url && (
            <button
              className={styles.workCard__github_button}
              onClick={handleRedirectToGiHubRepo}
              title="View GitHub Repository"
            >
              <PiGithubLogoFill
                size="2.5rem"
                color="#ffffff"
                id="workCardButtonGitHubIcon"
              />
            </button>
          )}
          {work_url && (
            <button
              className={styles.workCard__button}
              onClick={handleRedirectToDemoWebsite}
              title="View demo project"
            >
              <FiArrowUpRight
                size="3rem"
                color="#121212"
                id="workCardButtonArrowIcon"
              />
            </button>
          )}
        </div>
      </motion.article>
    </div>
  )
}

export default WorkCard

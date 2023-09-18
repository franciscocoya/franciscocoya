import styles from './workCard.module.scss'

import { FiArrowUpRight } from 'react-icons/fi'
import { PiGithubLogoFill } from 'react-icons/pi'
import BaseBadge from '@/components/badges/BaseBadge'

function WorkCard({
  bgImage,
  title,
  status,
  techStack,
  gridRowPosition,
  isFeatured,
  work_url,
  githubRepo_url,
}) {
  const handleRedirectToDemoWebsite = () => {
    window.open(work_url, '_blank')
  }

  const handleRedirectToGiHubRepo = () => {
    window.open(githubRepo_url, '_blank')
  }

  return (
    <article
      className={`${styles.workCard} ${
        isFeatured && styles.workCard__featured
      }}`}
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        gridRow: gridRowPosition,
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
    </article>
  )
}

export default WorkCard

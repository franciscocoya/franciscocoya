import Image from 'next/image'
import styles from './techLogo.module.scss'
import Link from 'next/link'

function TechLogo({ name, link }) {
  return (
    <div className={styles.techLogo}>
      <Link
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        title="Visit website"
      >
        <Image
          src={`/assets/images/logos/brand/${name}-black.svg`}
          alt={name}
          style={{ objectFit: 'contain' }}
          width={96}
          height={96}
          onMouseEnter={(e) =>
            (e.currentTarget.src = `/assets/images/logos/brand/${name}-color.svg`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.src = `/assets/images/logos/brand/${name}-black.svg`)
          }
        />
      </Link>
    </div>
  )
}

export default TechLogo

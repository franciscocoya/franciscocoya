import Image from 'next/image'
import styles from './baseCardWithImage.module.scss'

function BaseCardWithImage({
  cardImage,
  cardImageAlt,
  cardTitle,
  cardText,
  cardExtraInformation,
  isTextLink,
}) {
  return (
    <div className={styles.card}>
      <Image
        src={cardImage}
        className="card-img-top"
        alt={cardImageAlt}
        width={500}
        height={500}
      />
      <div className={styles.cardBody}>
        <h3 className="card-title">{cardTitle}</h3>
        {isTextLink ? (
          <a href={cardText} target="_blank" className="btn btn-primary" rel='noopener noreferrer'>
            {cardText}
          </a>
        ) : (
          <p className="card-text">{cardText}</p>
        )}

        <span className="">{cardExtraInformation}</span>
      </div>
    </div>
  )
}

export default BaseCardWithImage

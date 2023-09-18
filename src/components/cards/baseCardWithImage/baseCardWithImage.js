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
      <img src={cardImage} className="card-img-top" alt={cardImageAlt} />
      <div className={styles.cardBody}>
        <h3 className="card-title">{cardTitle}</h3>
        {isTextLink ? (
          <a href={cardText} target="_blank" className="btn btn-primary">
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

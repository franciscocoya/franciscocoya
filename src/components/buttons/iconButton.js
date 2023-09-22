'use client'

function IconButton({link, icon }) {
  return <button onClick={() => window.open(link, '_blank')}>{icon}</button>
}

export default IconButton

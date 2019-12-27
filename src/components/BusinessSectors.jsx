import React from 'react'

const businessSectors = [
  {
    name: 'Tecnología',
    icon: 'https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png'
  },
  {
    name: 'Marketing',
    icon: 'https://img.icons8.com/wired/64/000000/tags.png'
  },
  {
    name: 'Agroindustria',
    icon: 'https://img.icons8.com/dotty/80/000000/real-estate.png'
  },
  {
    name: 'Automotriz',
    icon: 'https://img.icons8.com/ios/50/000000/fast-moving-consumer-goods.png'
  },
  {
    name: 'Arquitectura',
    icon: 'https://img.icons8.com/carbon-copy/100/000000/commercial.png'
  },
  {
    name: 'Publicidad',
    icon: 'https://img.icons8.com/dotty/80/000000/lab-items.png'
  }
]

export default (props) => {
  return(
    <div className="container-selector">
      {
        businessSectors.map((bsectors) =>(
          <button>
            <figure>
              <img src={bsectors.icon} height={20} alt={"icono del sector " + bsectors.name } />
              <figcaption>{bsectors.name}</figcaption>
            </figure>
          </button>
        ))
      }
		</div>
  )
}
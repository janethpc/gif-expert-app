

export const GifItem = ({title, url}) => {
  return (
    <div className='card'>
      <br/>
        <img src={url} alt={title} className='card-img-top'/>
        <p className="card-body">{title}</p>
    </div>
  )
}

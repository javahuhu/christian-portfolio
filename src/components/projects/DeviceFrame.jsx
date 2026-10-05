import './DeviceFrame.css'

export function DeviceFrame({ image, category, title }) {
  const isMobile = category === 'Mobile'
  return (
    <div className={`device-frame ${isMobile ? 'device-frame--phone' : 'device-frame--desktop'}`}>
      <div className="device-body">
        {!isMobile && <div className="device-browser" aria-hidden="true"><span className="device-browser__dots"><i/><i/><i/></span><span className="device-browser__address">{title} / preview</span><span>↗</span></div>}
        <div className={`device-screen${image.crop ? ` device-screen--${image.crop}` : ''}`} style={isMobile && image.aspectRatio ? { '--screen-aspect': image.aspectRatio } : undefined}>
          <img key={image.src} src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </div>
        {isMobile ? <span className="device-camera" aria-hidden="true"/> : <div className="device-chin" aria-hidden="true"><i/></div>}
      </div>
      {!isMobile && <div className="device-stand" aria-hidden="true"/>}
    </div>
  )
}

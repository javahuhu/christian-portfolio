export function Arrow({ direction = 'right', size = 14 }) {
  return (
    <svg className="arrow-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === 'down' ? (
        <>
          <path d="M12 4v14M7 13l5 5 5-5" />
          <path d="M5 21h14" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </>
      )}
    </svg>
  )
}

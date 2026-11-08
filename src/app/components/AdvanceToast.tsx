export default function AdvanceToast({ direction, label, progress }: { direction: 'down' | 'up'; label: string; progress: number }) {
  return (
    <div aria-hidden="true" className="advToast">
      <span>{direction === 'down' ? '↓' : '↑'} {label}</span>
      <em>{direction === 'down' ? 'Sigue bajando para pasar de página' : 'Sigue subiendo para volver'}</em>
      <i style={{ transform: `scaleX(${progress})` }} />
    </div>
  )
}

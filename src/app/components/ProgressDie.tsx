export default function ProgressDie({ onClick }: { onClick: () => void }) {
  return (
<button type="button" className="progDie" onClick={onClick} aria-label="Volver arriba"><span className="progSpin" style={{ display: "block", "--s": "46px", width: "46px", height: "46px", transformStyle: "preserve-3d", position: "relative", margin: "9px" } as React.CSSProperties}><span className="face fr" style={{ background: "#008FC5", color: "#fff", fontSize: "26px" }}>m</span><span className="face bk" style={{ background: "#E23200" }}></span><span className="face rt" style={{ background: "#E47C0A" }}></span><span className="face lt" style={{ background: "#83AF15" }}></span><span className="face tp" style={{ background: "#EBC645" }}></span><span className="face bt" style={{ background: "#203048" }}></span></span></button>
  )
}

export interface Scene {
  href: string
  l: string
  label: string
  c: string
  top: string
  side: string
  ink: string
  bg: string
  fg: string
}

export const SCENES: Scene[] = [
  { href: '/', l: 'm', label: 'Micos', c: '#008FC5', top: '#83AF15', side: '#006E99', ink: '#FFFFFF', bg: '#FFF9EC', fg: '#203048' },
  { href: '/instalaciones', l: 'i', label: 'Instalaciones', c: '#E47C0A', top: '#EBC645', side: '#B35F00', ink: '#203048', bg: '#E47C0A', fg: '#203048' },
  { href: '/cada-detalle', l: 'c', label: 'Cada detalle', c: '#83AF15', top: '#EBC645', side: '#5F8410', ink: '#203048', bg: '#83AF15', fg: '#203048' },
  { href: '/os-respondemos', l: 'o', label: 'Os respondemos', c: '#E23200', top: '#E47C0A', side: '#A82400', ink: '#FFFFFF', bg: '#C42B00', fg: '#FFFFFF' },
  { href: '/solicitar-visita', l: 's', label: 'Solicitar visita', c: '#EBC645', top: '#83AF15', side: '#C79A12', ink: '#203048', bg: '#EBC645', fg: '#203048' }
]

export const RIPPLE_X = ['30%', '40%', '50%', '60%', '70%']

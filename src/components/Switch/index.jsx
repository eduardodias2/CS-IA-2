
import { Label } from './styles'

export function Switch ({isChecked, onChange}) {
  
  return (
    <Label >
      <input checked={isChecked} onChange={(e) => onChange(e.target.checked)} type="checkbox" />
      <span className='slider'></span>
    </Label>
  )
}
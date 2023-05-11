import * as S from './styles'
import { Label } from './styles'

export function Switch ({isChecked, onChange}) {
  
  return (
    <Label >
      <S.Texts >
        <p>Text</p>
        <p>Video</p>
      </S.Texts>
      <input checked={isChecked} onChange={(e) => onChange(e.target.checked)} type="checkbox" />
      <span className='slider'></span>
      
    </Label>
  )
}
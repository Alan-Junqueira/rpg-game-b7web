import { CharacterSides } from '../../types/CharacterSides';
import * as C from './styled'

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
  name: string
}

const Character = ({x, y, side, name}: Props) => {
  const size = 30
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90
  }
  return (
    <C.Container
      size={size}
      left={x * size}
      top={y * size}
      sidePos={sides[side] ?? 0}
    >
      <C.CharName>{name}</C.CharName>
      
    </C.Container>
  )
}

export default Character
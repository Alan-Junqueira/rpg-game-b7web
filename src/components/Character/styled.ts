import styled from 'styled-components';

export const Container = styled.div<{
  left: number;
  top: number;
  size: number;
  sidePos: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-image: url('/assets/char.png');
  background-position: 0px ${(props) => props.sidePos}px;

  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CharName = styled.p`
  font-size: 13px;
  margin-top: -35px;
  background-color: rgba(0, 0, 0, .5);
  border-radius: 10px;
  padding: 0 5px;
`;
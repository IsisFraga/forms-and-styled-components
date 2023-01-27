import styled from 'styled-components';

interface ITitle {
  fontSize: number;
  color?: string;
}

export const Title = styled.h1<ITitle>`
  color: ${props => `${props.color}`};
  font-size: ${props => `${props.fontSize}px`};
  &:hover {
    background-color: black;
  }

  span {
    background-color: #fff;
    ${({theme}) => theme.colors.text.default}
  }
`

export const SecondaryTitle = styled(Title)`
  background-color: blue;
  &:hover {
    background-color: red;
  }
`

export const PatternHeader = styled.header`
  height: 72px;
  background-color: #ccc;
  ${({theme}) => theme.colors.text.distak};
  ${({theme}) => theme.variables.shadow.small};
`
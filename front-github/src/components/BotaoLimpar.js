import styled from 'vue-styled-components';

const btnProps = { primary: Boolean };

const BotaoLimpar = styled('button', btnProps)`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1px solid green;
  border-radius: 3		px;
  background: ${props => props.primary ? 'green' : 'white'};
  color: ${props => props.primary ? 'white' : 'green'};
`;

export default BotaoLimpar;
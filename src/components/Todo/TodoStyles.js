import styled from 'styled-components';

export const StyledTodo = styled.div`
  position: relative;
  width: 30rem;
  border: 1px solid #c7d3d6;
  background-color: #b9f1fa;
  border-radius: 4px;
  margin-bottom: 0.5rem;

  div {
    display: flex;
    position: absolute;
    left: 30rem;
    top: 0;

  }
`;

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
padding-left: 0.5rem;
padding-right: 0.5rem;
margin-left: 0.3rem;
`;

export const StyledParagraph = styled.p`
  color: ${(props) => (props.isCompleted ? '#cbd2d4' : 'black')};
  text-decoration: ${(props) =>
    props.isCompleted ? 'line-through solid #cbd2d4 2px' : 'none'};
  font-size: 1.5rem;
  padding: 0.2rem;
  width: 100%;
  overflow-wrap: break-word;
`;

export const StyledTextarea = styled.textarea`
color: ${(props) => (props.isCompleted ? '#cbd2d4' : 'black')};
  text-decoration: ${(props) =>
    props.isCompleted ? 'line-through solid #cbd2d4 2px' : 'none'};
  font-size: 1.5rem;
  width: 100%;
  resize: none;
  height: auto;
  resize: vertical;
`



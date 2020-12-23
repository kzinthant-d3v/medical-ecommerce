import styled from 'styled-components';
import { MainLayout } from '../components/layouts/MainLayout';
const StyledHeader = styled.p`
font-size: 2em;
text-align: left;
padding: 16px 16px;
`;

export default function Index(){
  return (
    <div>
      <MainLayout />
      <StyledHeader>Just Testing</StyledHeader>

    </div>
  )
}
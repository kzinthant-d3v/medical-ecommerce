import styled from 'styled-components';

const ManageWrapper = styled.div`
  width: 80%;
  height: 800px;
  background-color: ${(props) => props.theme.primary};
  margin-top: 80px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 30px;
  padding: 20px;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
    margin-top: 20px;
  }
`;
type ManageLayoutProps = {
  children: JSX.Element;
};

const ManageLayout = ({ children }: ManageLayoutProps): JSX.Element => {
  return <ManageWrapper>{children}</ManageWrapper>;
};

export default ManageLayout;

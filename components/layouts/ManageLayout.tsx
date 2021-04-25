import styled from 'styled-components';

const ManageWrapper = styled.div`
  width: 80%;
  height: 900px;
  background-color: ${(props) => props.theme.primary};

  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),
    0 5px 5px -3px rgba(0, 0, 0, 0.2);

  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  border-radius: 20px;
  padding: 20px;

  @media (min-width: 1281px) {
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

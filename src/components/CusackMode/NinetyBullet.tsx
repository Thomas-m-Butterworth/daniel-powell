import styled from 'styled-components';

export const NinetyBullet = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  background: radial-gradient(circle, white 0%, #888888 60%, black 100%);
  box-shadow: 
    0 0 0 1px white,
    1px 1px 1px rgba(0, 0, 0, 0.5);
`;

export const BulletItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

// // Usage example
// const NinetyListItem = ({ children }) => (
//   <BulletItem>
//     <NinetyBullet />
//     {children}
//   </BulletItem>
// );

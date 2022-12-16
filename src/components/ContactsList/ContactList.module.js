import styled from '@emotion/styled';

export const ListOfContact = styled.ul`
  list-style-type: circle;
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  width: 400px;
  margin: 0;
  border: 1px solid gray;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 7px 15px 2px 0px rgba(0, 0, 0, 1);
`;

export const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #00704f;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
`;

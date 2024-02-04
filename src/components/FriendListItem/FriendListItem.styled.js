import styled from 'styled-components';

export const Item = styled.li`
display: flex;
align-items: center;
padding: 15px;
border-bottom: 1px solid darkgray;

/* :not(:last-child) {
  border-bottom: 1px solid darkgray;
} */
`

export const Wrapper = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => {
    switch (props.isOnline) {
      case true:
        return "green";
      case false:
        return "red";
      default:
        return "lightgrey";
    }
  }
  };
`;


export const Image = styled.img`
display: block;
margin-left: 10px;
margin-right: 15px;
`

export const FriendName = styled.p`
font-size: 18px;
font-weight: 600;
`
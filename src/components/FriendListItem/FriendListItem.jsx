import { Wrapper, Item, Image, FriendName } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item class="item">
      <Wrapper isOnline={isOnline}></Wrapper>
      <Image className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName class="name">{name}</FriendName>
    </Item>
  );
}

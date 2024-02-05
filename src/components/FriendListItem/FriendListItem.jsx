import PropTypes from 'prop-types';
import { Wrapper, Item, Image, FriendName } from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, $isOnline }) {
  return (
    <Item>
      <Wrapper $isOnline={$isOnline}></Wrapper>
      <Image src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

import FriendListItem from 'components/FriendListItem/FriendListItem';
import { FriendListWrapper } from './FriendList.styled';

export default function FriendList({ friends }) {
  console.log(friends);
  return (
    <FriendListWrapper className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendListWrapper>
  );
}

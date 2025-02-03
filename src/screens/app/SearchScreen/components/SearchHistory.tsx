import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {User} from '@domain';
import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const {removeUser} = useSearchHistoryService();
  const userList = useSearchHistory();
  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        user={item}
        avatarProps={{size: 48}}
        RightComponent={
          <Icon
            color="primary"
            name="trash"
            onPress={() => removeUser(item.id)}
          />
        }
      />
    );
  }
  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text mb="s16" preset="headingMedium">
            Buscas recentes
          </Text>
        }
        data={userList}
        renderItem={renderItem}
      />
    </Box>
  );
}

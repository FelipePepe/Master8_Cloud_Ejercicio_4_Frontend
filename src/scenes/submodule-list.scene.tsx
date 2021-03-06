import React from 'react';
import { AppLayout } from 'layouts';
import { SubmoduleListContainer } from '../pods/submodulelist';

export const SubmoduleListScene: React.FC = () => {
  return (
    <AppLayout>
      <SubmoduleListContainer />
    </AppLayout>
  );
};

import { AppProps } from 'next/app';
import { NextPage } from 'next';
import '@/styles/global.scss';
import React, { useState, ReactNode } from 'react';
import { createCtx, Update } from '@/utils/context';

type State = {
  leftSidebarShowing: boolean;
  dialogShowing: boolean;
};

type Env = State & Update<State>;

const [useEnv, EnvProvider] = createCtx<Env>();

type Page<P = Record<string, unknown>> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode;
};

type Props = AppProps & {
  Component: Page;
};

const App = ({ Component, pageProps }: Props) => {
  const [leftSidebarShowing, updateLeftSidebarShowing] = useState(false);
  const [dialogShowing, updateDialogShowing] = useState(false);

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <EnvProvider
      value={{
        leftSidebarShowing,
        updateLeftSidebarShowing,
        dialogShowing,
        updateDialogShowing,
      }}
    >
      {getLayout(<Component {...pageProps} />)}
    </EnvProvider>
  );
};

export default App;
export { useEnv };

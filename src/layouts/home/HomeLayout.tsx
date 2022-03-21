import { ReactNode } from 'react';
import styles from './HomeLayout.module.scss';
import React from 'react';
import { useEnv } from '@/pages/_app';
import { FolderTree } from '@/components/folder-tree';
import { app } from '@/data/app';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { dialogShowing, leftSidebarShowing } = useEnv();

  return (
    <div className={styles.root}>
      <dialog className={styles.dialog} open={dialogShowing}>
        <p>Greetings, one and all!</p>
      </dialog>
      <div className={styles.home}>
        <header className={styles.header}>
          <h1> Header </h1>
        </header>
        <nav className={styles.mobileNavigation}>
          <h3> Mobile Nav: probably breadcumb based</h3>
        </nav>
        <main className={styles.main}>
          <aside className={styles.leftSidebar} data-open={leftSidebarShowing}>
            <FolderTree folder={app} />
          </aside>
          <article className={styles.content}>{children}</article>
          <nav className={styles.rightSidebar}>
            <ul>
              <li>
                <a href="#how-to-use-these-docs"> Item 1 </a>
              </li>
              <li>
                <a href="#prerequisites"> Item 2</a>
              </li>
              <li>
                <a href="#interactive-examples"> Item 3</a>
              </li>
            </ul>
          </nav>
        </main>
        <footer>
          <h1>Footer</h1>
        </footer>
      </div>
    </div>
  );
};

export { HomeLayout };

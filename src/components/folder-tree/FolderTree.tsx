import {
  Fragment,
  ReactChild,
  ReactNode,
  useState,
  MouseEventHandler,
  CSSProperties,
} from 'react';
import * as styles from './FolderTree.module.scss';
import { File, Folder, Node as TNode, NonEmptyArray } from './types';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
/// types :

/// Declarative file tree API :
type CollapsibleProps = {
  children: ReactNode;
  isOpen: boolean;
};

const Collapsible = ({ children, isOpen }: CollapsibleProps) => (
  <div className={styles.collapsible} data-isOpen={isOpen}>
    {children}
  </div>
);

type FileProps = {
  name: string;
  path: string;
  depth: number;
};
const File = ({ name, path, depth }: FileProps) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Link href={path} passHref>
      <div className={styles.file} data-active={isActive} data-depth={depth}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

type FolderProps = {
  name: string;
  path: string;
  depth: number;
  tintColor: string;
  children: Array<ReactChild>;
};
const Folder = ({ name, path, depth, tintColor, children }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const isActive = router.pathname.includes(path);

  const handleToggle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.folder} data-depth={depth}>
      <div
        className={styles.folderLabel}
        onClick={handleToggle}
        data-active={isActive}
        data-depth={depth}
        style={{ '--tint-color': tintColor }}
      >
        <ChevronRightIcon className={styles.folderChevron} data-open={isOpen} />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </div>
  );
};

type TreeRootProps = {
  children: ReactNode;
};
const TreeRoot = ({ children }: TreeRootProps) => (
  <div className={styles.tree}>{children}</div>
);

type FolderTreeProps = {
  folder: Folder;
};
const FolderTree = ({ folder }: FolderTreeProps) => {
  /**
   *  - top level folders have accent color
   *  - lower level folders are unstyled, excerpt for if they are active, in which case they
   *  have bold font
   *  - selected pages have a background color of a slightly darker hue to the top level folder
   *  of which they are a descendent
   */

  const initialDepth = 0;

  const createTree = (
    branches: Array<TNode>,
    depth: number,
    basePath: string,
  ) => {
    return branches.map((node) => {
      switch (node.type) {
        case `file`:
          return (
            <File
              name={node.name}
              path={`${basePath}${node.slug}`}
              depth={depth + 1}
            />
          );
        case `folder`:
          return (
            <Folder
              name={node.name}
              path={`${basePath}${node.slug}`}
              depth={depth + 1}
              tintColor={node.tintColor ?? `rgb(155,0,0`}
            >
              {createTree(node.branches, depth + 1, `${basePath}${node.slug}`)}
            </Folder>
          );
      }
    });
  };
  return (
    <TreeRoot>
      {createTree(folder.branches, initialDepth, folder.slug)}
    </TreeRoot>
  );
};

export { FolderTree };

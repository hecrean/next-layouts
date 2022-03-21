import { ReactNode } from 'react';

type NonEmptyArray<T> = [T, ...T[]];

type File = {
  type: 'file';
  name: string;
  slug: `/${string}`;
};

type Folder = {
  type: 'folder';
  name: string;
  slug: `/${string}`;
  tintColor?: string;
  icon?: ReactNode;
  branches: NonEmptyArray<Node>;
};

type Node = Folder | File;

export type { File, Folder, Node, NonEmptyArray };

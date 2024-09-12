import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CoreListViewProps<T>
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  items: T[]; // 제네릭 타입 리스트 아이템
  onRenderItem: (item: T, index: number, id?: string) => ReactNode;
  // 리스트 렌더링 위 인수 받고 ReactNode 반환
  onCreateUniqueKey: (item: T, index: number) => string;
  // 각 항목 고유키 생성?
}

const CoreListView = <T,>(props: CoreListViewProps<T>) => {
  const { items, onRenderItem, onCreateUniqueKey, className } = props;

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={onCreateUniqueKey(item, index)}>
          {onRenderItem(item, index, onCreateUniqueKey(item, index))}
        </li>
      ))}
    </ul>
  );
};

export default CoreListView;

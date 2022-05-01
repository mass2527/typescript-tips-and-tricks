import { ReactNode } from "react";

interface TableProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export const Table = <T,>(props: TableProps<T>) => {
  return null;
};

export const Component = () => {
  return (
    <Table
      items={[{ id: "1", name: "hello" }]}
      renderItem={(item) => {
        return null;
      }}
    />
  );
};

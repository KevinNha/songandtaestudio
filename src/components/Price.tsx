import React from 'react';

export type PriceTableCol<T> = {
  key: keyof T;
  headerText: string;
  classes?: string;
  html?: (data: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: PriceTableCol<T>[];
};

const Price = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto text-center">
      <table className="min-w-full border-gray-300 ">
        <thead className="bg-gray-400 text-[#fffff4] text-sm py-0 ">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                scope="col"
                className={`px-4 py-2  ${column.classes || ''}`}
              >
                {column.headerText}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={(item as any).id || rowIndex}
                className="hover:bg-gray-100 text-xs text-center justify-center"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className={`px-4 py-2 text-center ${column.classes || ''}`}
                  >
                    {column.html
                      ? column.html(item)
                      : (item[column.key as keyof T] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Price;

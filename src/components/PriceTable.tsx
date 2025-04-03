import { Lato } from 'next/font/google';

export interface PriceCollection {
  sizeCm: [number, number];
  sizeInch: [number, number];
  pencil: number;
  watercolor: number;
  oilPainting: number;
  additionalSubjects: number;
  detailedBackground: number | string;
}

export type PriceTableCol = {
  key: keyof PriceCollection;
  headerText: string;
  html: (data: PriceCollection) => React.ReactNode;
};

type TableProps = {
  data: PriceCollection[];
  columns: PriceTableCol[];
};

const lato = Lato({ weight: '400', subsets: ['latin'] });

const PriceTable = ({ data, columns }: TableProps) => {
  return (
    <div className={`${lato.className} overflow-x-auto text-center`}>
      <table className="min-w-full border-gray-300">
        <thead className="bg-gray-400 text-[#fffff4] py-0">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-4 py-2 lg:h-16 lg:text-lg"
              >
                {column.headerText}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 lg:h-16 lg:text-lg"
              >
                No data available.
              </td>
            </tr>
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-gray-200 text-xs text-center"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-4 py-2 text-center lg:h-16 lg:text-lg"
                  >
                    {column.html(item)}
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

export default PriceTable;

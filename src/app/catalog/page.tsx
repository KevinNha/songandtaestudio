import PriceTable, {
  PriceTableCol,
  PriceCollection,
} from '@/components/PriceTable';

const data: PriceCollection[] = [
  {
    sizeCm: [12, 20],
    sizeInch: [5, 8],
    pencil: 350,
    watercolor: 380,
    oilPainting: 650,
    additionalSubjects: 0,
    detailedBackground: 20,
  },
  {
    sizeCm: [20, 25],
    sizeInch: [8, 10],
    pencil: 450,
    watercolor: 500,
    oilPainting: 950,
    additionalSubjects: 0,
    detailedBackground: 20,
  },
  {
    sizeCm: [25, 30],
    sizeInch: [10, 12],
    pencil: 550,
    watercolor: 620,
    oilPainting: 1250,
    additionalSubjects: 50,
    detailedBackground: 20,
  },
  {
    sizeCm: [30, 40],
    sizeInch: [12, 16],
    pencil: 650,
    watercolor: 740,
    oilPainting: 1550,
    additionalSubjects: 50,
    detailedBackground: 20,
  },
  {
    sizeCm: [40, 50],
    sizeInch: [16, 20],
    pencil: 750,
    watercolor: 860,
    oilPainting: 1850,
    additionalSubjects: 50,
    detailedBackground: 20,
  },
  {
    sizeCm: [45, 60],
    sizeInch: [18, 24],
    pencil: 850,
    watercolor: 980,
    oilPainting: 2150,
    additionalSubjects: 50,
    detailedBackground: 20,
  },
];

const columns: PriceTableCol[] = [
  {
    key: 'sizeCm',
    headerText: 'Size (cm)',
    html: (row: PriceCollection) => `${row.sizeCm[0]} x ${row.sizeCm[1]}`,
  },
  {
    key: 'sizeInch',
    headerText: 'Size (inch)',
    html: (row: PriceCollection) => `${row.sizeInch[0]}" x ${row.sizeInch[1]}"`,
  },
  {
    key: 'pencil',
    headerText: 'Pencil (Colored / Black)',
    html: (row: PriceCollection) => `CAD ${row.pencil}`,
  },
  {
    key: 'watercolor',
    headerText: 'Watercolor',
    html: (row: PriceCollection) => `CAD ${row.watercolor}`,
  },
  {
    key: 'oilPainting',
    headerText: 'Oil Painting',
    html: (row: PriceCollection) => `CAD ${row.oilPainting}`,
  },
  {
    key: 'additionalSubjects',
    headerText: 'Additional Subjects',
    html: (row: PriceCollection) =>
      row.additionalSubjects === 0 ? 'N/A' : `+ CAD ${row.additionalSubjects}`,
  },
  {
    key: 'detailedBackground',
    headerText: '*Detailed Background',
    html: (row: PriceCollection) =>
      row.detailedBackground === '' ? '' : `+ ${row.detailedBackground}%`,
  },
];

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[#111111]">Pricing</h1>
      <PriceTable data={data} columns={columns} />
      <p className="mt-10 mb-5 text-xs">
        *No cost for mottled, blurry background, and partly detailed background.
        A charge applies for detailed backgrounds requiring over 5 hours to
        describe.
      </p>
      <p className="text-xs">
        *For portraits related to disabled people and pets, a 20% discount is
        applied.
      </p>
      <p className="mt-5 text-xs">
        Delivery is handled by Canada Post, and the delivery cost is not
        included in the artwork price. However, residents in Greater Vancouver
        can pick up the artwork, or I can deliver it to you. For more questions,
        feel free to contact me via email anytime.
      </p>
      <p className="mt-5 mb-10 text-xs">
        People in Greater Vancouver could receive free delivery.
      </p>
    </div>
  );
};

export default Page;

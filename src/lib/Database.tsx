
interface Category {
  id: string;
  name?: string;
  img: string;
  subChildren: SubCategory[];
}



interface SubCategory {
  id: string;
  name?: string;
  img?: string;
  product?: Product[]
}

interface Product {
  id: string;
  name?: string;
  img?: string;
  specification?: Specification[]
}

interface Specification {
  title: string;
  value: string;
}

export const Products: Category[] = [
  {
    id: "010000",
    img: "/img/products/010000.png",
    subChildren: [
      {
        id: "010100",
        name: "name",
        img: "/img/products/010101.png",
        product: [
          {
            id: "010101",
            img: "/img/products/010101.png",
            specification: [
              {
                title: "Max Flow",
                value: "300 m3/h"
              }
            ]
          }
        ]
      },
      {
        id: "010200",
        name: "Centrifugal Pumps",
        product: [
          {
            id: "010201",
            name: "name",
            img: "/img/products/010201.png"
          },
          {
            id: "010202",
            name: "name",
            img: "/img/products/img_1.png"
          },
          {
            id: "010203",
            name: "name",
            img: "/img/products/img_1.png"
          }
        ]
      },
      {
        id: "010300",
        name: "Multi Stage Pumps",
        product: [
          {
            id: "010301",
            name: "name",
            img: "/img/products/img_3.png"
          }
        ]
      }
    ]
  },
  {
    id: "020000",
    name: "Cast Iron Pumps",
    img: "/img/products/010201.png",
    subChildren: [
      {
        id: "020100",
        name: "Peripheral Pumps"
      },
      {
        id: "020200",
        name: "Double Stage Close Coupled Pumps"
      },
      {
        id: "020300",
        name: "Close-Coupled Centrifugal Pumps"
      },
      {
        id: "020400",
        name: "Jet (Self Priming) Pumps"
      },
      {
        id: "020500",
        name: "Waste Water Pumps"
      },
      {
        id: "020600",
        name: "Close-Coupled (Norm) Centrifugal Pumps"
      },
      {
        id: "020700",
        name: "Long-Coupled Centrifugal Pumps"
      },
      {
        id: "020800",
        name: "Multi-Stages Pumps (Noryl Impeller)"
      },
      {
        id: "020900",
        name: "Multi-Stages Pumps (Iron Casting)"
      }
    ]
  },
  {
    id: "030000",
    name: "Submersible - Drainage Pumps",
    img: "/img/products/cat_3.png",
    subChildren: [
      {
        id: "030100",
        name: "Clean & Waste Water Drainage Pumps"
      },
      {
        id: "030200",
        name: "Clean Water Drainage Pumps"
      },
      {
        id: "030300",
        name: "Waste Water Drainage Pumps"
      },
      {
        id: "030400",
        name: "Deep Well Submersibles"
      },
      {
        id: "030500",
        name: "Stainless Steel Deep Well Submersibles"
      }
    ]
  },
  {
    id: "040000",
    name: "Hydrophores",
    img: "/img/products/cat_4.jpg",
    subChildren: [
      {
        id: "040100",
        name: "Packaged Booster Sets"
      },
      {
        id: "040200",
        name: "Vertical Pump Boosters"
      },
      {
        id: "040300",
        name: "Stainless Steel Vertical Pump Boosters"
      },
      {
        id: "040400",
        name: "Vertical Pump Boosters"
      },
      {
        id: "040500",
        name: "Boosters Tanks"
      }
    ]
  },
  {
    id: "050000",
    name: "Fire Pumps - Hydrophores",
    img: "/img/products/cat_5.jpg",
    subChildren: [
      {
        id: "050100",
        name: "Fire Fighting Pumps"
      },
      {
        id: "050200",
        name: "Fire Fighting Booster Sets"
      }
    ]
  }
]











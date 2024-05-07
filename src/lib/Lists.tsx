
interface Category {
  id: string;
  name: string;
  imgLink: string;
  subChildren: SubCategory[];
}

interface SubCategory {
  id: string;
  name: string;
  product?: Product[]
}

interface Product {
  id: string;
  name: string;
  img?: string;
}
export const Products: Category[] = [
  {
    id: "010000",
    name: "Stainless Steel Pumps",
    imgLink: "/img/products/img_1.png",
    subChildren: [
      {
        id: "010100",
        name: "Open Impeller Pumps",
        product: [
          {
            id: "010101",
            name: "name",
            img: "/img/products/img_1.png"
          }, {
            id: "010102",
            name: "name",
            img: "/img/products/img_1.png"
          }, {
            id: "010103",
            name: "name",
            img: "/img/products/img_1.png"
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
            img: "/img/products/img_1.png"
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
    imgLink: "/img/products/cat_1.jpg",
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
    imgLink: "/img/products/cat_1.jpg",
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
    imgLink: "/img/products/cat_1.jpg",
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
    imgLink: "/img/products/cat_1.jpg",
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











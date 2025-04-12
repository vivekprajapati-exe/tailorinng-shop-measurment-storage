
export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  lastVisit: string;
  notes?: string;
  measurements: {
    chest: string;
    waist: string;
    hips: string; // Added the missing hips property here
    blouse: {
      length: string;
      shoulderWidth: string;
      armhole: string;
      sleeveLength: string;
      bust: string;
      neckDepth: string;
      backNeckDepth: string;
    };
    kurti: {
      length: string;
      shoulderWidth: string;
      bust: string;
      waist: string;
      hips: string;
      sleeveLength: string;
      neckDepth: string;
      armhole: string;
    };
    salwar: {
      length: string;
      waist: string;
      hips: string;
      calf: string;
      ankle: string;
    };
    lehenga: {
      length: string;
      waist: string;
      hips: string;
      flare: string;
    };
    inseam: string;
    sleeve: string;
    shoulder: string;
    neck: string;
    armLength: string;
    thigh: string;
    calf: string;
    torsoLength: string;
  };
}

export const dummyCustomers: Customer[] = [
  {
    id: "1",
    name: "Priya Sharma",
    phone: "9876543210",
    email: "priya.sharma@example.com",
    lastVisit: "2023-03-15",
    notes: "Prefers traditional designs",
    measurements: {
      chest: "36",
      waist: "30",
      hips: "38",
      blouse: {
        length: "16",
        shoulderWidth: "14",
        armhole: "16",
        sleeveLength: "6",
        bust: "36",
        neckDepth: "6",
        backNeckDepth: "2",
      },
      kurti: {
        length: "38",
        shoulderWidth: "14",
        bust: "36",
        waist: "30",
        hips: "38",
        sleeveLength: "18",
        neckDepth: "6",
        armhole: "16",
      },
      salwar: {
        length: "38",
        waist: "30",
        hips: "38",
        calf: "14",
        ankle: "12",
      },
      lehenga: {
        length: "40",
        waist: "30",
        hips: "38",
        flare: "80",
      },
      inseam: "28",
      sleeve: "23",
      shoulder: "16",
      neck: "14",
      armLength: "24",
      thigh: "22",
      calf: "14",
      torsoLength: "27",
    },
  },
  {
    id: "2",
    name: "Anjali Patel",
    phone: "8765432109",
    email: "anjali.p@example.com",
    lastVisit: "2023-04-22",
    notes: "Prefers modern designs with traditional elements",
    measurements: {
      chest: "34",
      waist: "28",
      hips: "36",
      blouse: {
        length: "15",
        shoulderWidth: "13.5",
        armhole: "15",
        sleeveLength: "5.5",
        bust: "34",
        neckDepth: "5.5",
        backNeckDepth: "1.8",
      },
      kurti: {
        length: "36",
        shoulderWidth: "13.5",
        bust: "34",
        waist: "28",
        hips: "36",
        sleeveLength: "17",
        neckDepth: "5.5",
        armhole: "15",
      },
      salwar: {
        length: "37",
        waist: "28",
        hips: "36",
        calf: "13",
        ankle: "11",
      },
      lehenga: {
        length: "38",
        waist: "28",
        hips: "36",
        flare: "76",
      },
      inseam: "28",
      sleeve: "23",
      shoulder: "16",
      neck: "14",
      armLength: "24",
      thigh: "22",
      calf: "14",
      torsoLength: "27",
    },
  },
  {
    id: "3",
    name: "Deepika Singh",
    phone: "7654321098",
    lastVisit: "2023-02-10",
    measurements: {
      chest: "38",
      waist: "32",
      hips: "40",
      blouse: {
        length: "16.5",
        shoulderWidth: "14.5",
        armhole: "16.5",
        sleeveLength: "6",
        bust: "38",
        neckDepth: "6.5",
        backNeckDepth: "2.2",
      },
      kurti: {
        length: "40",
        shoulderWidth: "14.5",
        bust: "38",
        waist: "32",
        hips: "40",
        sleeveLength: "18.5",
        neckDepth: "6.5",
        armhole: "16.5",
      },
      salwar: {
        length: "39",
        waist: "32",
        hips: "40",
        calf: "14.5",
        ankle: "12.5",
      },
      lehenga: {
        length: "42",
        waist: "32",
        hips: "40",
        flare: "84",
      },
      inseam: "29",
      sleeve: "24",
      shoulder: "16.5",
      neck: "14.5",
      armLength: "25",
      thigh: "23",
      calf: "14.5",
      torsoLength: "28",
    },
  },
  {
    id: "4",
    name: "Meera Reddy",
    phone: "6543210987",
    email: "meera.r@example.com",
    lastVisit: "2023-05-05",
    notes: "Likes bright colors and intricate embroidery",
    measurements: {
      chest: "32",
      waist: "26",
      hips: "34",
      blouse: {
        length: "14.5",
        shoulderWidth: "13",
        armhole: "14.5",
        sleeveLength: "5",
        bust: "32",
        neckDepth: "5",
        backNeckDepth: "1.5",
      },
      kurti: {
        length: "34",
        shoulderWidth: "13",
        bust: "32",
        waist: "26",
        hips: "34",
        sleeveLength: "16",
        neckDepth: "5",
        armhole: "14.5",
      },
      salwar: {
        length: "36",
        waist: "26",
        hips: "34",
        calf: "12",
        ankle: "10",
      },
      lehenga: {
        length: "36",
        waist: "26",
        hips: "34",
        flare: "72",
      },
      inseam: "27",
      sleeve: "22",
      shoulder: "15.5",
      neck: "13",
      armLength: "23",
      thigh: "20",
      calf: "13",
      torsoLength: "26",
    },
  },
  {
    id: "5",
    name: "Sunita Agarwal",
    phone: "5432109876",
    lastVisit: "2023-04-18",
    measurements: {
      chest: "36",
      waist: "30",
      hips: "38",
      blouse: {
        length: "16",
        shoulderWidth: "14",
        armhole: "16",
        sleeveLength: "6",
        bust: "36",
        neckDepth: "6",
        backNeckDepth: "2",
      },
      kurti: {
        length: "38",
        shoulderWidth: "14",
        bust: "36",
        waist: "30",
        hips: "38",
        sleeveLength: "18",
        neckDepth: "6",
        armhole: "16",
      },
      salwar: {
        length: "38",
        waist: "30",
        hips: "38",
        calf: "14",
        ankle: "12",
      },
      lehenga: {
        length: "40",
        waist: "30",
        hips: "38",
        flare: "80",
      },
      inseam: "28",
      sleeve: "24",
      shoulder: "17.5",
      neck: "15.5",
      armLength: "25",
      thigh: "23",
      calf: "15",
      torsoLength: "29",
    },
  }
];


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
    hips: string;
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
    name: "John Smith",
    phone: "555-123-4567",
    email: "john.smith@example.com",
    lastVisit: "2023-03-15",
    notes: "Prefers classic fit",
    measurements: {
      chest: "42",
      waist: "36",
      hips: "40",
      inseam: "32",
      sleeve: "25",
      shoulder: "18.5",
      neck: "16",
      armLength: "26",
      thigh: "24",
      calf: "16",
      torsoLength: "30",
    },
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    phone: "555-234-5678",
    email: "maria.r@example.com",
    lastVisit: "2023-04-22",
    notes: "Needs express alterations",
    measurements: {
      chest: "36",
      waist: "28",
      hips: "38",
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
    name: "David Johnson",
    phone: "555-345-6789",
    lastVisit: "2023-02-10",
    measurements: {
      chest: "44",
      waist: "38",
      hips: "42",
      inseam: "34",
      sleeve: "26",
      shoulder: "19",
      neck: "17",
      armLength: "27",
      thigh: "25",
      calf: "17",
      torsoLength: "31",
    },
  },
  {
    id: "4",
    name: "Sarah Williams",
    phone: "555-456-7890",
    email: "sarah.w@example.com",
    lastVisit: "2023-05-05",
    notes: "Likes slim fit style",
    measurements: {
      chest: "34",
      waist: "26",
      hips: "36",
      inseam: "30",
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
    name: "Michael Chen",
    phone: "555-567-8901",
    lastVisit: "2023-04-18",
    measurements: {
      chest: "40",
      waist: "34",
      hips: "38",
      inseam: "32",
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

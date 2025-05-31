
export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  items: OrderItem[];
  totalAmount: number;
  advanceAmount: number;
  remainingAmount: number;
  status: 'pending' | 'in-progress' | 'ready' | 'delivered' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  orderDate: string;
  dueDate: string;
  deliveryDate?: string;
  notes: string;
}

export interface OrderItem {
  id: string;
  type: 'blouse' | 'kurti' | 'salwar' | 'lehenga';
  description: string;
  quantity: number;
  pricePerItem: number;
  fabric?: string;
  color?: string;
  specialInstructions?: string;
}

// Dummy orders data for now
export const dummyOrders: Order[] = [
  {
    id: "1",
    customerId: "1",
    customerName: "Priya Sharma",
    customerPhone: "98765 43210",
    items: [
      {
        id: "1",
        type: "blouse",
        description: "Silk blouse with embroidery",
        quantity: 1,
        pricePerItem: 1500,
        fabric: "Silk",
        color: "Red",
        specialInstructions: "Heavy embroidery on sleeves"
      }
    ],
    totalAmount: 1500,
    advanceAmount: 500,
    remainingAmount: 1000,
    status: "in-progress",
    priority: "high",
    orderDate: "2024-01-15",
    dueDate: "2024-01-25",
    notes: "Rush order for wedding"
  },
  {
    id: "2",
    customerId: "2",
    customerName: "Anjali Patel",
    customerPhone: "87654 32109",
    items: [
      {
        id: "2",
        type: "kurti",
        description: "Cotton kurti",
        quantity: 2,
        pricePerItem: 800,
        fabric: "Cotton",
        color: "Blue"
      }
    ],
    totalAmount: 1600,
    advanceAmount: 800,
    remainingAmount: 800,
    status: "pending",
    priority: "medium",
    orderDate: "2024-01-20",
    dueDate: "2024-02-05",
    notes: ""
  }
];


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IndianRupee, TrendingUp, Package, Users, Calendar } from "lucide-react";
import { dummyCustomers } from "@/lib/data";
import { dummyOrders } from "@/lib/orders";

const Reports = () => {
  // Calculate comprehensive stats
  const totalCustomers = dummyCustomers.length;
  const totalOrders = dummyOrders.length;
  const totalRevenue = dummyOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const totalPending = dummyOrders.reduce((sum, order) => sum + order.remainingAmount, 0);
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  // Order status breakdown
  const statusBreakdown = dummyOrders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Garment type analysis
  const garmentAnalysis = dummyOrders.reduce((acc, order) => {
    order.items.forEach(item => {
      if (!acc[item.type]) {
        acc[item.type] = { count: 0, revenue: 0 };
      }
      acc[item.type].count += item.quantity;
      acc[item.type].revenue += item.quantity * item.pricePerItem;
    });
    return acc;
  }, {} as Record<string, { count: number; revenue: number }>);

  // Monthly trends (simplified)
  const currentMonth = new Date().getMonth();
  const currentMonthOrders = dummyOrders.filter(order => 
    new Date(order.orderDate).getMonth() === currentMonth
  ).length;

  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Business Reports</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <IndianRupee className="mr-2 h-5 w-5 text-green-600" />
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">All time earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
              Average Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹{Math.round(avgOrderValue).toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Per order value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Package className="mr-2 h-5 w-5 text-purple-600" />
              Total Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalOrders}</p>
            <p className="text-sm text-muted-foreground">{currentMonthOrders} this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="mr-2 h-5 w-5 text-orange-600" />
              Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalCustomers}</p>
            <p className="text-sm text-muted-foreground">Registered clients</p>
          </CardContent>
        </Card>
      </div>

      {/* Order Status Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Order Status Breakdown</CardTitle>
            <CardDescription>Current order distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(statusBreakdown).map(([status, count]) => (
                <div key={status} className="flex justify-between items-center">
                  <span className="capitalize font-medium">{status.replace('-', ' ')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${(count / totalOrders) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-semibold w-8">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Payments</CardTitle>
            <CardDescription>Outstanding amounts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-600 mb-2">₹{totalPending.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground mb-4">Total pending payments</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">{Math.round((totalPending / totalRevenue) * 100)}%</span> of total revenue is pending
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Garment Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Garment Type Analysis</CardTitle>
          <CardDescription>Performance by garment category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(garmentAnalysis).map(([type, data]) => (
              <div key={type} className="p-4 border rounded-lg">
                <h3 className="font-semibold capitalize mb-2">{type}</h3>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{data.count}</p>
                  <p className="text-sm text-muted-foreground">pieces ordered</p>
                  <p className="text-lg font-semibold text-green-600">₹{data.revenue.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">total revenue</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;

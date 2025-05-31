
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, Package, Calendar, IndianRupee, Clock, AlertCircle } from "lucide-react";
import { dummyCustomers } from "@/lib/data";
import { dummyOrders } from "@/lib/orders";

const DashboardContent = () => {
  // Calculate real stats from data
  const totalCustomers = dummyCustomers.length;
  const totalOrders = dummyOrders.length;
  const activeOrders = dummyOrders.filter(order => 
    order.status === 'pending' || order.status === 'in-progress'
  ).length;
  const totalRevenue = dummyOrders.reduce((sum, order) => sum + order.totalAmount, 0);
  const pendingPayments = dummyOrders.reduce((sum, order) => sum + order.remainingAmount, 0);
  
  // Upcoming due orders (next 7 days)
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const upcomingOrders = dummyOrders.filter(order => {
    const dueDate = new Date(order.dueDate);
    return dueDate >= today && dueDate <= nextWeek && order.status !== 'delivered';
  });

  // Recent customers (last 30 days)
  const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
  const recentCustomers = dummyCustomers.filter(customer => {
    const lastVisit = new Date(customer.lastVisit);
    return lastVisit >= thirtyDaysAgo;
  });

  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome to your tailoring shop management system</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Today</p>
          <p className="text-lg font-semibold">{today.toLocaleDateString('en-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="mr-2 h-5 w-5 text-blue-600" />
              Total Customers
            </CardTitle>
            <CardDescription>Registered clients</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{totalCustomers}</p>
            <p className="text-sm text-green-600">+{recentCustomers.length} this month</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link to="/customers">Manage Customers</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Package className="mr-2 h-5 w-5 text-purple-600" />
              Active Orders
            </CardTitle>
            <CardDescription>Orders in progress</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{activeOrders}</p>
            <p className="text-sm text-muted-foreground">of {totalOrders} total orders</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link to="/orders">View All Orders</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <IndianRupee className="mr-2 h-5 w-5 text-green-600" />
              Total Revenue
            </CardTitle>
            <CardDescription>All time earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹{totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-orange-600">₹{pendingPayments.toLocaleString()} pending</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Reports</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Clock className="mr-2 h-5 w-5 text-orange-600" />
              Due This Week
            </CardTitle>
            <CardDescription>Orders to complete</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{upcomingOrders.length}</p>
            <p className="text-sm text-muted-foreground">Need attention</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link to="/orders">Check Orders</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to get you started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button asChild className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Link to="/customers">
                <UserPlus className="h-5 w-5" />
                <span>Add Customer</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Link to="/orders">
                <Package className="h-5 w-5" />
                <span>New Order</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Fitting</span>
            </Button>
            <Button asChild variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Link to="/customers">
                <Users className="h-5 w-5" />
                <span>Recent Customers</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Upcoming Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-orange-500" />
              Orders Due This Week
            </CardTitle>
            <CardDescription>Orders that need your attention</CardDescription>
          </CardHeader>
          <CardContent>
            {upcomingOrders.length > 0 ? (
              <div className="space-y-3">
                {upcomingOrders.slice(0, 3).map((order) => (
                  <div key={order.id} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{order.customerName}</p>
                      <p className="text-sm text-gray-500">
                        {order.items.map(item => `${item.quantity}x ${item.type}`).join(', ')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Due: {order.dueDate}</p>
                      <p className="text-sm text-gray-500 capitalize">{order.status}</p>
                    </div>
                  </div>
                ))}
                {upcomingOrders.length > 3 && (
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/orders">View All {upcomingOrders.length} Orders</Link>
                  </Button>
                )}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No orders due this week!</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
            <CardDescription>Customers who visited recently</CardDescription>
          </CardHeader>
          <CardContent>
            {recentCustomers.length > 0 ? (
              <div className="space-y-3">
                {recentCustomers.slice(0, 3).map((customer) => (
                  <div key={customer.id} className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-gray-500">{customer.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Last visit:</p>
                      <p className="text-sm font-medium">{customer.lastVisit}</p>
                    </div>
                  </div>
                ))}
                <Button asChild variant="outline" className="w-full">
                  <Link to="/customers">View All Customers</Link>
                </Button>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500 mb-2">No recent customers</p>
                <Button asChild size="sm">
                  <Link to="/customers">Add Your First Customer</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Garment Types */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Popular Garment Types</CardTitle>
            <CardDescription>Most frequently ordered items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['blouse', 'kurti', 'salwar', 'lehenga'].map((type) => {
                const count = dummyOrders.reduce((sum, order) => 
                  sum + order.items.filter(item => item.type === type).length, 0
                );
                return (
                  <div key={type} className="p-4 border rounded-lg text-center hover:border-primary transition-colors">
                    <h3 className="font-medium capitalize">{type}</h3>
                    <p className="text-xs text-muted-foreground">{count} orders this month</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;

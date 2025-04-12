
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Users, Scissors, Calendar } from "lucide-react";

const DashboardContent = () => {
  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Customers
            </CardTitle>
            <CardDescription>Manage your client database</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">125</p>
            <p className="text-sm text-muted-foreground">Total customers</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link to="/customers">View All Customers</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Scissors className="mr-2 h-5 w-5 text-primary" />
              Orders
            </CardTitle>
            <CardDescription>Track your tailoring orders</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">18</p>
            <p className="text-sm text-muted-foreground">Active orders</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View All Orders</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-primary" />
              Appointments
            </CardTitle>
            <CardDescription>Upcoming client appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-muted-foreground">This week</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Calendar</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <UserPlus className="h-5 w-5" />
              <span>New Customer</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Scissors className="h-5 w-5" />
              <span>New Order</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule Appointment</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col items-center justify-center gap-2">
              <Users className="h-5 w-5" />
              <span>Recent Customers</span>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Garment Types</CardTitle>
            <CardDescription>Common women's garments we tailor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg text-center hover:border-primary transition-colors">
                <h3 className="font-medium">Blouse</h3>
                <p className="text-xs text-muted-foreground">15 orders this month</p>
              </div>
              <div className="p-4 border rounded-lg text-center hover:border-primary transition-colors">
                <h3 className="font-medium">Kurti</h3>
                <p className="text-xs text-muted-foreground">12 orders this month</p>
              </div>
              <div className="p-4 border rounded-lg text-center hover:border-primary transition-colors">
                <h3 className="font-medium">Salwar</h3>
                <p className="text-xs text-muted-foreground">8 orders this month</p>
              </div>
              <div className="p-4 border rounded-lg text-center hover:border-primary transition-colors">
                <h3 className="font-medium">Lehenga</h3>
                <p className="text-xs text-muted-foreground">5 orders this month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;

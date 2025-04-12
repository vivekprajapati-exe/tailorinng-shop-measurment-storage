
import { useState } from "react";
import { SearchIcon, PlusCircle, Edit, Trash2, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import CustomerForm from "@/components/CustomerForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Customer, dummyCustomers } from "@/lib/data";

const Customers = () => {
  const [customers, setCustomers] = useState<Customer[]>(dummyCustomers);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);
  const { toast } = useToast();

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    customer.phone.includes(searchQuery)
  );

  const handleAddCustomer = (customer: Customer) => {
    setCustomers([...customers, { ...customer, id: Date.now().toString() }]);
    setIsAddDialogOpen(false);
    toast({
      title: "Customer Added",
      description: `${customer.name}'s measurements have been saved.`,
    });
  };

  const handleEditCustomer = (customer: Customer) => {
    setCustomers(customers.map(c => c.id === customer.id ? customer : c));
    setIsEditDialogOpen(false);
    setCurrentCustomer(null);
    toast({
      title: "Customer Updated",
      description: `${customer.name}'s measurements have been updated.`,
    });
  };

  const handleDeleteCustomer = (id: string) => {
    setCustomers(customers.filter(customer => customer.id !== id));
    toast({
      title: "Customer Deleted",
      description: "Customer has been removed from your records.",
      variant: "destructive"
    });
  };

  const openEditDialog = (customer: Customer) => {
    setCurrentCustomer(customer);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="container mx-auto py-6 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Customer Measurements</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          <Input 
            placeholder="Search by name or phone number..." 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableCaption>Your tailoring shop customer measurements database</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.name}</TableCell>
                    <TableCell>{customer.phone}</TableCell>
                    <TableCell>{customer.lastVisit}</TableCell>
                    <TableCell className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => openEditDialog(customer)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteCustomer(customer.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    <div className="flex flex-col items-center gap-2">
                      <User size={40} className="text-gray-300" />
                      <p className="text-lg font-medium text-gray-500">No customers found</p>
                      <p className="text-sm text-gray-400">Try a different search or add a new customer</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Customer Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Customer</DialogTitle>
          </DialogHeader>
          <CustomerForm 
            onSubmit={handleAddCustomer} 
            onCancel={() => setIsAddDialogOpen(false)} 
          />
        </DialogContent>
      </Dialog>

      {/* Edit Customer Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Customer</DialogTitle>
          </DialogHeader>
          {currentCustomer && (
            <CustomerForm 
              customer={currentCustomer} 
              onSubmit={handleEditCustomer} 
              onCancel={() => setIsEditDialogOpen(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Customers;

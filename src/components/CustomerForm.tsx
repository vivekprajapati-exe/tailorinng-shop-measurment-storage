
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Customer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CustomerFormProps {
  customer?: Customer;
  onSubmit: (customer: Customer) => void;
  onCancel: () => void;
}

const CustomerForm = ({ customer, onSubmit, onCancel }: CustomerFormProps) => {
  const [activeTab, setActiveTab] = useState("personal");
  
  const defaultValues: Customer = {
    id: customer?.id || "",
    name: customer?.name || "",
    phone: customer?.phone || "",
    email: customer?.email || "",
    lastVisit: customer?.lastVisit || new Date().toLocaleDateString(),
    notes: customer?.notes || "",
    measurements: {
      chest: customer?.measurements.chest || "",
      waist: customer?.measurements.waist || "",
      hips: customer?.measurements.hips || "",
      inseam: customer?.measurements.inseam || "",
      sleeve: customer?.measurements.sleeve || "",
      shoulder: customer?.measurements.shoulder || "",
      neck: customer?.measurements.neck || "",
      armLength: customer?.measurements.armLength || "",
      thigh: customer?.measurements.thigh || "",
      calf: customer?.measurements.calf || "",
      torsoLength: customer?.measurements.torsoLength || "",
    }
  };

  const form = useForm<Customer>({
    defaultValues
  });

  // Update form when customer prop changes
  useEffect(() => {
    if (customer) {
      form.reset(customer);
    }
  }, [customer, form]);

  const handleSubmit = (data: Customer) => {
    onSubmit(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="measurements">Measurements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="customer@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Input placeholder="Any special requirements or preferences..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
              <Button type="button" onClick={() => setActiveTab("measurements")}>
                Next: Measurements
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="measurements" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="measurements.chest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chest (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="40" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.waist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waist (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="34" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.hips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hips (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="42" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.inseam"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inseam (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="32" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.sleeve"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sleeve (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="25" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.shoulder"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shoulder (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="18" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.neck"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Neck (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="16" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.armLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Arm Length (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="25" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.thigh"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thigh (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="22" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.calf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Calf (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="16" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.torsoLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Torso Length (in)</FormLabel>
                    <FormControl>
                      <Input placeholder="28" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={() => setActiveTab("personal")}>
                Back: Personal Info
              </Button>
              <Button type="submit">Save Customer</Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
};

export default CustomerForm;

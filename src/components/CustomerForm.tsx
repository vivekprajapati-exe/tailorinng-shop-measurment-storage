
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
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface CustomerFormProps {
  customer?: Customer;
  onSubmit: (customer: Customer) => void;
  onCancel: () => void;
}

const CustomerForm = ({ customer, onSubmit, onCancel }: CustomerFormProps) => {
  const [activeTab, setActiveTab] = useState("personal");
  const { toast } = useToast();
  
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
      
      blouse: customer?.measurements.blouse || {
        length: "",
        shoulderWidth: "",
        armhole: "",
        sleeveLength: "",
        bust: "",
        neckDepth: "",
        backNeckDepth: "",
      },
      kurti: customer?.measurements.kurti || {
        length: "",
        shoulderWidth: "",
        bust: "",
        waist: "",
        hips: "",
        sleeveLength: "",
        neckDepth: "",
        armhole: "",
      },
      salwar: customer?.measurements.salwar || {
        length: "",
        waist: "",
        hips: "",
        calf: "",
        ankle: "",
      },
      lehenga: customer?.measurements.lehenga || {
        length: "",
        waist: "",
        hips: "",
        flare: "",
      },
      
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
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="blouse">Blouse</TabsTrigger>
            <TabsTrigger value="kurti">Kurti</TabsTrigger>
            <TabsTrigger value="salwar">Salwar</TabsTrigger>
            <TabsTrigger value="lehenga">Lehenga</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Customer Name" {...field} />
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
                      <Input placeholder="98765 43210" {...field} />
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
                    <Textarea placeholder="Any special requirements or preferences..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
              <Button type="button" onClick={() => setActiveTab("blouse")}>
                Next: Blouse Measurements
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="blouse" className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold mb-4">Blouse Measurements</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="measurements.blouse.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input placeholder="16" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.blouse.shoulderWidth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shoulder Width</FormLabel>
                    <FormControl>
                      <Input placeholder="14" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.blouse.armhole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Armhole</FormLabel>
                    <FormControl>
                      <Input placeholder="16" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.blouse.sleeveLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sleeve Length</FormLabel>
                    <FormControl>
                      <Input placeholder="6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.blouse.bust"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bust</FormLabel>
                    <FormControl>
                      <Input placeholder="36" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.blouse.neckDepth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Neck Depth</FormLabel>
                    <FormControl>
                      <Input placeholder="6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.blouse.backNeckDepth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Back Neck Depth</FormLabel>
                    <FormControl>
                      <Input placeholder="2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={() => setActiveTab("personal")}>
                Previous
              </Button>
              <Button type="button" onClick={() => setActiveTab("kurti")}>
                Next: Kurti
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="kurti" className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold mb-4">Kurti Measurements</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="measurements.kurti.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input placeholder="38" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.shoulderWidth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shoulder Width</FormLabel>
                    <FormControl>
                      <Input placeholder="14" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.bust"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bust</FormLabel>
                    <FormControl>
                      <Input placeholder="36" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.waist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waist</FormLabel>
                    <FormControl>
                      <Input placeholder="30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.hips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hips</FormLabel>
                    <FormControl>
                      <Input placeholder="38" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.sleeveLength"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sleeve Length</FormLabel>
                    <FormControl>
                      <Input placeholder="18" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.neckDepth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Neck Depth</FormLabel>
                    <FormControl>
                      <Input placeholder="6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.kurti.armhole"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Armhole</FormLabel>
                    <FormControl>
                      <Input placeholder="16" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={() => setActiveTab("blouse")}>
                Previous
              </Button>
              <Button type="button" onClick={() => setActiveTab("salwar")}>
                Next: Salwar
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="salwar" className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold mb-4">Salwar Measurements</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="measurements.salwar.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input placeholder="38" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.salwar.waist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waist</FormLabel>
                    <FormControl>
                      <Input placeholder="30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.salwar.hips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hips</FormLabel>
                    <FormControl>
                      <Input placeholder="38" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.salwar.calf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Calf</FormLabel>
                    <FormControl>
                      <Input placeholder="14" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.salwar.ankle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ankle</FormLabel>
                    <FormControl>
                      <Input placeholder="12" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={() => setActiveTab("kurti")}>
                Previous
              </Button>
              <Button type="button" onClick={() => setActiveTab("lehenga")}>
                Next: Lehenga
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="lehenga" className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold mb-4">Lehenga Measurements</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="measurements.lehenga.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input placeholder="40" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.lehenga.waist"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Waist</FormLabel>
                    <FormControl>
                      <Input placeholder="30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.lehenga.hips"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hips</FormLabel>
                    <FormControl>
                      <Input placeholder="38" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="measurements.lehenga.flare"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Flare</FormLabel>
                    <FormControl>
                      <Input placeholder="80" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-between mt-6">
              <Button type="button" variant="outline" onClick={() => setActiveTab("salwar")}>
                Previous
              </Button>
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Save Customer
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </form>
    </Form>
  );
};

export default CustomerForm;

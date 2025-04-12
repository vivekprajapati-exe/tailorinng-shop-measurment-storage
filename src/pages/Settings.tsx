
import { useState } from "react";
import { Settings as SettingsIcon, Save, ShieldCheck, Store } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("general");
  
  const [settings, setSettings] = useState({
    shopName: "My Tailoring Shop",
    address: "123 Fashion Street, Style City",
    phone: "555-789-0123",
    email: "contact@tailoringshop.com",
    backupFrequency: "daily",
    currency: "USD",
    measurementUnit: "inches",
  });
  
  const handleSave = () => {
    // In a real app, this would save to a database
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="container mx-auto py-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <SettingsIcon className="mr-3 h-8 w-8" />
        Settings
      </h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Store className="mr-2 h-5 w-5" />
                Shop Information
              </CardTitle>
              <CardDescription>
                Manage your shop details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="shopName">Shop Name</Label>
                <Input 
                  id="shopName" 
                  value={settings.shopName}
                  onChange={(e) => setSettings({...settings, shopName: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input 
                  id="address" 
                  value={settings.address}
                  onChange={(e) => setSettings({...settings, address: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={settings.phone}
                    onChange={(e) => setSettings({...settings, phone: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    value={settings.email}
                    onChange={(e) => setSettings({...settings, email: e.target.value})}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <ShieldCheck className="mr-2 h-5 w-5" />
                Data & Privacy
              </CardTitle>
              <CardDescription>
                Manage how your customer data is stored and backed up
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="backupFrequency">Data Backup Frequency</Label>
                <select 
                  id="backupFrequency" 
                  value={settings.backupFrequency}
                  onChange={(e) => setSettings({...settings, backupFrequency: e.target.value})}
                  className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <select 
                    id="currency" 
                    value={settings.currency}
                    onChange={(e) => setSettings({...settings, currency: e.target.value})}
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="CAD">Canadian Dollar (CAD)</option>
                    <option value="AUD">Australian Dollar (AUD)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="measurementUnit">Measurement Unit</Label>
                  <select 
                    id="measurementUnit" 
                    value={settings.measurementUnit}
                    onChange={(e) => setSettings({...settings, measurementUnit: e.target.value})}
                    className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="inches">Inches</option>
                    <option value="centimeters">Centimeters</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-end">
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;

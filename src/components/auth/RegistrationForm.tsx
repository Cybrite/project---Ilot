import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState<string | undefined>();
  const [source, setSource] = useState<string | undefined>();
  const [date, setDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name) {
      toast.error('Please enter your name');
      return;
    }
    
    if (!gender) {
      toast.error('Please select your gender');
      return;
    }
    
    if (!date) {
      toast.error('Please select your date of birth');
      return;
    }
    
    if (!source) {
      toast.error('Please select how you heard about us');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Save user info in localStorage (for demo purposes)
      localStorage.setItem('user', JSON.stringify({
        name,
        gender,
        dob: date?.toISOString(),
        source,
        isLoggedIn: true
      }));
      navigate('/home');
      toast.success('Registration successful!');
    }, 1500);
  };

  return (
    <Card className="w-[400px] shadow-lg border-saffron-200">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-saffron-600">Complete Your Profile</CardTitle>
        <CardDescription>Please provide your basic information</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-saffron-200 focus:border-saffron-400"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal border-saffron-200 focus:border-saffron-400",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select your birthday</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  captionLayout="dropdown-buttons"
                  fromYear={1900}
                  toYear={new Date().getFullYear()}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="source">How did you hear about us?</Label>
            <Select value={source} onValueChange={setSource}>
              <SelectTrigger className="border-saffron-200 focus:border-saffron-400">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="friend">Friend or Family</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="temple">Temple Visit</SelectItem>
                <SelectItem value="event">Event or Festival</SelectItem>
                <SelectItem value="search">Search Engine</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Complete Registration'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

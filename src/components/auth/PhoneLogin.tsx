import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from 'sonner';

export const PhoneLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number (basic validation)
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error('Please enter a valid phone number');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate OTP sending - In a real app, this would call an API
    setTimeout(() => {
      setIsLoading(false);
      // Store phone number in session storage for OTP verification
      sessionStorage.setItem('phoneNumber', phoneNumber);
      navigate('/verify-otp');
      toast.success('OTP sent to your phone');
    }, 1500);
  };

  return (
    <Card className="w-[350px] shadow-lg border-saffron-200">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-2">
          <img src="/logo.svg" alt="GIVE GITA Logo" className="h-12 w-12" />
        </div>
        <CardTitle className="text-2xl font-bold text-saffron-600">Welcome to GIVE GITA</CardTitle>
        <CardDescription>Enter your phone number to login</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              id="phone"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
              autoComplete="tel"
              required
              className="border-saffron-200 focus:border-saffron-400"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700"
            disabled={isLoading}
          >
            {isLoading ? 'Sending OTP...' : 'Send OTP'}
          </Button>
        </CardFooter>
      </form>
      <div className="px-8 pb-4 text-center">
        <Button 
          variant="link" 
          className="text-sm text-devotion-600 hover:text-devotion-700"
          onClick={() => navigate('/home')}
        >
          Continue as Guest
        </Button>
      </div>
    </Card>
  );
};

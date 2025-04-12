
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from 'sonner';

export const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  
  // Timer for OTP resend
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate OTP
    if (!otp || otp.length < 4) {
      toast.error('Please enter a valid OTP');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate OTP verification - In a real app, this would call an API
    setTimeout(() => {
      setIsLoading(false);
      // For demo, any OTP works
      if (otp === '1234') {
        navigate('/registration');
        toast.success('OTP verified successfully');
      } else {
        // For demo, let's accept any OTP for testing
        navigate('/registration');
        toast.success('OTP verified successfully');
      }
    }, 1500);
  };

  const handleResendOtp = () => {
    toast.info('New OTP sent to your phone');
    setTimer(30);
  };

  const phoneNumber = sessionStorage.getItem('phoneNumber') || '';

  return (
    <Card className="w-[350px] shadow-lg border-saffron-200">
      <CardHeader className="space-y-1 text-center">
        <div className="flex justify-center mb-2">
          <img src="/logo.svg" alt="GIVE GITA Logo" className="h-12 w-12" />
        </div>
        <CardTitle className="text-2xl font-bold text-saffron-600">Verify OTP</CardTitle>
        <CardDescription>
          We've sent a one-time password to {phoneNumber ? `+${phoneNumber}` : 'your phone'}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input
              id="otp"
              placeholder="Enter 4-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              maxLength={4}
              required
              className="text-center text-lg tracking-widest border-saffron-200 focus:border-saffron-400"
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700"
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </Button>
          
          <div className="text-sm text-center">
            {timer > 0 ? (
              <p className="text-muted-foreground">Resend OTP in {timer}s</p>
            ) : (
              <Button 
                variant="link" 
                onClick={handleResendOtp}
                className="text-devotion-600 hover:text-devotion-700 p-0"
              >
                Resend OTP
              </Button>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};


import { useState, useEffect } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceInputProps {
  onResult: (text: string) => void;
  onError?: (error: string) => void;
  placeholder?: string;
}

const VoiceInput = ({ onResult, onError, placeholder = 'Click to use voice input' }: VoiceInputProps) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check if browser supports speech recognition
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setIsSupported(false);
      if (onError) onError('Voice recognition is not supported in this browser.');
    }
  }, [onError]);

  const toggleListening = () => {
    if (!isSupported) return;
    
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    setIsListening(true);

    // Create speech recognition object
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    // Set properties
    recognition.lang = 'en-IN'; // Set to Indian English
    recognition.continuous = false;
    recognition.interimResults = false;
    
    // Start listening
    try {
      recognition.start();
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onResult(transcript);
        stopListening();
      };
      
      recognition.onerror = (event) => {
        if (onError) onError(`Error occurred in recognition: ${event.error}`);
        stopListening();
      };
      
      recognition.onend = () => {
        setIsListening(false);
      };
      
    } catch (error) {
      if (onError) onError(`Could not start voice recognition: ${error}`);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    setIsListening(false);
  };

  if (!isSupported) {
    return null;
  }

  return (
    <Button 
      type="button" 
      variant="outline" 
      size="icon"
      className={`relative ${isListening ? 'bg-red-50 border-red-200' : ''}`}
      onClick={toggleListening}
      title={placeholder}
    >
      {isListening ? (
        <>
          <MicOff className="h-4 w-4 text-red-500" />
          <span className="absolute -top-1 -right-1">
            <Loader2 className="h-3 w-3 animate-spin text-primary" />
          </span>
        </>
      ) : (
        <Mic className="h-4 w-4" />
      )}
    </Button>
  );
};

export default VoiceInput;

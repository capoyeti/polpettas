import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, CheckCircle, Phone, MapPin, Star } from 'lucide-react';

const WhatsAppDemo = () => {
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const conversationFlow = [
    {
      type: 'customer',
      text: 'Hi, table for 4 tonight at 7pm?',
      timestamp: '18:23'
    },
    {
      type: 'bot',
      text: 'Hi there! 👋 I\'d love to help you book a table at Polpetta George. Let me check availability for 4 guests at 7pm tonight...',
      timestamp: '18:23',
      delay: 1000
    },
    {
      type: 'bot',
      text: '✅ Great news! We have availability at 7pm for your party of 4.\n\nTo confirm your booking, I\'ll need:\n• Your name\n• Contact number\n• Any dietary requirements?',
      timestamp: '18:23',
      delay: 2000
    },
    {
      type: 'customer',
      text: 'Sarah Miller, 073 123 4567. One vegetarian please',
      timestamp: '18:25'
    },
    {
      type: 'bot',
      text: 'Perfect Sarah! 🍝\n\n✅ *BOOKING CONFIRMED*\n\n📅 Tonight, 5 July 2025\n⏰ 7:00 PM\n👥 4 guests (1 vegetarian)\n📍 Polpetta George\nOuteniqua Lifestyle Centre\n\nYour table is secured - no deposit required!\n\nWe can\'t wait to serve you our famous comfort food! 🇮🇹',
      timestamp: '18:25',
      delay: 1500
    }
  ];

  const reminderMessages = [
    {
      type: 'bot',
      text: '👋 Hi Sarah! Just a friendly reminder about your 7pm table tonight at Polpetta George.\n\n🌟 *TONIGHT\'S SPECIALS*\n• Napoletana Pasta - R105\n• Arrabbiata (spicy chilli & garlic) - R125\n• Margherita Pizza - R94\n• Vegetariana Pasta - R139\n\n☔ *WEATHER TIP:* Bring an umbrella as rain is forecast tonight!\n\nSee you soon! 🍝',
      timestamp: '16:30'
    }
  ];

  const followUpMessages = [
    {
      type: 'bot',
      text: '🙏 Thank you for dining with us tonight Sarah!\n\nWe hope you loved your Italian comfort food experience. Would you mind leaving us a quick review?\n\n⭐ Google: bit.ly/polpetta-george\n⭐ Facebook: facebook.com/polpettamorningside\n\n💝 Follow us for daily specials:\n📸 Instagram: @polpettaristorante\n\nGrazie mille! 🇮🇹',
      timestamp: '21:45'
    }
  ];

  useEffect(() => {
    if (currentStep < conversationFlow.length) {
      const message = conversationFlow[currentStep];
      const timer = setTimeout(() => {
        if (message.type === 'bot') {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, message]);
            setCurrentStep(prev => prev + 1);
          }, message.delay || 500);
        } else {
          setMessages(prev => [...prev, message]);
          setCurrentStep(prev => prev + 1);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const resetDemo = () => {
    setMessages([]);
    setCurrentStep(0);
    setIsTyping(false);
  };

  const showReminder = () => {
    setMessages(reminderMessages);
    setCurrentStep(conversationFlow.length);
  };

  const showFollowUp = () => {
    setMessages(followUpMessages);
    setCurrentStep(conversationFlow.length);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-amber-100">
      {/* WhatsApp Header */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white p-5 flex items-center space-x-3 shadow-lg">
        <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center shadow-inner">
          <MessageCircle size={24} className="text-amber-100" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg font-serif">Polpetta Assistant</h3>
          <p className="text-xs text-amber-100 font-medium">Online • Typically replies instantly</p>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-amber-50 to-orange-50">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.type === 'customer' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-3 rounded-2xl shadow-md ${
              message.type === 'customer' 
                ? 'bg-gradient-to-br from-amber-600 to-orange-600 text-white' 
                : 'bg-white text-gray-800 border border-amber-200'
            }`}>
              <p className="text-sm whitespace-pre-line font-medium">{message.text}</p>
              <p className={`text-xs mt-2 ${
                message.type === 'customer' ? 'text-amber-100' : 'text-amber-600'
              }`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white px-4 py-3 rounded-2xl shadow-md border border-amber-200">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="p-5 bg-white border-t border-amber-200 space-y-3">
        <div className="grid grid-cols-3 gap-3">
          <button 
            onClick={resetDemo}
            className="px-3 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 shadow-md"
          >
            Reset Demo
          </button>
          <button 
            onClick={showReminder}
            className="px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md"
          >
            Show Reminder
          </button>
          <button 
            onClick={showFollowUp}
            className="px-3 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-md"
          >
            Show Follow-up
          </button>
        </div>
        
        <div className="text-xs text-gray-700 bg-gradient-to-r from-amber-50 to-orange-50 p-3 rounded-lg border border-amber-200">
          <strong className="text-amber-800 font-serif">Demo Features:</strong>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li>• Instant availability checking</li>
            <li>• Automated booking confirmation</li>
            <li>• Smart reminders with specials</li>
            <li>• Post-meal follow-up for reviews</li>
            <li>• Weather intelligence integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
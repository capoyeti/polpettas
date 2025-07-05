import React, { useState, useEffect } from 'react';
import { 
  Calendar, Mail, MessageCircle, Star, Gift, 
  MapPin, Clock, Utensils, Heart, Send,
  CheckCircle, AlertCircle, ArrowRight
} from 'lucide-react';

const CustomerJourneyDemo = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const journeyStages = [
    {
      id: 'booking',
      title: 'Initial Booking',
      time: 'Immediate',
      description: 'Customer makes reservation via WhatsApp',
      status: 'completed',
      details: {
        trigger: 'WhatsApp message received',
        action: 'Automated confirmation + booking details',
        content: 'Booking confirmed with deposit, special requests noted'
      }
    },
    {
      id: 'menu-preview',
      title: 'Menu Preview',
      time: '2 hours after booking',
      description: 'Personalized menu recommendations sent',
      status: 'active',
      details: {
        trigger: '2 hours post-booking',
        action: 'Send digital menu with personalized suggestions',
        content: 'Based on previous orders and dietary preferences'
      }
    },
    {
      id: 'pre-visit',
      title: 'Pre-Visit Reminder',
      time: '2 hours before reservation',
      description: 'Reminder with specials and practical info',
      status: 'pending',
      details: {
        trigger: '2 hours before reservation',
        action: 'Send reminder with today\'s specials',
        content: 'Parking info, special dishes, prep for dietary needs'
      }
    },
    {
      id: 'dining',
      title: 'Dining Experience',
      time: 'During visit',
      description: 'In-restaurant experience tracking',
      status: 'pending',
      details: {
        trigger: 'Customer checks in',
        action: 'Alert staff about preferences',
        content: 'Dietary needs, special occasions, VIP status'
      }
    },
    {
      id: 'post-meal',
      title: 'Post-Meal Follow-up',
      time: '2 hours after visit',
      description: 'Thank you message and review request',
      status: 'pending',
      details: {
        trigger: '2 hours after bill payment',
        action: 'Send thank you + review request',
        content: 'Personalized message, review links, special offer'
      }
    },
    {
      id: 'retention',
      title: 'Customer Retention',
      time: '1 month later',
      description: 'Re-engagement and loyalty building',
      status: 'pending',
      details: {
        trigger: '30 days since last visit',
        action: 'Personalized re-engagement offer',
        content: 'Miss your favorite dish? Special returning customer discount'
      }
    }
  ];

  const messageTemplates = {
    booking: {
      type: 'whatsapp',
      content: `🎉 Booking Confirmed!\n\n📅 Tonight, 5 July 2025\n⏰ 7:00 PM\n👥 4 guests (1 vegetarian)\n📍 Polpetta George\n\nDeposit: R50 (deducted from bill)\nBooking ref: #PG2025070501\n\nWe can't wait to serve you! 🇮🇹`
    },
    'menu-preview': {
      type: 'email',
      subject: 'Your Polpetta experience awaits! 🍝',
      content: `Hi Sarah,\n\nThanks for choosing Polpetta George tonight!\n\nBased on your vegetarian preference, we've handpicked some specialties:\n\n🌿 Vegetariana Pasta (mushrooms, baby marrows, artichokes, peas, carrots & olives) - R139\n🍄 Pesto (basil, pine nuts, olive oil) - R125  \n🧀 Margherita Pizza - R94\n🥗 Chopped Greek Salad - R105\n\nOur chef also recommends our signature Melanzane starter - perfect for sharing!\n\nSee you at 7pm!\nThe Polpetta George Team`
    },
    'pre-visit': {
      type: 'whatsapp',
      content: `🍝 Hi Sarah! Looking forward to seeing you in 2 hours!\n\n✨ TONIGHT'S SPECIALS:\n• Polpette (beef meatballs in napoletana sauce) - R145\n• Frutti di Mare - R174\n• Grilled Calamari starter - R94\n\n☔ WEATHER: Rain forecast - bring an umbrella!\n⚡ Power: We're on mains power tonight\n\nYour vegetarian options are ready! See you soon 🇮🇹`
    },
    dining: {
      type: 'system',
      content: `🔔 TABLE 12 ALERT\n\nGuests: Sarah Miller party of 4\nArrivals: 7:00 PM\n\n📝 NOTES:\n• 1 vegetarian guest\n• First time at George location\n• Previous orders: loved pesto dishes\n• Dietary: No nuts\n\n💡 SUGGESTIONS:\n• Offer complimentary Melanzane starter\n• Recommend Vegetariana Pasta - R139\n• Mention wine pairings with Pesto`
    },
    'post-meal': {
      type: 'whatsapp',
      content: `🙏 Thank you Sarah!\n\nWe hope you loved your Polpetta experience tonight! Your table had such wonderful energy.\n\n⭐ Would you mind sharing your experience?\nGoogle: bit.ly/polpetta-george-review\n\n🎁 NEXT VISIT BONUS:\nShow this message for 10% off your next meal!\n\nGrazie mille! We'd love to see you again soon 🇮🇹`
    },
    retention: {
      type: 'email',
      subject: 'We miss you at Polpetta! 💙',
      content: `Ciao Sarah!\n\nIt's been a month since your delicious evening at Polpetta George, and we miss you!\n\nWe've added some exciting new vegetarian options:\n🆕 Prima Vera (broccoli, artichokes & fresh cherry tomatoes) - R139\n🆕 Aurora Baked Pasta - R140\n🆕 Chopped Halloumi Salad - R144\n\n🎯 EXCLUSIVE OFFER:\nReturn within 2 weeks and enjoy 15% off your entire table!\nCode: WELCOME-BACK-SARAH\n\nP.S. Our chef still talks about how much you enjoyed the pesto! 😊\n\nBuongiorno!\nEd, Philip & The Polpetta Team`
    }
  };

  const playJourney = () => {
    if (isPaused) {
      // Resume from current stage
      setIsPaused(false);
      setIsPlaying(true);
      
      const interval = setInterval(() => {
        setCurrentStage(prev => {
          if (prev >= journeyStages.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            setIntervalId(null);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
      setIntervalId(interval);
    } else {
      // Start from beginning
      setIsPlaying(true);
      setIsPaused(false);
      setCurrentStage(0);
      
      const interval = setInterval(() => {
        setCurrentStage(prev => {
          if (prev >= journeyStages.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            setIntervalId(null);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
      setIntervalId(interval);
    }
  };

  const pauseJourney = () => {
    setIsPaused(true);
    setIsPlaying(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetJourney = () => {
    setCurrentStage(0);
    setIsPlaying(false);
    setIsPaused(false);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const getStageStatus = (index) => {
    if (index < currentStage) return 'completed';
    if (index === currentStage) return 'active';
    return 'pending';
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'active': return <AlertCircle className="w-5 h-5 text-blue-600 animate-pulse" />;
      case 'pending': return <Clock className="w-5 h-5 text-gray-400" />;
      default: return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getChannelIcon = (type) => {
    switch(type) {
      case 'whatsapp': return <MessageCircle className="w-4 h-4 text-green-600" />;
      case 'email': return <Mail className="w-4 h-4 text-blue-600" />;
      case 'system': return <AlertCircle className="w-4 h-4 text-purple-600" />;
      default: return <Send className="w-4 h-4" />;
    }
  };

  const currentMessage = messageTemplates[journeyStages[currentStage]?.id];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-900 text-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-amber-600">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif text-amber-100 mb-2">Smart Customer Journey</h1>
            <p className="text-amber-200 text-lg font-medium">Automated touchpoints that enhance the Polpetta dining experience</p>
            <div className="flex items-center mt-3 space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-amber-100 text-sm font-medium">Journey automation active</span>
            </div>
          </div>
          <div className="space-x-4">
            <button 
              onClick={playJourney}
              disabled={isPlaying}
              className="px-6 py-3 bg-white bg-opacity-20 text-white rounded-xl hover:bg-opacity-30 disabled:opacity-50 transition-all duration-200 font-semibold backdrop-blur-sm border border-white border-opacity-30"
            >
              {isPlaying ? 'Playing...' : isPaused ? 'Resume' : 'Play Journey'}
            </button>
            {(isPlaying || isPaused) && (
              <button 
                onClick={pauseJourney}
                disabled={!isPlaying}
                className="px-6 py-3 bg-white bg-opacity-20 text-white rounded-xl hover:bg-opacity-30 disabled:opacity-50 transition-all duration-200 font-semibold backdrop-blur-sm border border-white border-opacity-30"
              >
                Pause
              </button>
            )}
            <button 
              onClick={resetJourney}
              className="px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-all duration-200 font-semibold shadow-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">{/* Forced to always be side-by-side */}
        {/* Journey Timeline */}
        <div className="bg-white rounded-xl shadow-xl p-6 border border-amber-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6 font-serif">Customer Journey Timeline</h2>
          
          <div className="space-y-6">
            {journeyStages.map((stage, index) => (
              <div key={stage.id} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  {getStatusIcon(getStageStatus(index))}
                  {index < journeyStages.length - 1 && (
                    <div className={`w-0.5 h-16 mt-3 ${
                      getStageStatus(index) === 'completed' ? 'bg-gradient-to-b from-green-600 to-green-400' : 'bg-gray-300'
                    }`}></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className={`font-bold text-lg font-serif ${
                      getStageStatus(index) === 'active' ? 'text-amber-700' : 
                      getStageStatus(index) === 'completed' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {stage.title}
                    </h3>
                    <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium border border-amber-200">
                      {stage.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{stage.description}</p>
                  
                  {getStageStatus(index) === 'active' && (
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-500">
                      <p className="text-sm font-bold text-amber-800">Currently Active</p>
                      <p className="text-xs text-amber-700 mt-1 font-medium">{stage.details.action}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Preview */}
        <div className="bg-white rounded-xl shadow-xl p-6 border border-amber-100">
          <div className="flex items-center space-x-3 mb-6">
            <h2 className="text-xl font-bold text-gray-800 font-serif">Message Preview</h2>
            {currentMessage && getChannelIcon(currentMessage.type)}
          </div>
          
          {currentMessage ? (
            <div className="space-y-4">
              {currentMessage.type === 'whatsapp' && (
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-green-800 font-serif">WhatsApp Message</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                    <p className="text-sm whitespace-pre-line font-medium">{currentMessage.content}</p>
                  </div>
                </div>
              )}

              {currentMessage.type === 'email' && (
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-blue-800 font-serif">Email</span>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
                    <div className="border-b pb-3 mb-4">
                      <p className="font-bold text-sm">Subject: {currentMessage.subject}</p>
                      <p className="text-xs text-gray-600 mt-1">To: sarah.miller@email.com</p>
                    </div>
                    <p className="text-sm whitespace-pre-line font-medium">{currentMessage.content}</p>
                  </div>
                </div>
              )}

              {currentMessage.type === 'system' && (
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-purple-800 font-serif">Staff Alert System</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                    <p className="text-sm whitespace-pre-line font-medium">{currentMessage.content}</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-500">
              <Clock className="w-16 h-16 mx-auto mb-4 text-amber-400" />
              <p className="font-medium">Click "Play Journey" to see automated messages</p>
            </div>
          )}
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="bg-white rounded-xl shadow-xl p-8 border border-amber-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif">Automation Features & Benefits</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-blue-600 text-lg font-serif">Customer Experience</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Instant booking confirmations</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Personalized menu recommendations</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Proactive service alerts</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Consistent follow-up</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>Loyalty program integration</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-green-600 text-lg font-serif">Operational Benefits</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Reduced no-shows (20% → 1.6%)</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Staff freed for personal service</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Consistent messaging</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Automated review requests</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>Customer preference tracking</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-purple-600 text-lg font-serif">Business Growth</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Higher customer retention</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Increased review generation</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Better customer insights</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Scalable across locations</li>
              <li className="flex items-start"><span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>Data-driven improvements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Demo Note */}
      <div className="text-xs text-gray-700 bg-white p-6 rounded-xl shadow-lg border border-amber-100">
        <strong className="text-amber-800 font-serif text-sm">Journey Automation Features:</strong> 
        <span className="ml-2 text-gray-600 font-medium">This demo shows how each customer touchpoint is automatically triggered and personalized, reducing manual work while enhancing the dining experience. The system learns from customer preferences and behavior to improve future interactions.</span>
      </div>
    </div>
  );
};

export default CustomerJourneyDemo;
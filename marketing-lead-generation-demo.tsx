import React, { useState, useEffect } from 'react';
import { 
  Star, MessageCircle, Mail, Calendar, Users, TrendingUp,
  Instagram, Facebook, MapPin, Target, Zap, Eye,
  ThumbsUp, Share2, Heart, Clock, DollarSign
} from 'lucide-react';

const MarketingLeadGenDemo = () => {
  const [activeTab, setActiveTab] = useState('social');
  const [isGenerating, setIsGenerating] = useState(false);

  const socialMediaData = {
    platforms: [
      {
        name: 'Instagram',
        icon: Instagram,
        followers: 2834,
        engagement: 6.8,
        posts: 142,
        leads: 28,
        color: 'text-pink-600'
      },
      {
        name: 'Facebook',
        icon: Facebook,
        followers: 4521,
        engagement: 4.2,
        posts: 89,
        leads: 45,
        color: 'text-blue-600'
      },
      {
        name: 'Google Reviews',
        icon: Star,
        followers: 0,
        engagement: 0,
        posts: 0,
        leads: 67,
        color: 'text-yellow-600'
      }
    ],
    recentPosts: [
      {
        platform: 'Instagram',
        content: '🍝 Fresh truffle polpetta just dropped! Made with locally sourced truffles from the Garden Route. Book your table tonight! #TruffleNight #GeorgeEats',
        engagement: { likes: 142, comments: 23, shares: 8 },
        time: '2 hours ago',
        leads: 6
      },
      {
        platform: 'Facebook',
        content: 'Weekend Special Alert! 🎉 Bring the family for our Sunday Polpetta Platter - perfect for sharing! Kids eat half price. Book now: 073 097 0782',
        engagement: { likes: 89, comments: 15, shares: 12 },
        time: '4 hours ago',
        leads: 8
      }
    ]
  };

  const reviewData = [
    {
      platform: 'Google',
      reviewer: 'Sarah M.',
      rating: 5,
      text: 'Amazing polpetta and the staff were so attentive! Will definitely be back.',
      time: '3 hours ago',
      response: 'Thank you Sarah! We loved having you and look forward to your next visit! 🍝',
      status: 'responded'
    },
    {
      platform: 'TripAdvisor',
      reviewer: 'Mike R.',
      rating: 4,
      text: 'Great food, authentic Italian flavors. The pesto polpetta was incredible.',
      time: '1 day ago',
      response: null,
      status: 'pending'
    },
    {
      platform: 'Google',
      reviewer: 'Jenny K.',
      rating: 5,
      text: 'Best Italian in George! The atmosphere is perfect for date night.',
      time: '2 days ago',
      response: 'Grazie mille Jenny! So glad we could make your evening special ❤️',
      status: 'responded'
    }
  ];

  const campaignData = [
    {
      name: 'Heritage Day Family Special',
      type: 'Facebook/Instagram Ads',
      budget: 2500,
      spent: 1842,
      reach: 12400,
      clicks: 486,
      bookings: 23,
      revenue: 8970,
      status: 'active',
      roi: 387
    },
    {
      name: 'Truffle Season Promotion',
      type: 'Google Ads',
      budget: 1800,
      spent: 1654,
      reach: 8900,
      clicks: 234,
      bookings: 18,
      revenue: 6480,
      status: 'active',
      roi: 292
    },
    {
      name: 'Weekend Date Night',
      type: 'Instagram Stories',
      budget: 800,
      spent: 745,
      reach: 5600,
      clicks: 189,
      bookings: 12,
      revenue: 3240,
      status: 'completed',
      roi: 335
    }
  ];

  const automationRules = [
    {
      trigger: 'New Google Review (4+ stars)',
      action: 'Auto-thank + invite to follow Instagram',
      status: 'active',
      results: '12 new followers this week'
    },
    {
      trigger: 'Negative review detected',
      action: 'Alert manager + draft apology response',
      status: 'active',
      results: '2 issues resolved in <2 hours'
    },
    {
      trigger: 'Local event detected',
      action: 'Create targeted promotion post',
      status: 'active',
      results: 'Heritage Day campaign auto-generated'
    },
    {
      trigger: 'Competitor mentions pasta special',
      action: 'Counter with polpetta promotion',
      status: 'active',
      results: '3 competitive responses this month'
    }
  ];

  const generateContent = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const formatCurrency = (amount) => `R${amount.toLocaleString()}`;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-900 text-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-amber-600">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif text-amber-100 mb-2">Marketing & Lead Generation Hub</h1>
            <p className="text-amber-200 text-lg font-medium">Automated social media • Review management • Campaign optimization</p>
            <div className="flex items-center mt-3 space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-amber-100 text-sm font-medium">All campaigns active</span>
            </div>
          </div>
          <div className="text-right bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm space-y-1">
            <p className="text-amber-200 text-sm font-medium">This Month</p>
            <p className="text-3xl font-bold text-white font-serif">140 leads</p>
            <p className="text-amber-100 text-sm">Revenue: {formatCurrency(18690)}</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Followers</p>
              <p className="text-2xl font-bold text-gray-800">7,355</p>
              <div className="flex items-center mt-1">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600">+12% this month</span>
              </div>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-2xl font-bold text-gray-800">4.7</p>
              <p className="text-sm text-gray-600">89 reviews this month</p>
            </div>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Campaign ROI</p>
              <p className="text-2xl font-bold text-gray-800">341%</p>
              <p className="text-sm text-gray-600">Across all campaigns</p>
            </div>
            <Target className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Leads Generated</p>
              <p className="text-2xl font-bold text-gray-800">140</p>
              <p className="text-sm text-gray-600">53 converted to bookings</p>
            </div>
            <Zap className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('social')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'social'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Share2 className="w-5 h-5 inline mr-2" />
              Social Media
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Star className="w-5 h-5 inline mr-2" />
              Review Management
            </button>
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'campaigns'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Target className="w-5 h-5 inline mr-2" />
              Ad Campaigns
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'automation'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Zap className="w-5 h-5 inline mr-2" />
              Automation Rules
            </button>
          </nav>
        </div>

        {/* Social Media Tab */}
        {activeTab === 'social' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {socialMediaData.platforms.map((platform, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <platform.icon className={`w-6 h-6 ${platform.color}`} />
                    <h3 className="font-semibold text-lg">{platform.name}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {platform.followers > 0 && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Followers</span>
                        <span className="font-medium">{platform.followers.toLocaleString()}</span>
                      </div>
                    )}
                    {platform.engagement > 0 && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Engagement</span>
                        <span className="font-medium">{platform.engagement}%</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Leads Generated</span>
                      <span className="font-medium text-green-600">{platform.leads}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Recent Posts</h3>
                <button 
                  onClick={generateContent}
                  disabled={isGenerating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isGenerating ? 'Generating...' : 'AI Generate Post'}
                </button>
              </div>

              {isGenerating && (
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="font-medium text-blue-800">AI is creating your content...</span>
                  </div>
                  <div className="text-sm text-blue-700">
                    🍝 Weekend vibes at Polpetta George! Our chefs are crafting something special with fresh Garden Route ingredients. Tonight's features: Frutti di Mare (R174) and our famous Grilled Calamari starter (R94)! 
                    Perfect for date night or family dinner ❤️ 
                    #WeekendSpecial #GeorgeEats #FruttiDiMare #PolpettaMagic
                    
                    Book your table: 073 097 0782 📞
                  </div>
                </div>
              )}

              {socialMediaData.recentPosts.map((post, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    {post.platform === 'Instagram' ? 
                      <Instagram className="w-5 h-5 text-pink-600" /> : 
                      <Facebook className="w-5 h-5 text-blue-600" />
                    }
                    <span className="font-medium">{post.platform}</span>
                    <span className="text-sm text-gray-500">• {post.time}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{post.content}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.engagement.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{post.engagement.shares}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <Users className="w-4 h-4" />
                      <span>{post.leads} leads</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="p-6">
            <div className="space-y-6">
              {reviewData.map((review, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${
                            i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                          }`} />
                        ))}
                      </div>
                      <span className="font-medium">{review.reviewer}</span>
                      <span className="text-sm text-gray-500">on {review.platform}</span>
                      <span className="text-sm text-gray-500">• {review.time}</span>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      review.status === 'responded' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {review.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  
                  {review.response ? (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <p className="text-sm text-blue-800"><strong>Your Response:</strong></p>
                      <p className="text-sm text-blue-700 mt-1">{review.response}</p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                        <p className="text-sm text-yellow-800"><strong>AI Suggested Response:</strong></p>
                        <p className="text-sm text-yellow-700 mt-1">
                          "Thank you Mike for the wonderful review! We're thrilled you enjoyed our authentic Italian flavors. The Pesto pasta is definitely one of our chef's specialties - made with fresh basil and pine nuts. We can't wait to welcome you back to try our signature Polpette! Grazie mille! 🍝"
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Use AI Response
                        </button>
                        <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                          Write Custom
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="p-6">
            <div className="space-y-6">
              {campaignData.map((campaign, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{campaign.name}</h3>
                      <p className="text-sm text-gray-600">{campaign.type}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {campaign.status}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">ROI: {campaign.roi}%</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-semibold">{formatCurrency(campaign.budget)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Spent</p>
                      <p className="font-semibold">{formatCurrency(campaign.spent)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Reach</p>
                      <p className="font-semibold">{campaign.reach.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Bookings</p>
                      <p className="font-semibold text-green-600">{campaign.bookings}</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {Math.round((campaign.spent / campaign.budget) * 100)}% of budget used
                  </p>
                  
                  <div className="mt-4 p-3 bg-green-50 rounded">
                    <p className="text-sm text-green-800">
                      <strong>Revenue Generated:</strong> {formatCurrency(campaign.revenue)} 
                      ({campaign.roi}% ROI)
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Automation Tab */}
        {activeTab === 'automation' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Active Automation Rules</h3>
              <p className="text-gray-600">Smart triggers that respond to customer activity and market conditions</p>
            </div>
            
            <div className="space-y-4">
              {automationRules.map((rule, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <h4 className="font-semibold">{rule.trigger}</h4>
                    </div>
                    <span className="text-sm text-green-600">{rule.status}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{rule.action}</p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-sm text-blue-800">
                      <strong>Recent Results:</strong> {rule.results}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-purple-800">Marketing Automation Impact</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    This month's automation rules generated <strong>47 new leads</strong> and saved 
                    <strong> 15+ hours</strong> of manual social media management work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Demo Features */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Marketing Automation Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-blue-600">Social Media Management</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI-powered content generation</li>
              <li>• Automated posting schedules</li>
              <li>• Cross-platform coordination</li>
              <li>• Engagement tracking & alerts</li>
              <li>• Lead capture from social traffic</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-green-600">Review Management</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Automatic review monitoring</li>
              <li>• AI-suggested responses</li>
              <li>• Sentiment analysis</li>
              <li>• Crisis alert system</li>
              <li>• Review invitation automation</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-purple-600">Campaign Intelligence</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Local event detection</li>
              <li>• Competitor analysis</li>
              <li>• Dynamic campaign adjustment</li>
              <li>• ROI optimization</li>
              <li>• Multi-location coordination</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingLeadGenDemo;
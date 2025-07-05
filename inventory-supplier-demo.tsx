import React, { useState, useEffect } from 'react';
import { 
  Package, AlertTriangle, TrendingUp, TrendingDown, 
  DollarSign, Calendar, Truck, Clock, CheckCircle,
  BarChart3, ShoppingCart, Bell, Eye, RefreshCw
} from 'lucide-react';

const InventorySupplierDemo = () => {
  const [activeTab, setActiveTab] = useState('inventory');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const inventoryData = [
    {
      item: 'Mozzarella Cheese',
      category: 'Dairy',
      currentStock: 8,
      unit: 'kg',
      minLevel: 15,
      maxLevel: 50,
      avgDaily: 6.5,
      daysLeft: 1.2,
      status: 'critical',
      cost: 145,
      supplier: 'Roma Foods',
      lastOrdered: '2025-07-03',
      trend: 'up'
    },
    {
      item: 'Pasta (Penne)',
      category: 'Dry Goods',
      currentStock: 45,
      unit: 'kg',
      minLevel: 25,
      maxLevel: 100,
      avgDaily: 8.2,
      daysLeft: 5.5,
      status: 'low',
      cost: 28,
      supplier: 'Italian Imports SA',
      lastOrdered: '2025-07-01',
      trend: 'steady'
    },
    {
      item: 'Tomato Passata',
      category: 'Canned',
      currentStock: 24,
      unit: 'cans',
      minLevel: 12,
      maxLevel: 60,
      avgDaily: 4.1,
      daysLeft: 5.9,
      status: 'good',
      cost: 35,
      supplier: 'Cape Harvest',
      lastOrdered: '2025-06-28',
      trend: 'down'
    },
    {
      item: 'Fresh Basil',
      category: 'Herbs',
      currentStock: 0.8,
      unit: 'kg',
      minLevel: 1,
      maxLevel: 3,
      avgDaily: 0.3,
      daysLeft: 2.7,
      status: 'critical',
      cost: 85,
      supplier: 'Garden Route Herbs',
      lastOrdered: '2025-07-04',
      trend: 'up'
    },
    {
      item: 'Olive Oil (Extra Virgin)',
      category: 'Oils',
      currentStock: 12,
      unit: 'L',
      minLevel: 8,
      maxLevel: 25,
      avgDaily: 1.8,
      daysLeft: 6.7,
      status: 'good',
      cost: 165,
      supplier: 'Mediterranean Imports',
      lastOrdered: '2025-06-30',
      trend: 'steady'
    }
  ];

  const supplierData = [
    {
      name: 'Roma Foods',
      category: 'Dairy & Cheese',
      rating: 4.8,
      reliability: 96,
      avgDelivery: 24,
      lastOrder: '2025-07-03',
      monthlySpend: 12400,
      trend: 'up',
      specialOffers: ['15% off orders >R5000', 'Free delivery Wednesdays']
    },
    {
      name: 'Italian Imports SA',
      category: 'Pasta & Dry Goods',
      rating: 4.6,
      reliability: 94,
      avgDelivery: 48,
      lastOrder: '2025-07-01',
      monthlySpend: 8900,
      trend: 'steady',
      specialOffers: ['Bulk discount 10kg+']
    },
    {
      name: 'Cape Harvest',
      category: 'Canned & Preserved',
      rating: 4.4,
      reliability: 91,
      avgDelivery: 36,
      lastOrder: '2025-06-28',
      monthlySpend: 5600,
      trend: 'down',
      specialOffers: ['Summer special -20%']
    }
  ];

  const predictions = [
    {
      item: 'Mozzarella Cheese',
      action: 'ORDER NOW',
      reason: 'Weekend rush predicted + high pizza demand (Margherita, Regina bestsellers)',
      suggestedQty: 25,
      urgency: 'high',
      cost: 3625
    },
    {
      item: 'Fresh Basil',
      action: 'ORDER TOMORROW',
      reason: 'Pesto pasta orders increasing + Caprese salad popularity',
      suggestedQty: 2,
      urgency: 'medium',
      cost: 170
    },
    {
      item: 'Pasta (Penne)',
      action: 'MONITOR',
      reason: 'Stock adequate for 5 days, Napoletana & Arrabbiata stable demand',
      suggestedQty: 0,
      urgency: 'low',
      cost: 0
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'low': return 'text-yellow-600 bg-yellow-100';
      case 'good': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch(urgency) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <div className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount) => `R${amount.toLocaleString()}`;

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-900 text-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-amber-600">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif text-amber-100 mb-2">Smart Inventory & Supplier Management</h1>
            <p className="text-amber-200 text-lg font-medium">Real-time tracking • Predictive ordering • Cost optimization</p>
            <div className="flex items-center mt-3 space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-amber-100 text-sm font-medium">All suppliers connected</span>
            </div>
          </div>
          <div className="text-right bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-amber-200 text-sm font-medium">Last Update</p>
            <p className="text-2xl font-bold text-white font-serif">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-lg mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'inventory'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Package className="w-5 h-5 inline mr-2" />
              Inventory Tracking
            </button>
            <button
              onClick={() => setActiveTab('suppliers')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'suppliers'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Truck className="w-5 h-5 inline mr-2" />
              Supplier Management
            </button>
            <button
              onClick={() => setActiveTab('predictions')}
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'predictions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart3 className="w-5 h-5 inline mr-2" />
              Smart Predictions
            </button>
          </nav>
        </div>

        {/* Inventory Tab */}
        {activeTab === 'inventory' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-red-600">Critical Items</p>
                    <p className="text-2xl font-bold text-red-700">2</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-yellow-600">Low Stock</p>
                    <p className="text-2xl font-bold text-yellow-700">1</p>
                  </div>
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600">Well Stocked</p>
                    <p className="text-2xl font-bold text-green-700">2</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600">Total Value</p>
                    <p className="text-2xl font-bold text-blue-700">R47,890</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4">Item</th>
                    <th className="text-left py-3 px-4">Current Stock</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Days Left</th>
                    <th className="text-left py-3 px-4">Usage Trend</th>
                    <th className="text-left py-3 px-4">Supplier</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">{item.item}</p>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">{item.currentStock} {item.unit}</p>
                          <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                            <div 
                              className={`h-2 rounded-full ${
                                item.status === 'critical' ? 'bg-red-500' :
                                item.status === 'low' ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${Math.min((item.currentStock / item.maxLevel) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                          {item.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">{item.daysLeft.toFixed(1)} days</p>
                          <p className="text-sm text-gray-500">{item.avgDaily} {item.unit}/day avg</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        {getTrendIcon(item.trend)}
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm">{item.supplier}</p>
                        <p className="text-xs text-gray-500">{formatCurrency(item.cost)}/{item.unit}</p>
                      </td>
                      <td className="py-3 px-4">
                        {item.status === 'critical' && (
                          <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">
                            Order Now
                          </button>
                        )}
                        {item.status === 'low' && (
                          <button className="px-3 py-1 bg-yellow-600 text-white text-xs rounded hover:bg-yellow-700">
                            Schedule Order
                          </button>
                        )}
                        {item.status === 'good' && (
                          <button className="px-3 py-1 bg-gray-600 text-white text-xs rounded hover:bg-gray-700">
                            Monitor
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Suppliers Tab */}
        {activeTab === 'suppliers' && (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {supplierData.map((supplier, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">{supplier.name}</h3>
                    {getTrendIcon(supplier.trend)}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{supplier.category}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Rating</span>
                      <div className="flex items-center">
                        <span className="font-medium">{supplier.rating}</span>
                        <div className="flex ml-2">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-3 h-3 rounded-full ${
                              i < Math.floor(supplier.rating) ? 'bg-yellow-400' : 'bg-gray-300'
                            }`}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Reliability</span>
                      <span className="font-medium">{supplier.reliability}%</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg Delivery</span>
                      <span className="font-medium">{supplier.avgDelivery}h</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Spend</span>
                      <span className="font-medium">{formatCurrency(supplier.monthlySpend)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Last Order</span>
                      <span className="font-medium">{supplier.lastOrder}</span>
                    </div>
                  </div>
                  
                  {supplier.specialOffers.length > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="text-sm font-medium text-blue-800 mb-2">Current Offers:</p>
                      {supplier.specialOffers.map((offer, i) => (
                        <p key={i} className="text-xs text-blue-600">• {offer}</p>
                      ))}
                    </div>
                  )}
                  
                  <div className="mt-4 flex space-x-2">
                    <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-medium">
                      Place Order
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 font-medium">
                      View History
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Predictions Tab */}
        {activeTab === 'predictions' && (
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Ordering Recommendations</h3>
              <p className="text-gray-600">Based on usage patterns, upcoming bookings, and supplier availability</p>
            </div>
            
            <div className="space-y-4">
              {predictions.map((pred, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getUrgencyColor(pred.urgency)}`}></div>
                      <h4 className="font-semibold text-lg">{pred.item}</h4>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        pred.urgency === 'high' ? 'bg-red-100 text-red-700' :
                        pred.urgency === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {pred.action}
                      </span>
                    </div>
                    {pred.cost > 0 && (
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Estimated Cost</p>
                        <p className="font-semibold text-lg">{formatCurrency(pred.cost)}</p>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">{pred.reason}</p>
                  
                  {pred.suggestedQty > 0 && (
                    <div className="flex items-center justify-between">
                      <p className="text-sm">
                        <strong>Suggested Quantity:</strong> {pred.suggestedQty} units
                      </p>
                      <div className="space-x-2">
                        {pred.urgency === 'high' && (
                          <button className="px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                            Order Now
                          </button>
                        )}
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                          Schedule Order
                        </button>
                        <button className="px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                          Modify
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Cost Savings This Month</h4>
                  <p className="text-sm text-green-700 mt-1">
                    By following AI recommendations, you've saved an estimated <strong>R3,450</strong> through:
                  </p>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Reduced food waste: R1,890</li>
                    <li>• Bulk order discounts: R980</li>
                    <li>• Optimal timing purchases: R580</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Demo Features */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Smart Inventory Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-blue-600">Real-Time Tracking</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Live stock level monitoring</li>
              <li>• Automated usage calculation</li>
              <li>• Expiration date alerts</li>
              <li>• Cost per unit tracking</li>
              <li>• Multi-location synchronization</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-green-600">Predictive Ordering</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• AI-powered demand forecasting</li>
              <li>• Booking-based predictions</li>
              <li>• Seasonal adjustment algorithms</li>
              <li>• Supplier availability integration</li>
              <li>• Cost optimization recommendations</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-purple-600">Supplier Intelligence</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Performance tracking & ratings</li>
              <li>• Price comparison tools</li>
              <li>• Delivery reliability monitoring</li>
              <li>• Special offer notifications</li>
              <li>• Automated purchase orders</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventorySupplierDemo;
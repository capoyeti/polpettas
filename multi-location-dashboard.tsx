import React, { useState, useEffect } from 'react';
import { 
  MapPin, Users, DollarSign, Clock, AlertTriangle, 
  TrendingUp, TrendingDown, Calendar, Star, Package,
  Wifi, WifiOff, Battery, BatteryLow 
} from 'lucide-react';

const MultiLocationDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const locations = [
    {
      id: 'morningside',
      name: 'Polpetta Morningside',
      address: 'The Wedge Shopping Centre',
      status: 'online',
      todayRevenue: 18450,
      todayBookings: 42,
      currentOccupancy: 28,
      totalTables: 35,
      avgRating: 4.6,
      alerts: ['Low stock: Mozzarella (2 days)'],
      powerStatus: 'mains',
      trending: 'up',
      dailyTarget: 20000,
      topDish: 'Polpette (meatballs)'
    },
    {
      id: 'linksfield',
      name: 'Polpetta Linksfield',
      address: 'The Neighbourhood Square',
      status: 'online',
      todayRevenue: 14200,
      todayBookings: 31,
      currentOccupancy: 18,
      totalTables: 28,
      avgRating: 4.4,
      alerts: ['Staff shortage: Need 1 waiter for dinner rush'],
      powerStatus: 'mains',
      trending: 'up',
      dailyTarget: 16000,
      topDish: 'Margherita Pizza'
    },
    {
      id: 'george',
      name: 'Polpetta George',
      address: 'Outeniqua Lifestyle Centre',
      status: 'online',
      todayRevenue: 8900,
      todayBookings: 19,
      currentOccupancy: 12,
      totalTables: 22,
      avgRating: 4.8,
      alerts: [],
      powerStatus: 'generator',
      trending: 'steady',
      dailyTarget: 12000,
      topDish: 'Arrabbiata Pasta'
    }
  ];

  const totalRevenue = locations.reduce((sum, loc) => sum + loc.todayRevenue, 0);
  const totalBookings = locations.reduce((sum, loc) => sum + loc.todayBookings, 0);
  const totalOccupancy = locations.reduce((sum, loc) => sum + loc.currentOccupancy, 0);
  const totalTables = locations.reduce((sum, loc) => sum + loc.totalTables, 0);

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'text-green-600';
      case 'offline': return 'text-red-600';
      default: return 'text-yellow-600';
    }
  };

  const getPowerIcon = (powerStatus) => {
    switch(powerStatus) {
      case 'mains': return <Battery className="w-4 h-4 text-green-600" />;
      case 'generator': return <BatteryLow className="w-4 h-4 text-yellow-600" />;
      case 'outage': return <WifiOff className="w-4 h-4 text-red-600" />;
      default: return <Battery className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount) => `R${amount.toLocaleString()}`;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-b from-amber-50 to-orange-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 via-orange-800 to-red-900 text-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-amber-600">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif text-amber-100 mb-2">Polpetta Command Center</h1>
            <p className="text-amber-200 text-lg font-medium">Live operational overview across all locations • {currentTime.toLocaleTimeString()}</p>
            <div className="flex items-center mt-3 space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-amber-100 text-sm font-medium">All systems operational</span>
            </div>
          </div>
          <div className="text-right bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-amber-200 text-sm font-medium">Today's Performance</p>
            <p className="text-4xl font-bold text-white font-serif">{formatCurrency(totalRevenue)}</p>
            <p className="text-amber-100 text-sm">{totalBookings} bookings • {Math.round((totalOccupancy/totalTables)*100)}% occupied</p>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-amber-600 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-amber-700 font-semibold">Total Revenue</p>
              <p className="text-3xl font-bold text-gray-800 font-serif">{formatCurrency(totalRevenue)}</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600 font-medium">+12% vs yesterday</span>
              </div>
            </div>
            <DollarSign className="w-10 h-10 text-amber-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-blue-600 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-semibold">Active Bookings</p>
              <p className="text-3xl font-bold text-gray-800 font-serif">{totalBookings}</p>
              <p className="text-sm text-blue-600 font-medium">8 tonight remaining</p>
            </div>
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-purple-600 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-semibold">Table Occupancy</p>
              <p className="text-3xl font-bold text-gray-800 font-serif">{totalOccupancy}/{totalTables}</p>
              <p className="text-sm text-purple-600 font-medium">{Math.round((totalOccupancy/totalTables)*100)}% filled</p>
            </div>
            <Users className="w-10 h-10 text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-6 border-l-4 border-yellow-500 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-yellow-700 font-semibold">Avg Rating</p>
              <p className="text-3xl font-bold text-gray-800 font-serif">4.6</p>
              <p className="text-sm text-yellow-600 font-medium">Across all locations</p>
            </div>
            <Star className="w-10 h-10 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Location Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {locations.map((location) => (
          <div key={location.id} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-amber-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h3 className="font-bold text-lg text-gray-800 font-serif">{location.name}</h3>
              </div>
              <div className="flex items-center space-x-2">
                {getPowerIcon(location.powerStatus)}
                <div className={`w-4 h-4 rounded-full shadow-inner ${location.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
              </div>
            </div>

            <p className="text-sm text-amber-700 mb-4 font-medium">{location.address}</p>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">Today's Revenue</span>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg text-gray-800 font-serif">{formatCurrency(location.todayRevenue)}</span>
                  {location.trending === 'up' && <TrendingUp className="w-4 h-4 text-green-600" />}
                  {location.trending === 'down' && <TrendingDown className="w-4 h-4 text-red-600" />}
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full shadow-md transition-all duration-500" 
                  style={{ width: `${(location.todayRevenue / location.dailyTarget) * 100}%` }}
                ></div>
              </div>
              <p className="text-xs text-amber-700 font-medium">
                {Math.round((location.todayRevenue / location.dailyTarget) * 100)}% of daily target
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-xs text-amber-700 font-medium">Bookings</p>
                  <p className="font-bold text-lg text-gray-800">{location.todayBookings}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-blue-700 font-medium">Occupancy</p>
                  <p className="font-bold text-lg text-gray-800">{location.currentOccupancy}/{location.totalTables}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <p className="text-xs text-yellow-700 font-medium">Rating</p>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="font-bold text-gray-800">{location.avgRating}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 border border-orange-200">
                <p className="text-sm text-orange-800 font-medium">Today's Top Dish</p>
                <p className="font-bold text-sm text-orange-900 font-serif">{location.topDish}</p>
              </div>

              {location.alerts.length > 0 && (
                <div className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-r-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-sm font-bold text-yellow-800">Alerts</span>
                  </div>
                  {location.alerts.map((alert, index) => (
                    <p key={index} className="text-sm text-yellow-700 mt-1 font-medium">{alert}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-xl p-6 mb-6 border border-amber-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6 font-serif">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 shadow-md hover:shadow-lg border border-blue-200">
            <Package className="w-5 h-5" />
            <span className="text-sm font-semibold">Order Inventory</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-br from-green-50 to-green-100 text-green-700 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-200 shadow-md hover:shadow-lg border border-green-200">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold">Staff Schedule</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 shadow-md hover:shadow-lg border border-purple-200">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-semibold">View Reports</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-700 rounded-xl hover:from-yellow-100 hover:to-yellow-200 transition-all duration-200 shadow-md hover:shadow-lg border border-yellow-200">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-semibold">Manage Alerts</span>
          </button>
        </div>
      </div>

      {/* Demo Info */}
      <div className="text-xs text-gray-700 bg-white p-6 rounded-xl shadow-lg border border-amber-100">
        <strong className="text-amber-800 font-serif text-sm">Dashboard Features Demonstrated:</strong>
        <ul className="mt-3 space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 text-gray-600">
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Real-time revenue across all locations</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Live table occupancy monitoring</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Power status alerts (load shedding ready)</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Inventory alerts with predicted stockouts</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Performance trends and targets</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Staff scheduling notifications</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Customer rating aggregation</li>
          <li className="flex items-center"><span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>Quick action center for management</li>
        </ul>
      </div>
    </div>
  );
};

export default MultiLocationDashboard;
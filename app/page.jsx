'use client';

import React, { useState } from 'react';
import { Zap, TrendingUp, BarChart3, Clock } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('home');
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const getCurrentTime = () => {
    return new Date().toLocaleString('en-US', { 
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  // Sample VIX data (last 30 days)
  const vixData = [
    { date: 'Jun 18', vix: 18.2 },
    { date: 'Jun 19', vix: 17.9 },
    { date: 'Jun 20', vix: 18.5 },
    { date: 'Jun 21', vix: 19.1 },
    { date: 'Jun 24', vix: 18.8 },
    { date: 'Jun 25', vix: 18.3 },
    { date: 'Jun 26', vix: 17.6 },
    { date: 'Jun 27', vix: 16.9 },
    { date: 'Jun 28', vix: 17.2 },
    { date: 'Jul 1', vix: 16.5 },
    { date: 'Jul 2', vix: 16.8 },
    { date: 'Jul 3', vix: 17.4 },
    { date: 'Jul 7', vix: 18.1 },
    { date: 'Jul 8', vix: 18.7 },
    { date: 'Jul 9', vix: 19.3 },
    { date: 'Jul 10', vix: 19.8 },
    { date: 'Jul 11', vix: 19.5 },
    { date: 'Jul 14', vix: 18.9 },
    { date: 'Jul 15', vix: 18.4 },
    { date: 'Jul 16', vix: 18.0 },
    { date: 'Jul 17', vix: 19.2 },
    { date: 'Jul 18', vix: 19.5 },
  ];

  // Sample sentiment data
  const sentimentData = [
    { date: 'Jun 18', bullish: 65, cautious: 25, bearish: 10 },
    { date: 'Jun 25', bullish: 70, cautious: 20, bearish: 10 },
    { date: 'Jul 1', bullish: 72, cautious: 18, bearish: 10 },
    { date: 'Jul 8', bullish: 68, cautious: 22, bearish: 10 },
    { date: 'Jul 15', bullish: 75, cautious: 18, bearish: 7 },
    { date: 'Jul 18', bullish: 78, cautious: 15, bearish: 7 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-blue-600">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white">Trading Command Center</h1>
              <p className="text-blue-400 text-sm mt-1">AI-Powered Market Intelligence</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 bg-slate-800 border border-slate-700 rounded-xl p-2 w-fit">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'home'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('signals')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                activeTab === 'signals'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Trading Signals
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'home' && (
            <>
              {/* Last Updated */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-300 text-sm">Dashboard Last Updated</span>
                  </div>
                  {mounted && (
                    <span className="text-white font-mono text-sm bg-slate-900 px-3 py-1 rounded-lg border border-blue-700/30">
                      {getCurrentTime()}
                    </span>
                  )}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <p className="text-slate-400 text-sm">Market Sentiment</p>
                  </div>
                  <p className="text-3xl font-bold text-white">BULLISH</p>
                  <p className="text-slate-500 text-xs mt-2">78% bullish (↑ strong)</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <p className="text-slate-400 text-sm">VIX (Volatility)</p>
                  </div>
                  <p className="text-3xl font-bold text-white">19.5</p>
                  <p className="text-slate-500 text-xs mt-2">Low volatility (↓ trending down)</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-600/50 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <p className="text-slate-400 text-sm">Market Status</p>
                  </div>
                  <p className="text-3xl font-bold text-white">OPEN</p>
                  <p className="text-slate-500 text-xs mt-2">Trading day in progress</p>
                </div>
              </div>

              {/* VIX Chart */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">VIX Volatility Trend (30 Days)</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={vixData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="date" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" domain={[15, 22]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="vix" 
                      stroke="#3b82f6" 
                      dot={false}
                      strokeWidth={2}
                      name="VIX Index"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Sentiment Chart */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Market Sentiment Distribution</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sentimentData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="date" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                      labelStyle={{ color: '#fff' }}
                    />
                    <Legend />
                    <Bar dataKey="bullish" stackId="a" fill="#10b981" name="Bullish %" />
                    <Bar dataKey="cautious" stackId="a" fill="#f59e0b" name="Cautious %" />
                    <Bar dataKey="bearish" stackId="a" fill="#ef4444" name="Bearish %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Sentiment Overview */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Market Sentiment Overview</h2>
                <div className="p-4 bg-slate-900 border border-blue-700/30 rounded-lg">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Markets are riding a powerful AI/semiconductor-driven rally with significant leverage building in systematic strategies. 
                    Margin debt at record levels suggests both strength and underlying risk. Volatility remains contained as institutional flows drive the rally.
                  </p>
                </div>
              </div>

              {/* Events Card */}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Market Events</h2>
                <div className="space-y-3">
                  <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-600/50 transition-all">
                    <p className="text-white font-medium text-sm">Leveraged ETF Growth Distorting Price Action</p>
                    <p className="text-slate-500 text-xs mt-2">Category: flow_mechanics</p>
                  </div>
                  <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-600/50 transition-all">
                    <p className="text-white font-medium text-sm">Semiconductor Supercycle Momentum Accelerates</p>
                    <p className="text-slate-500 text-xs mt-2">Category: sector_trend</p>
                  </div>
                  <div className="p-4 bg-slate-900 border border-slate-700 rounded-lg hover:border-blue-600/50 transition-all">
                    <p className="text-white font-medium text-sm">Fed Policy Expectations Shift</p>
                    <p className="text-slate-500 text-xs mt-2">Category: macro</p>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'signals' && <TradingSignalsTabContent mounted={mounted} />}
        </div>
      </div>
    </div>
  );
}

function TradingSignalsTabContent({ mounted }) {
  const [signals, setSignals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modelDate, setModelDate] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [dataFetchedAt, setDataFetchedAt] = useState(null);
  const [error, setError] = useState(null);
  const [selectedRegime, setSelectedRegime] = useState('all');
  const [sortBy, setSortBy] = useState('rank');

  React.useEffect(() => {
    fetchSignals();
  }, []);

  const fetchSignals = async () => {
    try {
      setLoading(true);
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      // Get the most recent signals
      const { data: dateData, error: dateError } = await supabase
        .from('portfolio_recommendations')
        .select('recommendation_date')
        .order('recommendation_date', { ascending: false })
        .limit(1);

      if (dateError) {
        console.error('Error fetching date:', dateError);
        setError('Failed to fetch signals from Supabase');
        setLoading(false);
        return;
      }

      if (!dateData || dateData.length === 0) {
        setError('No signals found in Supabase. Please run the signal generator first.');
        setLoading(false);
        return;
      }

      const latestDate = dateData[0].recommendation_date;

      // Fetch all signals for that date
      const { data, error: signalsError } = await supabase
        .from('portfolio_recommendations')
        .select('*')
        .eq('recommendation_date', latestDate)
        .order('rank', { ascending: true });

      if (signalsError) {
        console.error('Error fetching signals:', signalsError);
        setError('Failed to fetch signals');
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        console.log(`Loaded ${data.length} signals from Supabase`);
        setSignals(data);
        if (data[0].recommendation_date) {
          const [year, month, day] = data[0].recommendation_date.split('-');
          setModelDate(`${month}-${day}-${year.slice(2)}`);
        }
        if (data[0].created_at) {
          setLastUpdated(new Date(data[0].created_at));
        }
        setError(null);
      }
      setDataFetchedAt(new Date());
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-white text-center py-12">Loading signals from Supabase...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-700 rounded-xl p-6 text-red-300">
        <p className="font-semibold mb-2">Error loading signals</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Last Updated */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-slate-300 text-sm">Tab Last Refreshed</span>
          </div>
          {mounted && (
            <span className="text-white font-mono text-sm bg-slate-900 px-3 py-1 rounded-lg border border-blue-700/30">
              {dataFetchedAt?.toLocaleString('en-US', { 
                month: '2-digit', 
                day: '2-digit', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
              })}
            </span>
          )}
        </div>
      </div>

      {/* Signals Header */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">Top 50 Trading Signals</h2>
        </div>
        {modelDate && (
          <p className="text-slate-400 text-sm">
            Model Last Updated: <span className="text-blue-400 font-semibold">{modelDate}</span> at{' '}
            {lastUpdated && (
              <span className="text-blue-400 font-semibold">
                {lastUpdated.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
              </span>
            )}
          </p>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <select 
          value={selectedRegime}
          onChange={(e) => setSelectedRegime(e.target.value)}
          className="bg-slate-800 text-white text-sm rounded-lg px-4 py-2 border border-slate-700 hover:border-blue-600/50 transition-all cursor-pointer"
        >
          <option value="all">All Regimes</option>
          <option value="calm">Calm</option>
          <option value="chop">Chop</option>
          <option value="panic">Panic</option>
        </select>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-800 text-white text-sm rounded-lg px-4 py-2 border border-slate-700 hover:border-blue-600/50 transition-all cursor-pointer"
        >
          <option value="rank">Sort by Rank</option>
          <option value="score">Sort by Score</option>
          <option value="momentum">Sort by Momentum</option>
        </select>
      </div>

      {/* Signals Table */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700 bg-slate-900">
              <th className="px-6 py-4 text-left text-slate-300 font-semibold">Rank</th>
              <th className="px-6 py-4 text-left text-slate-300 font-semibold">Ticker</th>
              <th className="px-6 py-4 text-center text-slate-300 font-semibold">Score</th>
              <th className="px-6 py-4 text-center text-slate-300 font-semibold">Allocation</th>
              <th className="px-6 py-4 text-center text-slate-300 font-semibold">Regime</th>
            </tr>
          </thead>
          <tbody>
            {signals
              .filter(s => selectedRegime === 'all' || s.market_regime === selectedRegime)
              .sort((a, b) => {
                if (sortBy === 'rank') return a.rank - b.rank;
                if (sortBy === 'score') return (b.final_score || 0) - (a.final_score || 0);
                if (sortBy === 'momentum') return (b.momentum_score || 0) - (a.momentum_score || 0);
                return 0;
              })
              .map((row) => (
              <tr key={row.ticker} className="border-b border-slate-700 hover:bg-slate-700/50 transition-colors">
                <td className="px-6 py-4 text-slate-300">{row.rank}</td>
                <td className="px-6 py-4 font-bold text-white">{row.ticker}</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 rounded-lg bg-green-900/30 text-green-400 text-xs font-semibold border border-green-700/30">
                    {row.final_score?.toFixed(4) || 'N/A'}
                  </span>
                </td>
                <td className="px-6 py-4 text-center text-white font-semibold">${row.dollar_allocation || 0}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`px-2 py-1 rounded-lg text-xs font-semibold border ${
                    row.market_regime === 'calm' 
                      ? 'bg-green-900/30 text-green-400 border-green-700/30'
                      : row.market_regime === 'chop'
                      ? 'bg-yellow-900/30 text-yellow-400 border-yellow-700/30'
                      : 'bg-red-900/30 text-red-400 border-red-700/30'
                  }`}>
                    {row.market_regime}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-slate-400 text-sm text-center">Showing {signals.filter(s => selectedRegime === 'all' || s.market_regime === selectedRegime).length} of {signals.length} signals from Supabase.</p>
    </>
  );
}

'use client';

import React from 'react';
import { Chart } from '@vizora/react';

function generateMarketData(days: number) {
  const data = [];
  let price = 150;
  const now = new Date();
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const v = price * 0.05;
    const open = price + (Math.random() - 0.5) * v;
    const close = open + (Math.random() - 0.5) * v;
    const high = Math.max(open, close) + Math.random() * (v / 2);
    const low = Math.min(open, close) - Math.random() * (v / 2);
    const volume = Math.floor(1000 + Math.abs(close - open) * 500 + Math.random() * 2000);
    data.push({ date: date.toISOString().split('T')[0], open, high, low, close, volume });
    price = close;
  }
  return data;
}

const MARKET_DATA = generateMarketData(40);
const WATCHLIST = [
  { symbol: 'AAPL', data: generateMarketData(10).map(d => ({ date: d.date, price: d.close })) },
  { symbol: 'MSFT', data: generateMarketData(10).map(d => ({ date: d.date, price: d.close })) },
  { symbol: 'GOOGL', data: generateMarketData(10).map(d => ({ date: d.date, price: d.close })) },
  { symbol: 'AMZN', data: generateMarketData(10).map(d => ({ date: d.date, price: d.close })) },
];

export default function TradingCategoryPage() {
  const last = MARKET_DATA[MARKET_DATA.length - 1];
  const prev = MARKET_DATA[MARKET_DATA.length - 2];
  const change = ((last.close - prev.close) / prev.close) * 100;
  const isUp = change >= 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-5 border-b border-[#18241b]/10 flex justify-between items-end">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#c2872e]">
            Trading & Financial
          </span>
          <h1 className="font-headline-lg text-3xl text-[#18241b] font-bold mt-1">
            Market Data Terminal
          </h1>
          <p className="text-[#60685c] text-sm mt-1">
            OHLC candlestick charts with volume profile and a live watchlist.
          </p>
        </div>
        <div className="text-right">
          <p className="font-mono text-2xl font-bold text-[#18241b]">${last.close.toFixed(2)}</p>
          <p className={`font-sans text-xs font-bold mt-0.5 ${isUp ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
            {isUp ? '+' : ''}{change.toFixed(2)}% today
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Main charts */}
        <div className="lg:col-span-3 space-y-4">
          {/* Candlestick */}
          <div className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
            <div className="flex justify-between items-center mb-5">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c]">Price Action</p>
                <h3 className="font-sans text-base font-bold text-[#18241b] mt-0.5">VIZ / USD — Candlestick</h3>
              </div>
              <div className="flex gap-1">
                {['1D', '1W', '1M'].map((t, i) => (
                  <button key={t} className={`px-2.5 py-1 text-xs font-sans font-semibold rounded-lg border transition-colors ${i === 1 ? 'bg-[#18241b] text-white border-[#18241b]' : 'bg-[#f4f7f3] text-[#60685c] border-[#18241b]/10 hover:border-[#18241b]/25'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-80 w-full">
              <Chart type="candlestick" data={MARKET_DATA} x="date" />
            </div>
          </div>

          {/* Volume */}
          <div className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c] mb-5">Volume Profile</p>
            <div className="h-36 w-full">
              <Chart type="bar" data={MARKET_DATA} x="date" y="volume" theme="zinc" />
            </div>
          </div>
        </div>

        {/* Watchlist */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-[#18241b]/10 rounded-2xl p-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#60685c] mb-4">Watchlist</p>
            <div className="space-y-3">
              {WATCHLIST.map((item) => {
                const cur = item.data[item.data.length - 1].price;
                const prv = item.data[0].price;
                const up = cur >= prv;
                return (
                  <div key={item.symbol} className="border border-[#18241b]/8 rounded-xl p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm font-bold text-[#18241b]">{item.symbol}</span>
                      <span className={`font-mono text-xs font-bold ${up ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                        ${cur.toFixed(2)}
                      </span>
                    </div>
                    <div className="h-12 w-full">
                      <Chart type="kpi-sparkline" data={item.data} x="date" y="price" theme={up ? 'emerald' : 'sunset'} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

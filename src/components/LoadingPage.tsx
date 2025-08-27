import React from 'react';
import { Shield, TrendingUp, PiggyBank } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-slate-600 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-blue-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-slate-400 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="text-center z-10">
        {/* Logo/Brand Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Shield className="w-16 h-16 text-slate-900 animate-pulse" />
              <div className="absolute inset-0 w-16 h-16 border-4 border-blue-600 rounded-full animate-spin opacity-30"></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2 animate-fade-in">
            Marc-Olivier Tessier
          </h1>
          <p className="text-lg text-slate-700 mb-2 animate-fade-in-delay">
            Services financiers
          </p>
          <p className="text-lg text-slate-600 animate-fade-in-delay">
            Conseiller en sécurité financière
          </p>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="animate-bounce delay-0">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <PiggyBank className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="animate-bounce delay-200">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="animate-bounce delay-400">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="w-64 h-2 bg-slate-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-slate-600 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-slate-600 font-medium animate-pulse">
            Chargement de votre espace financier...
          </p>
          <div className="flex justify-center gap-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-0"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 max-w-md mx-auto">
          <p className="text-slate-500 text-sm italic animate-fade-in-delay">
            "Bâtissons ensemble des fondations solides pour votre avenir financier"
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-slate-400 rounded-full animate-float-delayed opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-300 rounded-full animate-float opacity-40"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-slate-300 rounded-full animate-float-delayed opacity-60"></div>
    </div>
  );
};

export default LoadingPage;
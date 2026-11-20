import React from 'react';
import { getStrings } from '../engine/i18n';
import type { SupportedLanguage } from '../engine/types';

export type WorkspaceView = 'summary' | 'risk_matrix' | 'cycle_74' | 'json_output';

interface TopBarProps {
  language: SupportedLanguage;
  activeView: WorkspaceView;
  onSelectView: (view: WorkspaceView) => void;
  onRunTriage: () => void;
  isSynthesizing: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  language,
  activeView,
  onSelectView,
  onRunTriage,
  isSynthesizing,
}) => {
  const loc = getStrings(language);
  const navItems: Array<{ id: WorkspaceView; label: string }> = [
    { id: 'summary', label: loc.navPreScreening },
    { id: 'risk_matrix', label: loc.navRiskMatrix },
    { id: 'cycle_74', label: loc.navCycle74 },
    { id: 'json_output', label: loc.navJsonOutput },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
      <div
        aria-hidden="true"
        className="h-0.5 w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700"
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectView('summary');
          }}
          className="font-display text-lg font-bold tracking-tight text-[#0B2D48] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          AndroShield
        </a>

        {/* Zone 2: 4 concise single-line nav links */}
        <nav
          aria-label={loc.ariaWorkspaceNav}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectView(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 ${
                  isActive
                    ? 'text-teal-800 border-teal-600 font-semibold'
                    : 'text-slate-600 border-transparent hover:text-[#0B2D48] hover:border-teal-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onRunTriage}
            disabled={isSynthesizing}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-700 rounded-lg hover:from-teal-700 hover:to-blue-800 active:scale-[0.99] disabled:opacity-60 shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          >
            {isSynthesizing ? loc.synthesizingButton : loc.runTriageButton}
          </button>
        </div>
      </div>

      {/* Mobile compact single-row sub-nav */}
      <nav
        aria-label={loc.ariaMobileNav}
        className="grid grid-cols-4 gap-1 px-3 pb-2 md:hidden"
      >
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectView(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`px-1.5 py-1.5 text-[11px] text-center font-medium rounded whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-800'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

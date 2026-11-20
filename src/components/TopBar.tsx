import React from 'react';
import {
  Activity,
  Calendar,
  ClipboardList,
  Code2,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { getStrings } from '../engine/i18n';
import { LANGUAGE_LABELS } from '../engine/triageEngine';
import type { SupportedLanguage } from '../engine/types';

export type WorkspaceView = 'summary' | 'risk_matrix' | 'cycle_74';
export type MobileTab = 'intake' | WorkspaceView;

interface TopBarProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  activeView: WorkspaceView;
  onSelectView: (view: WorkspaceView) => void;
  onRunTriage: () => void;
  onOpenExportDrawer: () => void;
  isSynthesizing: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  language,
  onLanguageChange,
  activeView,
  onSelectView,
  onRunTriage,
  onOpenExportDrawer,
  isSynthesizing,
}) => {
  const loc = getStrings(language);
  const navItems: Array<{ id: WorkspaceView; label: string }> = [
    { id: 'summary', label: loc.navPreScreening },
    { id: 'risk_matrix', label: loc.navRiskMatrix },
    { id: 'cycle_74', label: loc.navCycle74 },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3 sm:gap-6">
        {/* Identity */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectView('summary');
          }}
          className="inline-flex items-center gap-2 font-display text-base sm:text-lg font-bold tracking-tight text-[#0F2933] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4C5C]"
        >
          <span className="w-8 h-8 rounded-lg bg-[#E6F1F3] text-[#0F4C5C] inline-flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
          </span>
          <span>AndroShield</span>
        </a>

        {/* Primary clinical workspace navigation (Desktop) */}
        <nav
          aria-label={loc.ariaWorkspaceNav}
          className="hidden lg:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectView(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-medium whitespace-nowrap shrink-0 py-2 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4C5C] ${
                  isActive
                    ? 'text-[#0F4C5C] border-[#0F4C5C] font-semibold'
                    : 'text-slate-600 border-transparent hover:text-[#0F2933] hover:border-slate-300'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Discreet language switcher, export drawer button & primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <select
            id="header-language-select"
            aria-label={loc.preferredLanguageLabel}
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as SupportedLanguage)}
            className="hidden sm:block h-10 px-2.5 text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 focus:border-[#0F4C5C] focus:ring-2 focus:ring-[#0F4C5C]/15 focus:outline-none transition-colors"
          >
            {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={onOpenExportDrawer}
            aria-label={loc.devExportButton}
            title={loc.devExportButton}
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:text-[#0F2933] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4C5C]"
          >
            <Code2 className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onRunTriage}
            disabled={isSynthesizing}
            className="h-10 px-3.5 sm:px-4 text-xs sm:text-sm font-semibold text-white bg-[#0F4C5C] rounded-xl hover:bg-[#0C3E4B] active:scale-[0.99] disabled:opacity-60 transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4C5C]"
          >
            {isSynthesizing ? loc.synthesizingButton : loc.runTriageButton}
          </button>
        </div>
      </div>
    </header>
  );
};

interface MobileBottomNavProps {
  language: SupportedLanguage;
  mobileTab: MobileTab;
  onSelectMobileTab: (tab: MobileTab) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  language,
  mobileTab,
  onSelectMobileTab,
}) => {
  const loc = getStrings(language);
  const items: Array<{
    id: MobileTab;
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
  }> = [
    { id: 'intake', label: loc.navIntake, Icon: ClipboardList },
    { id: 'summary', label: loc.navPreScreening, Icon: FileText },
    { id: 'risk_matrix', label: loc.navRiskMatrix, Icon: Activity },
    { id: 'cycle_74', label: loc.navCycle74, Icon: Calendar },
  ];

  return (
    <nav
      aria-label={loc.ariaMobileNav}
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 h-16 bg-white/95 backdrop-blur-md border-t border-slate-200 grid grid-cols-4 no-print"
    >
      {items.map(({ id, label, Icon }) => {
        const isActive = mobileTab === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelectMobileTab(id)}
            aria-current={isActive ? 'page' : undefined}
            className={`relative flex flex-col items-center justify-center gap-1 min-h-[44px] px-1 text-[11px] transition-colors ${
              isActive
                ? 'text-[#0F4C5C] font-semibold'
                : 'text-slate-500 font-medium hover:text-slate-900'
            }`}
          >
            {isActive && (
              <span
                aria-hidden="true"
                className="absolute top-0 inset-x-4 h-0.5 rounded-full bg-[#0F4C5C]"
              />
            )}
            <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="truncate max-w-full">{label}</span>
          </button>
        );
      })}
    </nav>
  );
};

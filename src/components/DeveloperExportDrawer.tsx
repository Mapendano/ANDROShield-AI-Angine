import React, { useEffect, useState } from 'react';
import { Check, Code2, Copy, Download, ShieldCheck, X } from 'lucide-react';
import { getStrings } from '../engine/i18n';
import type { AndroShieldTriageOutput } from '../engine/types';

interface DeveloperExportDrawerProps {
  open: boolean;
  onClose: () => void;
  output: AndroShieldTriageOutput;
}

export const DeveloperExportDrawer: React.FC<DeveloperExportDrawerProps> = ({
  open,
  onClose,
  output,
}) => {
  const [copiedJson, setCopiedJson] = useState(false);
  const lang = output.multilingual_clinical_summary.preferred_language;
  const loc = getStrings(lang);
  const isRtl = lang === 'ar';
  const jsonString = JSON.stringify(output, null, 2);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  async function handleCopyJson() {
    await navigator.clipboard.writeText(jsonString);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  }

  function handleDownloadJson() {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `androshield-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dev-export-title"
      data-testid="developer-export-drawer"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label={loc.devExportClose}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/35 backdrop-blur-[1px] transition-opacity"
      />

      {/* Drawer Panel */}
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative z-10 w-full max-w-2xl h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col"
      >
        <div className="px-5 py-4 border-b border-slate-200 flex items-start justify-between gap-4 bg-[#F5F7F8]">
          <div className="flex items-start gap-2.5">
            <div className="p-2 rounded-lg bg-[#E6F1F3] text-[#0F4C5C] shrink-0">
              <Code2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="dev-export-title"
                className="font-display text-base font-semibold text-[#0F2933]"
              >
                {loc.devExportTitle}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                {loc.devExportSubtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={loc.devExportClose}
            className="p-2 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="px-5 py-3 border-b border-slate-200 bg-white flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-[#0F4C5C] shrink-0" aria-hidden="true" />
            <span>{loc.privacyReassurance}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyJson}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-xs font-medium text-[#0F4C5C] bg-[#F0F6F7] border border-[#0F4C5C]/20 rounded-lg hover:bg-[#E6F1F3] transition-colors whitespace-nowrap"
            >
              {copiedJson ? (
                <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
              ) : (
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              <span>{copiedJson ? loc.copiedJson : loc.copyJson}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadJson}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[40px] text-xs font-medium text-white bg-[#0F4C5C] rounded-lg hover:bg-[#0C3E4B] transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{loc.downloadJson}</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-5 bg-slate-50 space-y-4">
          <div className="text-xs text-slate-600 bg-white border border-slate-200 rounded-xl p-3.5 leading-relaxed">
            {loc.deterministicResilienceNotice}
          </div>
          <pre
            dir="ltr"
            data-testid="json-output-panel"
            className="p-4 text-xs font-mono text-slate-800 bg-white border border-slate-200 rounded-xl overflow-x-auto leading-relaxed"
          >
            {jsonString}
          </pre>
        </div>
      </div>
    </div>
  );
};

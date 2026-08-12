(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/react/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/AutoChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/Chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/intelligence/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/recommender.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CompassDial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/CompassDial.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LegendBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LegendBand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CartoButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/CartoButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Preset Geodetic Datasets
const PRESETS = {
    sales: {
        name: 'Regional Sales Survey',
        type: 'bar',
        x: 'region',
        y: 'sales',
        profile: 'categorical [region] + quantitative [sales]',
        data: [
            {
                region: 'North America',
                sales: 1250
            },
            {
                region: 'Europe',
                sales: 980
            },
            {
                region: 'Asia Pacific',
                sales: 1420
            },
            {
                region: 'Latin America',
                sales: 610
            },
            {
                region: 'Middle East',
                sales: 430
            }
        ]
    },
    trend: {
        name: 'MRR Growth Traverse',
        type: 'line',
        x: 'date',
        y: 'mrr',
        profile: 'temporal [date] + quantitative [mrr]',
        data: [
            {
                date: '2026-01-01',
                mrr: 12400
            },
            {
                date: '2026-02-01',
                mrr: 15800
            },
            {
                date: '2026-03-01',
                mrr: 19200
            },
            {
                date: '2026-04-01',
                mrr: 24500
            },
            {
                date: '2026-05-01',
                mrr: 31000
            },
            {
                date: '2026-06-01',
                mrr: 38200
            }
        ]
    },
    scatter: {
        name: 'Geodetic Coordinate Scatter',
        type: 'scatter',
        x: 'height',
        y: 'weight',
        profile: 'quantitative [height] + quantitative [weight]',
        data: [
            {
                height: 160,
                weight: 55
            },
            {
                height: 165,
                weight: 62
            },
            {
                height: 172,
                weight: 68
            },
            {
                height: 178,
                weight: 74
            },
            {
                height: 185,
                weight: 82
            },
            {
                height: 190,
                weight: 91
            }
        ]
    },
    histogram: {
        name: 'Customer Elevation Profile',
        type: 'histogram',
        x: 'age',
        y: 'count',
        profile: 'quantitative distribution [age]',
        data: [
            {
                age: 19
            },
            {
                age: 22
            },
            {
                age: 24
            },
            {
                age: 25
            },
            {
                age: 28
            },
            {
                age: 29
            },
            {
                age: 31
            },
            {
                age: 34
            },
            {
                age: 35
            },
            {
                age: 38
            },
            {
                age: 41
            },
            {
                age: 44
            },
            {
                age: 47
            },
            {
                age: 52
            },
            {
                age: 58
            }
        ]
    },
    kpi: {
        name: 'ARR Geodetic Baseline',
        type: 'kpi-sparkline',
        x: 'month',
        y: 'arr',
        profile: 'single target + sparkline trend',
        data: [
            {
                month: 'Jan',
                arr: 450000
            },
            {
                month: 'Feb',
                arr: 520000
            },
            {
                month: 'Mar',
                arr: 610000
            },
            {
                month: 'Apr',
                arr: 740000
            },
            {
                month: 'May',
                arr: 890000
            },
            {
                month: 'Jun',
                arr: 1200000
            }
        ]
    }
};
function Home() {
    _s();
    const [activePresetKey, setActivePresetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('sales');
    const [selectedChartType, setSelectedChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('bar');
    const [orientation, setOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('vertical');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [customJson, setCustomJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentPreset = PRESETS[activePresetKey];
    // Live parsed data array
    const currentData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[currentData]": ()=>{
            if (!customJson.trim()) return currentPreset.data;
            try {
                const parsed = JSON.parse(customJson);
                if (Array.isArray(parsed) && parsed.length > 0) return parsed;
            } catch  {
            // Invalid JSON fallback
            }
            return currentPreset.data;
        }
    }["Home.useMemo[currentData]"], [
        customJson,
        currentPreset.data
    ]);
    // Recommended spec from intelligence package
    const autoSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[autoSpec]": ()=>{
            const rec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recommendChartSpec"])(currentData);
            rec.title = `${currentPreset.name} (AutoChart)`;
            return rec;
        }
    }["Home.useMemo[autoSpec]"], [
        currentData,
        currentPreset.name
    ]);
    // Active computed spec
    const computedSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[computedSpec]": ()=>{
            if (mode === 'auto') return autoSpec;
            return {
                version: '0.1.0',
                type: selectedChartType,
                title: `${currentPreset.name} (Explicit)`,
                data: currentData,
                encoding: {
                    x: currentPreset.x ? {
                        field: currentPreset.x
                    } : undefined,
                    y: currentPreset.y ? {
                        field: currentPreset.y
                    } : undefined,
                    orientation: selectedChartType === 'bar' ? orientation : undefined
                },
                config: {
                    width: 600,
                    height: 380
                }
            };
        }
    }["Home.useMemo[computedSpec]"], [
        mode,
        autoSpec,
        selectedChartType,
        currentPreset,
        currentData,
        orientation
    ]);
    // Handle Preset Select
    const handleSelectPreset = (key)=>{
        setActivePresetKey(key);
        setSelectedChartType(PRESETS[key].type);
        setCustomJson('');
    };
    const handleCopySpec = ()=>{
        navigator.clipboard.writeText(JSON.stringify(computedSpec, null, 2));
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    // Find max value item for Flag Pin Anomaly callout
    const maxItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[maxItem]": ()=>{
            if (!currentData || currentData.length === 0) return null;
            const yKey = currentPreset.y || currentPreset.x;
            let maxVal = -Infinity;
            let item = null;
            currentData.forEach({
                "Home.useMemo[maxItem]": (d)=>{
                    const val = Number(d[yKey] ?? 0);
                    if (!isNaN(val) && val > maxVal) {
                        maxVal = val;
                        item = d;
                    }
                }
            }["Home.useMemo[maxItem]"]);
            return {
                key: yKey,
                val: maxVal,
                item
            };
        }
    }["Home.useMemo[maxItem]"], [
        currentData,
        currentPreset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#ecefea] text-[#1e2a22] p-4 md:p-8 carto-grid-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-7xl mx-auto mb-8 carto-panel p-6 bg-[#f7faf5]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1e2a22] pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-data-spec text-[#6e756a] text-xs mb-1",
                                    children: "SURVEY NO. 1894 // INSTRUMENTAL MINIMALISM // CHART RUNTIME"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display-hero text-3xl md:text-4xl text-[#1e2a22] tracking-tight",
                                    children: "Vizora : Cartography of Data"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] text-sm mt-1 max-w-2xl",
                                    children: [
                                        "Framework-agnostic chart runtime + deterministic data profiling + automatic chart recommendation. Rendering pure SVG scene graphs derived from validated ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "font-data-spec bg-[#dee5d7] px-1 border border-[#1e2a22]",
                                            children: "ChartSpec"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 70
                                        }, this),
                                        " contracts."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-1.5 font-data-spec text-xs text-[#6e756a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-2.5 py-1 bg-[#dee5d7] border border-[#1e2a22] text-[#1e2a22] font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 bg-[#c2872e]"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        "lat : 45.0n / lon : 93.2w"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "datum : geodetic-1894 / engine : svg-ssr"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label-caps text-[#1e2a22]",
                                                children: "Execution Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-data-spec text-[#6e756a] text-xs",
                                                children: [
                                                    "mode : ",
                                                    mode
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode('auto'),
                                                className: `py-2 px-3 border text-xs font-mono transition-all text-center ${mode === 'auto' ? 'bg-[#c2872e] text-[#1e2a22] border-[#1e2a22] font-bold' : 'bg-[#f7faf5] text-[#6e756a] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                                children: "AutoChart (Heuristic)"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode('explicit'),
                                                className: `py-2 px-3 border text-xs font-mono transition-all text-center ${mode === 'explicit' ? 'bg-[#c2872e] text-[#1e2a22] border-[#1e2a22] font-bold' : 'bg-[#f7faf5] text-[#6e756a] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                                children: "Explicit <Chart />"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CompassDial$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompassDial"], {
                                recommendedType: autoSpec.type,
                                selectedType: mode === 'auto' ? autoSpec.type : selectedChartType,
                                onSelectType: (type)=>{
                                    setSelectedChartType(type);
                                    setMode('explicit');
                                },
                                confidence: 0.96,
                                dataSummary: currentPreset.profile
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label-caps text-[#1e2a22]",
                                                children: "Sample Geodetic Datasets"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-data-spec text-[#6e756a] text-xs",
                                                children: [
                                                    "n = ",
                                                    Object.keys(PRESETS).length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 304,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-1.5",
                                        children: Object.keys(PRESETS).map((key_0)=>{
                                            const preset = PRESETS[key_0];
                                            const isActive = activePresetKey === key_0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSelectPreset(key_0),
                                                className: `px-3 py-2 border text-left text-xs font-mono flex items-center justify-between transition-all ${isActive ? 'bg-[#1e2a22] text-[#f7faf5] border-[#1e2a22]' : 'bg-[#f7faf5] text-[#1e2a22] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: preset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] opacity-75",
                                                        children: [
                                                            "[",
                                                            preset.type,
                                                            "]"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 313,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, key_0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 311,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            mode === 'explicit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3 bg-[#dee5d7]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-label-caps text-[#1e2a22] border-b border-[#1e2a22] pb-2",
                                        children: "Explicit Encoding Controls"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "Chart Type:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedChartType,
                                                onChange: (e)=>setSelectedChartType(e.target.value),
                                                className: "bg-[#f7faf5] border border-[#1e2a22] px-2 py-1 text-[#1e2a22] outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "bar",
                                                        children: "Bar Survey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "line",
                                                        children: "Temporal Line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "scatter",
                                                        children: "Scatter Plot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "histogram",
                                                        children: "Histogram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "kpi-sparkline",
                                                        children: "KPI Sparkline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    selectedChartType === 'bar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs font-mono pt-2 border-t border-[#1e2a22]/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "Bar Orientation:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CartoButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartoButton"], {
                                                variant: "secondary",
                                                onClick: ()=>setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical'),
                                                children: orientation === 'vertical' ? 'Vertical [↕]' : 'Horizontal [↔]'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 320,
                                columnNumber: 35
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label-caps text-[#1e2a22]",
                                                children: "Raw JSON Data Input"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 15
                                            }, this),
                                            customJson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCustomJson(''),
                                                className: "font-data-spec text-[#d6502b] hover:underline",
                                                children: "reset"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 348,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 4,
                                        value: customJson,
                                        onChange: (e_0)=>setCustomJson(e_0.target.value),
                                        placeholder: `Paste tabular JSON array:\n[{"region": "US", "sales": 100}, {"region": "EU", "sales": 80}]`,
                                        className: "w-full bg-[#f7faf5] border border-[#6e756a] p-2.5 font-data-spec text-xs text-[#1e2a22] outline-none focus:border-[#c2872e]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 345,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel bg-[#f7faf5]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b border-[#1e2a22] flex items-center justify-between bg-[#ecefea]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-data-spec text-xs text-[#6e756a]",
                                                        children: mode === 'auto' ? `autochart : inferred [${computedSpec.type}]` : `explicit : bound [x=${currentPreset.x}, y=${currentPreset.y || ''}]`
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-headline-md text-lg text-[#1e2a22]",
                                                        children: currentPreset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 bg-[#c2872e] text-[#1e2a22] border border-[#1e2a22] font-label-caps text-[10px]",
                                                children: "Determinism Verified"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 bg-[#f7faf5] flex justify-center items-center min-h-[400px]",
                                        children: mode === 'auto' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoChart"], {
                                            data: currentData,
                                            title: `${currentPreset.name}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 34
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chart"], {
                                            data: currentData,
                                            type: selectedChartType,
                                            x: currentPreset.x,
                                            y: currentPreset.y,
                                            orientation: orientation,
                                            title: `${currentPreset.name}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 101
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LegendBand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendBand"], {
                                        spec: computedSpec,
                                        dataCount: currentData.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 384,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            maxItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 bg-[#dee5d7] flex items-center justify-between border-l-4 border-l-[#d6502b]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-[#d6502b]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-label-caps text-[#d6502b]",
                                                        children: "Flag Pin Anomaly Detected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-data-spec text-xs text-[#1e2a22]",
                                                        children: [
                                                            "max datum point : ",
                                                            String(maxItem.item?.[currentPreset.x] || maxItem.item?.[currentPreset.y || '']),
                                                            " = ",
                                                            maxItem.val
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-data-spec text-xs text-[#6e756a]",
                                        children: "status : flag-pin-active"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 388,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-label-caps text-[#1e2a22]",
                                                        children: "ChartSpec JSON Contract"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-data-spec text-[#6e756a] text-xs block",
                                                        children: "zod runtime validated IR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CartoButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartoButton"], {
                                                variant: "secondary",
                                                onClick: handleCopySpec,
                                                children: copied ? '✓ Copied' : 'Copy Spec JSON'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 403,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "bg-[#1e2a22] text-[#ecefea] p-4 font-data-spec text-xs overflow-x-auto max-h-[320px] border border-[#1e2a22]",
                                        children: JSON.stringify(computedSpec, null, 2)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-2 bg-[#f7faf5]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-label-caps text-[#1e2a22]",
                                        children: "React Integration (< 4 Lines)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 421,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "bg-[#ecefea] p-3 border border-[#1e2a22] font-data-spec text-xs text-[#1e2a22]",
                                        children: mode === 'auto' ? `import { AutoChart } from '@vizora/react';\n\n<AutoChart data={data} />` : `import { Chart } from '@vizora/react';\n\n<Chart data={data} type="${selectedChartType}" x="${currentPreset.x}" y="${currentPreset.y || ''}" />`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 420,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 244,
        columnNumber: 10
    }, this);
}
_s(Home, "Z8KsQde7aPhIDZLHX4NQf40tiAo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/CartoButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartoButton",
    ()=>CartoButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const CartoButton = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "53adba53c4b835b87263663f47ab836f73e020e664367c533b72144fcbee6a5a") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "53adba53c4b835b87263663f47ab836f73e020e664367c533b72144fcbee6a5a";
    }
    let children;
    let props;
    let t1;
    let t2;
    if ($[1] !== t0) {
        ({ variant: t1, children, className: t2, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const className = t2 === undefined ? "" : t2;
    const baseClass = variant === "primary" ? "carto-btn-primary" : "carto-btn-secondary";
    const t3 = `${baseClass} ${className}`;
    let t4;
    if ($[6] !== children || $[7] !== props || $[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t3,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CartoButton.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = children;
        $[7] = props;
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    return t4;
};
_c = CartoButton;
var _c;
__turbopack_context__.k.register(_c, "CartoButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/CompassDial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompassDial",
    ()=>CompassDial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const CHART_WAYPOINTS = [
    {
        type: 'bar',
        label: 'BAR',
        angle: 0
    },
    {
        type: 'line',
        label: 'LINE',
        angle: 90
    },
    {
        type: 'scatter',
        label: 'DIST',
        angle: 270
    },
    {
        type: 'histogram',
        label: 'AREA',
        angle: 180
    },
    {
        type: 'kpi-sparkline',
        label: 'KPI',
        angle: 45
    }
];
const CompassDial = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "e689c7d5008ec2584d6e0637595563d76077b61d9457c1134d45f373a4ec363d") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e689c7d5008ec2584d6e0637595563d76077b61d9457c1134d45f373a4ec363d";
    }
    const { recommendedType, selectedType, onSelectType, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    let t2;
    if ($[1] !== selectedType) {
        t2 = CHART_WAYPOINTS.find((w)=>w.type === selectedType) || CHART_WAYPOINTS[0];
        $[1] = selectedType;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const activeWaypoint = t2;
    const bearingAngle = activeWaypoint.angle;
    const t3 = `relative w-full aspect-square max-w-[340px] mx-auto bg-[#ecefea]/60 border border-[#1e2a22]/30 carto-grid-bg p-6 flex items-center justify-center ${className}`;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-2 left-2 font-mono text-xs text-[#1e2a22]/40 select-none",
            children: "┌"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute top-2 right-2 font-mono text-xs text-[#1e2a22]/40 select-none",
            children: "┐"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute bottom-2 left-2 font-mono text-xs text-[#1e2a22]/40 select-none",
            children: "└"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute bottom-2 right-2 font-mono text-xs text-[#1e2a22]/40 select-none",
            children: "┘"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t4;
        $[4] = t5;
        $[5] = t6;
        $[6] = t7;
    } else {
        t4 = $[3];
        t5 = $[4];
        t6 = $[5];
        t7 = $[6];
    }
    let t10;
    let t11;
    let t8;
    let t9;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "120",
            r: "105",
            fill: "#f7faf5",
            stroke: "#1e2a22",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "120",
            r: "96",
            fill: "none",
            stroke: "#6e756a",
            strokeWidth: "0.75",
            strokeDasharray: "2 3"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "120",
            r: "50",
            fill: "none",
            stroke: "rgba(110, 117, 106, 0.15)",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = Array.from({
            length: 36
        }).map(_temp);
        $[7] = t10;
        $[8] = t11;
        $[9] = t8;
        $[10] = t9;
    } else {
        t10 = $[7];
        t11 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t12;
    if ($[11] !== onSelectType || $[12] !== recommendedType || $[13] !== selectedType) {
        t12 = CHART_WAYPOINTS.map((wp)=>{
            const rad_0 = (wp.angle - 90) * (Math.PI / 180);
            const tx = 120 + 72 * Math.cos(rad_0);
            const ty = 120 + 72 * Math.sin(rad_0);
            const isSelected = selectedType === wp.type;
            const isRecommended = recommendedType === wp.type;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                className: "cursor-pointer group",
                onClick: ()=>onSelectType(wp.type),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                        x: tx,
                        y: ty + 4,
                        textAnchor: "middle",
                        fill: isSelected ? "#c2872e" : "#1e2a22",
                        fontSize: "11",
                        fontFamily: "IBM Plex Mono, monospace",
                        fontWeight: isSelected ? "bold" : "500",
                        className: "transition-colors group-hover:fill-[#c2872e]",
                        children: wp.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                        lineNumber: 113,
                        columnNumber: 102
                    }, ("TURBOPACK compile-time value", void 0)),
                    isRecommended && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: tx,
                        cy: ty - 10,
                        r: "2",
                        fill: "#d6502b"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                        lineNumber: 113,
                        columnNumber: 388
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, wp.type, true, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 113,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        });
        $[11] = onSelectType;
        $[12] = recommendedType;
        $[13] = selectedType;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const t13 = `rotate(${bearingAngle}deg)`;
    let t14;
    if ($[15] !== t13) {
        t14 = {
            transform: t13,
            transformOrigin: "120px 120px",
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
        };
        $[15] = t13;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "120",
            y1: "120",
            x2: "120",
            y2: "34",
            stroke: "#c2872e",
            strokeWidth: "2.5",
            strokeLinecap: "square"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "120,26 125,38 115,38",
            fill: "#c2872e",
            stroke: "#1e2a22",
            strokeWidth: "0.5"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
            x1: "120",
            y1: "120",
            x2: "120",
            y2: "175",
            stroke: "#1e2a22",
            strokeWidth: "1"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 144,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "175",
            r: "3",
            fill: "#1e2a22"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "120",
            r: "7",
            fill: "#1e2a22"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: "120",
            cy: "120",
            r: "3",
            fill: "#c2872e"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t15;
        $[18] = t16;
        $[19] = t17;
        $[20] = t18;
        $[21] = t19;
        $[22] = t20;
    } else {
        t15 = $[17];
        t16 = $[18];
        t17 = $[19];
        t18 = $[20];
        t19 = $[21];
        t20 = $[22];
    }
    let t21;
    if ($[23] !== t14) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            style: t14,
            children: [
                t15,
                t16,
                t17,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t14;
        $[24] = t21;
    } else {
        t21 = $[24];
    }
    let t22;
    if ($[25] !== t12 || $[26] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full max-w-[280px] max-h-[280px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 240 240",
                className: "w-full h-full",
                children: [
                    t8,
                    t9,
                    t10,
                    t11,
                    t12,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 172,
                columnNumber: 79
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t12;
        $[26] = t21;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] !== t22 || $[29] !== t3) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: [
                t4,
                t5,
                t6,
                t7,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t22;
        $[29] = t3;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    return t23;
};
_c = CompassDial;
function _temp(_, i) {
    const deg = i * 10;
    const rad = (deg - 90) * (Math.PI / 180);
    const isMajor = deg % 90 === 0;
    const len = isMajor ? 8 : 4;
    const x1 = 120 + (96 - len) * Math.cos(rad);
    const y1 = 120 + (96 - len) * Math.sin(rad);
    const x2 = 120 + 96 * Math.cos(rad);
    const y2 = 120 + 96 * Math.sin(rad);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2,
        stroke: "#1e2a22",
        strokeWidth: isMajor ? 1.25 : 0.6
    }, deg, false, {
        fileName: "[project]/apps/web/src/components/CompassDial.tsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CompassDial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/components/LegendBand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LegendBand",
    ()=>LegendBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
'use client';
;
;
const LegendBand = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "f069f2aac4de28f6b75f47a08d0f6bfde9d5d01c4e0f738c1fdf5a36683b6f47") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f069f2aac4de28f6b75f47a08d0f6bfde9d5d01c4e0f738c1fdf5a36683b6f47";
    }
    const { spec } = t0;
    const xField = spec.encoding.x?.field || "time_series";
    const yField = spec.encoding.y?.field || "amplitude";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "font-semibold text-[#6e756a]",
            children: "X_AXIS |"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== xField) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t1,
                " ",
                xField
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = xField;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#6e756a]",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "font-semibold text-[#6e756a]",
            children: "Y_AXIS |"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] !== yField) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t4,
                " ",
                yField
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = yField;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#6e756a]",
            children: "/"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            className: "font-semibold text-[#6e756a]",
            children: "TYPE |"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t6;
        $[9] = t7;
    } else {
        t6 = $[8];
        t7 = $[9];
    }
    let t8;
    if ($[10] !== spec.type) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t7,
                " ",
                spec.type,
                "_plot"
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = spec.type;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t2 || $[13] !== t5 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4",
            children: [
                t2,
                t3,
                t5,
                t6,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t5;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-[#d6502b] font-mono text-xs",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block w-2.5 h-2.5 bg-[#d6502b]"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                    lineNumber: 88,
                    columnNumber: 85
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Outlier_Threshold | > 0.8"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                    lineNumber: 88,
                    columnNumber: 143
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-10 px-5 bg-[#dee5d7] border-t border-[#1e2a22] font-data-spec text-xs text-[#1e2a22] flex items-center justify-between overflow-x-auto whitespace-nowrap",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/components/LegendBand.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t9;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
};
_c = LegendBand;
var _c;
__turbopack_context__.k.register(_c, "LegendBand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/format/date.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate
]);
function formatDate(value) {
    const date = value instanceof Date ? value : new Date(value);
    if (isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/format/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/format/number.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/format/date.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/format/number.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatNumber",
    ()=>formatNumber
]);
function formatNumber(value, options) {
    const decimals = options?.decimals ?? 2;
    if (options?.type === 'currency') {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: options.currency || 'USD',
            maximumFractionDigits: decimals
        }).format(value);
    }
    if (options?.type === 'percent') {
        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            maximumFractionDigits: decimals
        }).format(value);
    }
    if (Math.abs(value) >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + 'M';
    }
    if (Math.abs(value) >= 1_000) {
        return (value / 1_000).toFixed(1) + 'k';
    }
    return value.toLocaleString('en-US', {
        maximumFractionDigits: decimals
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/scales/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/format/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$transforms$2f$bin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/transforms/bin.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$layout$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/layout/scene.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/layout/scene.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSceneGraph",
    ()=>buildSceneGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/validate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/linear.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/band.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/time.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$transforms$2f$bin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/transforms/bin.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/format/number.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/format/date.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
// Cartography of Data Palette Tokens
const COLOR_CONTOUR = '#1e2a22';
const COLOR_DATUM = '#6e756a';
const COLOR_WAYPOINT = '#c2872e';
const COLOR_FLARE = '#d6502b';
const COLOR_DEPTH = '#b9c4b4';
const COLOR_GRID_LINE = 'rgba(110, 117, 106, 0.2)';
const FONT_MONO = 'IBM Plex Mono, monospace';
const FONT_SERIF = 'Fraunces, serif';
function buildSceneGraph(inputSpec) {
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$validate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateChartSpec"])(inputSpec);
    const width = spec.config?.width ?? 600;
    const height = spec.config?.height ?? 380;
    const margin = spec.config?.margin ?? {
        top: 40,
        right: 30,
        bottom: 50,
        left: 60
    };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const scene = {
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
        children: []
    };
    // Title rendering
    if (spec.title) {
        scene.children.push({
            id: 'title',
            type: 'text',
            attributes: {
                x: width / 2,
                y: 24,
                'text-anchor': 'middle',
                fill: COLOR_CONTOUR,
                'font-size': 15,
                'font-weight': '600',
                'font-family': FONT_SERIF
            },
            children: [
                {
                    id: 'title-text',
                    type: 'text',
                    attributes: {
                        text: spec.title
                    }
                }
            ]
        });
    }
    const xField = spec.encoding.x?.field || Object.keys(spec.data[0] || {})[0] || 'x';
    const yField = spec.encoding.y?.field || Object.keys(spec.data[0] || {})[1] || 'y';
    // KPI + Sparkline special rendering
    if (spec.type === 'kpi-sparkline') {
        const values = spec.data.map((d)=>Number(d[yField] ?? d[xField] ?? 0)).filter((v)=>!isNaN(v));
        const currentValue = values.length > 0 ? values[values.length - 1] : 0;
        const formattedVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(currentValue);
        const kpiGroup = {
            id: 'kpi-group',
            type: 'group',
            attributes: {
                transform: `translate(${margin.left}, ${margin.top})`
            },
            children: [
                {
                    id: 'kpi-value',
                    type: 'text',
                    attributes: {
                        x: 0,
                        y: 45,
                        fill: COLOR_CONTOUR,
                        'font-size': 42,
                        'font-weight': '600',
                        'font-family': FONT_SERIF
                    },
                    children: [
                        {
                            id: 'kpi-val-text',
                            type: 'text',
                            attributes: {
                                text: formattedVal
                            }
                        }
                    ]
                }
            ]
        };
        if (values.length > 1) {
            const minV = Math.min(...values);
            const maxV = Math.max(...values);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
                0,
                values.length - 1
            ], [
                0,
                innerWidth
            ]);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
                minV,
                maxV || 1
            ], [
                innerHeight - 20,
                80
            ]);
            const points = values.map((v, i)=>`${xScale(i).toFixed(1)},${yScale(v).toFixed(1)}`).join(' L ');
            const sparklinePath = {
                id: 'kpi-sparkline-path',
                type: 'path',
                attributes: {
                    d: `M ${points}`,
                    fill: 'none',
                    stroke: COLOR_WAYPOINT,
                    'stroke-width': 2,
                    'stroke-linecap': 'square',
                    'stroke-linejoin': 'miter'
                }
            };
            kpiGroup.children?.push(sparklinePath);
            // Last value waypoint dot (square)
            const lastX = xScale(values.length - 1);
            const lastY = yScale(values[values.length - 1]);
            kpiGroup.children?.push({
                id: 'kpi-waypoint-dot',
                type: 'rect',
                attributes: {
                    x: lastX - 4,
                    y: lastY - 4,
                    width: 8,
                    height: 8,
                    fill: COLOR_WAYPOINT,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
        }
        scene.children.push(kpiGroup);
        return scene;
    }
    // Create main chart content group
    const chartGroup = {
        id: 'chart-main-group',
        type: 'group',
        attributes: {
            transform: `translate(${margin.left}, ${margin.top})`
        },
        children: []
    };
    const gridGroup = {
        id: 'grid-group',
        type: 'group',
        attributes: {},
        children: []
    };
    const axesGroup = {
        id: 'axes-group',
        type: 'group',
        attributes: {},
        children: []
    };
    const isHorizontalBar = spec.type === 'bar' && spec.encoding.orientation === 'horizontal';
    if (spec.type === 'bar') {
        if (isHorizontalBar) {
            const categories = spec.data.map((d)=>String(d[yField] ?? ''));
            const values = spec.data.map((d)=>Number(d[xField] ?? 0));
            const maxVal = Math.max(...values, 0) || 1;
            const maxValIdx = values.indexOf(maxVal);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
                0,
                innerHeight
            ], 0.25);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
                0,
                maxVal
            ], [
                0,
                innerWidth
            ]);
            // Grid lines & Scale Bar Ticks (X axis)
            xScale.ticks(5).forEach((t, idx)=>{
                const x = xScale(t);
                gridGroup.children?.push({
                    id: `grid-x-${idx}`,
                    type: 'line',
                    attributes: {
                        x1: x,
                        y1: 0,
                        x2: x,
                        y2: innerHeight,
                        stroke: COLOR_GRID_LINE,
                        'stroke-dasharray': '2,2'
                    }
                });
                // 4px Scale Bar Tick
                axesGroup.children?.push({
                    id: `scale-tick-x-${idx}`,
                    type: 'line',
                    attributes: {
                        x1: x,
                        y1: innerHeight,
                        x2: x,
                        y2: innerHeight + 4,
                        stroke: COLOR_CONTOUR,
                        'stroke-width': 1
                    }
                });
                axesGroup.children?.push({
                    id: `tick-x-${idx}`,
                    type: 'text',
                    attributes: {
                        x,
                        y: innerHeight + 18,
                        fill: COLOR_DATUM,
                        'font-size': 10,
                        'text-anchor': 'middle',
                        'font-family': FONT_MONO
                    },
                    children: [
                        {
                            id: `tick-x-txt-${idx}`,
                            type: 'text',
                            attributes: {
                                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(t)
                            }
                        }
                    ]
                });
            });
            // Render horizontal bars
            spec.data.forEach((d, i)=>{
                const cat = String(d[yField] ?? '');
                const val = Number(d[xField] ?? 0);
                const y = yScale(cat);
                const bw = yScale.bandwidth();
                const w = xScale(val);
                chartGroup.children?.push({
                    id: `bar-${i}`,
                    type: 'rect',
                    attributes: {
                        x: 0,
                        y,
                        width: w,
                        height: bw,
                        fill: i === maxValIdx ? COLOR_WAYPOINT : COLOR_CONTOUR,
                        rx: 0
                    }
                });
                // 4px Scale Bar Tick (Y axis)
                axesGroup.children?.push({
                    id: `scale-tick-y-${i}`,
                    type: 'line',
                    attributes: {
                        x1: -4,
                        y1: y + bw / 2,
                        x2: 0,
                        y2: y + bw / 2,
                        stroke: COLOR_CONTOUR,
                        'stroke-width': 1
                    }
                });
                axesGroup.children?.push({
                    id: `tick-y-${i}`,
                    type: 'text',
                    attributes: {
                        x: -8,
                        y: y + bw / 2 + 3,
                        fill: COLOR_DATUM,
                        'font-size': 10,
                        'text-anchor': 'end',
                        'font-family': FONT_MONO
                    },
                    children: [
                        {
                            id: `tick-y-txt-${i}`,
                            type: 'text',
                            attributes: {
                                text: cat
                            }
                        }
                    ]
                });
            });
            // Flag Pin Anomaly on Max Bar
            if (maxValIdx >= 0) {
                const maxCat = String(spec.data[maxValIdx][yField] ?? '');
                const maxBarY = yScale(maxCat) + yScale.bandwidth() / 2;
                const maxBarX = xScale(maxVal);
                chartGroup.children?.push({
                    id: 'flag-pin-stem',
                    type: 'line',
                    attributes: {
                        x1: maxBarX,
                        y1: maxBarY,
                        x2: maxBarX + 12,
                        y2: maxBarY,
                        stroke: COLOR_FLARE,
                        'stroke-width': 1
                    }
                }, {
                    id: 'flag-pin-top',
                    type: 'rect',
                    attributes: {
                        x: maxBarX + 12,
                        y: maxBarY - 2,
                        width: 4,
                        height: 4,
                        fill: COLOR_FLARE
                    }
                });
            }
        } else {
            const categories = spec.data.map((d)=>String(d[xField] ?? ''));
            const values = spec.data.map((d)=>Number(d[yField] ?? 0));
            const maxVal = Math.max(...values, 0) || 1;
            const maxValIdx = values.indexOf(maxVal);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
                0,
                innerWidth
            ], 0.25);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
                0,
                maxVal
            ], [
                innerHeight,
                0
            ]);
            // Y Grid & Ticks
            yScale.ticks(5).forEach((t, idx)=>{
                const y = yScale(t);
                gridGroup.children?.push({
                    id: `grid-y-${idx}`,
                    type: 'line',
                    attributes: {
                        x1: 0,
                        y1: y,
                        x2: innerWidth,
                        y2: y,
                        stroke: COLOR_GRID_LINE,
                        'stroke-dasharray': '2,2'
                    }
                });
                // 4px Scale Bar Tick (Y axis)
                axesGroup.children?.push({
                    id: `scale-tick-y-${idx}`,
                    type: 'line',
                    attributes: {
                        x1: -4,
                        y1: y,
                        x2: 0,
                        y2: y,
                        stroke: COLOR_CONTOUR,
                        'stroke-width': 1
                    }
                });
                axesGroup.children?.push({
                    id: `tick-y-${idx}`,
                    type: 'text',
                    attributes: {
                        x: -8,
                        y: y + 3,
                        fill: COLOR_DATUM,
                        'font-size': 10,
                        'text-anchor': 'end',
                        'font-family': FONT_MONO
                    },
                    children: [
                        {
                            id: `tick-y-txt-${idx}`,
                            type: 'text',
                            attributes: {
                                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(t)
                            }
                        }
                    ]
                });
            });
            // Render vertical bars
            spec.data.forEach((d, i)=>{
                const cat = String(d[xField] ?? '');
                const val = Number(d[yField] ?? 0);
                const x = xScale(cat);
                const y = yScale(val);
                const bw = xScale.bandwidth();
                const h = innerHeight - y;
                chartGroup.children?.push({
                    id: `bar-${i}`,
                    type: 'rect',
                    attributes: {
                        x,
                        y,
                        width: bw,
                        height: h,
                        fill: i === maxValIdx ? COLOR_WAYPOINT : COLOR_CONTOUR,
                        rx: 0
                    }
                });
                // 4px Scale Bar Tick (X axis)
                axesGroup.children?.push({
                    id: `scale-tick-x-${i}`,
                    type: 'line',
                    attributes: {
                        x1: x + bw / 2,
                        y1: innerHeight,
                        x2: x + bw / 2,
                        y2: innerHeight + 4,
                        stroke: COLOR_CONTOUR,
                        'stroke-width': 1
                    }
                });
                axesGroup.children?.push({
                    id: `tick-x-${i}`,
                    type: 'text',
                    attributes: {
                        x: x + bw / 2,
                        y: innerHeight + 18,
                        fill: COLOR_DATUM,
                        'font-size': 10,
                        'text-anchor': 'middle',
                        'font-family': FONT_MONO
                    },
                    children: [
                        {
                            id: `tick-x-txt-${i}`,
                            type: 'text',
                            attributes: {
                                text: cat
                            }
                        }
                    ]
                });
            });
            // Flag Pin Anomaly on Max Bar
            if (maxValIdx >= 0) {
                const maxCat = String(spec.data[maxValIdx][xField] ?? '');
                const maxBarX = xScale(maxCat) + xScale.bandwidth() / 2;
                const maxBarY = yScale(maxVal);
                chartGroup.children?.push({
                    id: 'flag-pin-stem',
                    type: 'line',
                    attributes: {
                        x1: maxBarX,
                        y1: maxBarY,
                        x2: maxBarX,
                        y2: maxBarY - 12,
                        stroke: COLOR_FLARE,
                        'stroke-width': 1
                    }
                }, {
                    id: 'flag-pin-top',
                    type: 'rect',
                    attributes: {
                        x: maxBarX - 2,
                        y: maxBarY - 16,
                        width: 4,
                        height: 4,
                        fill: COLOR_FLARE
                    }
                });
            }
        }
    } else if (spec.type === 'line') {
        const rawDates = spec.data.map((d)=>new Date(String(d[xField] ?? '')));
        const isTemporal = rawDates.every((dt)=>!isNaN(dt.getTime()));
        const values = spec.data.map((d)=>Number(d[yField] ?? 0));
        const maxVal = Math.max(...values, 0) || 1;
        const maxValIdx = values.indexOf(maxVal);
        const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
            0,
            maxVal * 1.1
        ], [
            innerHeight,
            0
        ]);
        let getXPos;
        let xTickLabels = [];
        if (isTemporal && rawDates.length > 0) {
            const minTime = rawDates[0];
            const maxTime = rawDates[rawDates.length - 1];
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleTime"])([
                minTime,
                maxTime
            ], [
                0,
                innerWidth
            ]);
            getXPos = (d)=>xScale(new Date(String(d[xField] ?? '')));
            xTickLabels = spec.data.map((d)=>{
                const dt = new Date(String(d[xField] ?? ''));
                return {
                    pos: xScale(dt),
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$date$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(dt)
                };
            });
        } else {
            const categories = spec.data.map((d)=>String(d[xField] ?? ''));
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
                0,
                innerWidth
            ], 0);
            getXPos = (d)=>xScale(String(d[xField] ?? '')) + xScale.bandwidth() / 2;
            xTickLabels = categories.map((cat)=>({
                    pos: xScale(cat) + xScale.bandwidth() / 2,
                    label: cat
                }));
        }
        // Y Grid & Ticks
        yScale.ticks(5).forEach((t, idx)=>{
            const y = yScale(t);
            gridGroup.children?.push({
                id: `grid-y-${idx}`,
                type: 'line',
                attributes: {
                    x1: 0,
                    y1: y,
                    x2: innerWidth,
                    y2: y,
                    stroke: COLOR_GRID_LINE,
                    'stroke-dasharray': '2,2'
                }
            });
            // 4px Scale Bar Tick (Y axis)
            axesGroup.children?.push({
                id: `scale-tick-y-${idx}`,
                type: 'line',
                attributes: {
                    x1: -4,
                    y1: y,
                    x2: 0,
                    y2: y,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
            axesGroup.children?.push({
                id: `tick-y-${idx}`,
                type: 'text',
                attributes: {
                    x: -8,
                    y: y + 3,
                    fill: COLOR_DATUM,
                    'font-size': 10,
                    'text-anchor': 'end',
                    'font-family': FONT_MONO
                },
                children: [
                    {
                        id: `tick-y-txt-${idx}`,
                        type: 'text',
                        attributes: {
                            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(t)
                        }
                    }
                ]
            });
        });
        // X Ticks & Scale Bar Ticks
        xTickLabels.forEach((t, idx)=>{
            axesGroup.children?.push({
                id: `scale-tick-x-${idx}`,
                type: 'line',
                attributes: {
                    x1: t.pos,
                    y1: innerHeight,
                    x2: t.pos,
                    y2: innerHeight + 4,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
            axesGroup.children?.push({
                id: `tick-x-${idx}`,
                type: 'text',
                attributes: {
                    x: t.pos,
                    y: innerHeight + 18,
                    fill: COLOR_DATUM,
                    'font-size': 10,
                    'text-anchor': 'middle',
                    'font-family': FONT_MONO
                },
                children: [
                    {
                        id: `tick-x-txt-${idx}`,
                        type: 'text',
                        attributes: {
                            text: t.label
                        }
                    }
                ]
            });
        });
        // Line Path
        const points = spec.data.map((d, i)=>{
            const x = getXPos(d, i);
            const y = yScale(Number(d[yField] ?? 0));
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' L ');
        chartGroup.children?.push({
            id: 'line-path',
            type: 'path',
            attributes: {
                d: `M ${points}`,
                fill: 'none',
                stroke: COLOR_CONTOUR,
                'stroke-width': 2,
                'stroke-linecap': 'square',
                'stroke-linejoin': 'miter'
            }
        });
        // Square Markers (Instrumental Precision: No round circles per shape rules!)
        spec.data.forEach((d, i)=>{
            const x = getXPos(d, i);
            const y = yScale(Number(d[yField] ?? 0));
            chartGroup.children?.push({
                id: `line-dot-${i}`,
                type: 'rect',
                attributes: {
                    x: x - 3,
                    y: y - 3,
                    width: 6,
                    height: 6,
                    fill: i === maxValIdx ? COLOR_WAYPOINT : COLOR_FIELD_BRIGHT(),
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
        });
        // Flag Pin Anomaly on Max Point
        if (maxValIdx >= 0) {
            const maxX = getXPos(spec.data[maxValIdx], maxValIdx);
            const maxY = yScale(maxVal);
            chartGroup.children?.push({
                id: 'flag-pin-stem',
                type: 'line',
                attributes: {
                    x1: maxX,
                    y1: maxY,
                    x2: maxX,
                    y2: maxY - 14,
                    stroke: COLOR_FLARE,
                    'stroke-width': 1
                }
            }, {
                id: 'flag-pin-top',
                type: 'rect',
                attributes: {
                    x: maxX - 2,
                    y: maxY - 18,
                    width: 4,
                    height: 4,
                    fill: COLOR_FLARE
                }
            });
        }
    } else if (spec.type === 'scatter') {
        const xValues = spec.data.map((d)=>Number(d[xField] ?? 0));
        const yValues = spec.data.map((d)=>Number(d[yField] ?? 0));
        const minX = Math.min(...xValues);
        const maxX = Math.max(...xValues) || 1;
        const minY = Math.min(...yValues);
        const maxY = Math.max(...yValues) || 1;
        const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
            minX * 0.9,
            maxX * 1.05
        ], [
            0,
            innerWidth
        ]);
        const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
            minY * 0.9,
            maxY * 1.05
        ], [
            innerHeight,
            0
        ]);
        // Grid & Ticks
        yScale.ticks(5).forEach((t, idx)=>{
            const y = yScale(t);
            gridGroup.children?.push({
                id: `grid-y-${idx}`,
                type: 'line',
                attributes: {
                    x1: 0,
                    y1: y,
                    x2: innerWidth,
                    y2: y,
                    stroke: COLOR_GRID_LINE,
                    'stroke-dasharray': '2,2'
                }
            });
            axesGroup.children?.push({
                id: `scale-tick-y-${idx}`,
                type: 'line',
                attributes: {
                    x1: -4,
                    y1: y,
                    x2: 0,
                    y2: y,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
            axesGroup.children?.push({
                id: `tick-y-${idx}`,
                type: 'text',
                attributes: {
                    x: -8,
                    y: y + 3,
                    fill: COLOR_DATUM,
                    'font-size': 10,
                    'text-anchor': 'end',
                    'font-family': FONT_MONO
                },
                children: [
                    {
                        id: `tick-y-txt-${idx}`,
                        type: 'text',
                        attributes: {
                            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(t)
                        }
                    }
                ]
            });
        });
        xScale.ticks(5).forEach((t, idx)=>{
            const x = xScale(t);
            axesGroup.children?.push({
                id: `scale-tick-x-${idx}`,
                type: 'line',
                attributes: {
                    x1: x,
                    y1: innerHeight,
                    x2: x,
                    y2: innerHeight + 4,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
            axesGroup.children?.push({
                id: `tick-x-${idx}`,
                type: 'text',
                attributes: {
                    x,
                    y: innerHeight + 18,
                    fill: COLOR_DATUM,
                    'font-size': 10,
                    'text-anchor': 'middle',
                    'font-family': FONT_MONO
                },
                children: [
                    {
                        id: `tick-x-txt-${idx}`,
                        type: 'text',
                        attributes: {
                            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(t)
                        }
                    }
                ]
            });
        });
        // Scatter Square Markers
        spec.data.forEach((d, i)=>{
            const x = xScale(Number(d[xField] ?? 0));
            const y = yScale(Number(d[yField] ?? 0));
            chartGroup.children?.push({
                id: `scatter-dot-${i}`,
                type: 'rect',
                attributes: {
                    x: x - 3,
                    y: y - 3,
                    width: 6,
                    height: 6,
                    fill: COLOR_WAYPOINT,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
        });
    } else if (spec.type === 'histogram') {
        const rawValues = spec.data.map((d)=>Number(d[xField] ?? d[yField] ?? 0)).filter((v)=>!isNaN(v));
        const bins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$transforms$2f$bin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["binValues"])(rawValues, spec.encoding.bins || 5);
        const maxCount = Math.max(...bins.map((b)=>b.count), 1);
        const categories = bins.map((b)=>b.label);
        const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
            0,
            innerWidth
        ], 0.15);
        const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createScaleLinear"])([
            0,
            maxCount
        ], [
            innerHeight,
            0
        ]);
        // Grid & Y Ticks
        yScale.ticks(5).forEach((t, idx)=>{
            const y = yScale(t);
            gridGroup.children?.push({
                id: `grid-y-${idx}`,
                type: 'line',
                attributes: {
                    x1: 0,
                    y1: y,
                    x2: innerWidth,
                    y2: y,
                    stroke: COLOR_GRID_LINE,
                    'stroke-dasharray': '2,2'
                }
            });
            axesGroup.children?.push({
                id: `scale-tick-y-${idx}`,
                type: 'line',
                attributes: {
                    x1: -4,
                    y1: y,
                    x2: 0,
                    y2: y,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
            axesGroup.children?.push({
                id: `tick-y-${idx}`,
                type: 'text',
                attributes: {
                    x: -8,
                    y: y + 3,
                    fill: COLOR_DATUM,
                    'font-size': 10,
                    'text-anchor': 'end',
                    'font-family': FONT_MONO
                },
                children: [
                    {
                        id: `tick-y-txt-${idx}`,
                        type: 'text',
                        attributes: {
                            text: String(Math.round(t))
                        }
                    }
                ]
            });
        });
        // Render Histogram Bars
        bins.forEach((b, i)=>{
            const x = xScale(b.label);
            const y = yScale(b.count);
            const bw = xScale.bandwidth();
            const h = innerHeight - y;
            chartGroup.children?.push({
                id: `hist-bar-${i}`,
                type: 'rect',
                attributes: {
                    x,
                    y,
                    width: bw,
                    height: h,
                    fill: COLOR_CONTOUR,
                    rx: 0
                }
            });
            axesGroup.children?.push({
                id: `scale-tick-x-${i}`,
                type: 'line',
                attributes: {
                    x1: x + bw / 2,
                    y1: innerHeight,
                    x2: x + bw / 2,
                    y2: innerHeight + 4,
                    stroke: COLOR_CONTOUR,
                    'stroke-width': 1
                }
            });
            axesGroup.children?.push({
                id: `tick-x-${i}`,
                type: 'text',
                attributes: {
                    x: x + bw / 2,
                    y: innerHeight + 18,
                    fill: COLOR_DATUM,
                    'font-size': 10,
                    'text-anchor': 'middle',
                    'font-family': FONT_MONO
                },
                children: [
                    {
                        id: `tick-x-txt-${i}`,
                        type: 'text',
                        attributes: {
                            text: b.label
                        }
                    }
                ]
            });
        });
    }
    // Base Physical Axis lines (1px solid Contour rule)
    axesGroup.children?.push({
        id: 'x-axis-line',
        type: 'line',
        attributes: {
            x1: 0,
            y1: innerHeight,
            x2: innerWidth,
            y2: innerHeight,
            stroke: COLOR_CONTOUR,
            'stroke-width': 1
        }
    }, {
        id: 'y-axis-line',
        type: 'line',
        attributes: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: innerHeight,
            stroke: COLOR_CONTOUR,
            'stroke-width': 1
        }
    });
    chartGroup.children?.unshift(gridGroup);
    chartGroup.children?.push(axesGroup);
    scene.children.push(chartGroup);
    return scene;
}
function COLOR_FIELD_BRIGHT() {
    return '#f7faf5';
}
_c = COLOR_FIELD_BRIGHT;
var _c;
__turbopack_context__.k.register(_c, "COLOR_FIELD_BRIGHT");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/scales/band.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScaleBand",
    ()=>createScaleBand
]);
function createScaleBand(domain, range, padding = 0.2) {
    const [r0, r1] = range;
    const rangeSpan = Math.abs(r1 - r0);
    const count = domain.length;
    const step = count > 0 ? rangeSpan / count : rangeSpan;
    const bw = step * (1 - padding);
    const map = new Map();
    domain.forEach((d, i)=>{
        map.set(d, r0 + i * step + step * padding / 2);
    });
    const scale = (value)=>{
        return map.get(value) ?? r0;
    };
    scale.bandwidth = ()=>bw;
    scale.domain = domain;
    scale.range = range;
    return scale;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/scales/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/linear.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/band.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/time.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/scales/linear.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScaleLinear",
    ()=>createScaleLinear
]);
function createScaleLinear(domain, range) {
    const [d0, d1] = domain;
    const [r0, r1] = range;
    const dSpan = d1 - d0 || 1;
    const rSpan = r1 - r0;
    const scale = (value)=>{
        return r0 + (value - d0) / dSpan * rSpan;
    };
    scale.domain = domain;
    scale.range = range;
    scale.ticks = (count = 5)=>{
        const step = dSpan / Math.max(1, count - 1);
        const ticks = [];
        for(let i = 0; i < count; i++){
            ticks.push(d0 + step * i);
        }
        return ticks;
    };
    return scale;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/scales/time.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createScaleTime",
    ()=>createScaleTime
]);
function createScaleTime(domain, range) {
    const t0 = domain[0].getTime();
    const t1 = domain[1].getTime();
    const [r0, r1] = range;
    const tSpan = t1 - t0 || 1;
    const rSpan = r1 - r0;
    const scale = (value)=>{
        const time = typeof value === 'number' ? value : value.getTime();
        return r0 + (time - t0) / tSpan * rSpan;
    };
    scale.domain = domain;
    scale.range = range;
    return scale;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/spec/schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartConfigSchema",
    ()=>ChartConfigSchema,
    "ChartSpecSchema",
    ()=>ChartSpecSchema,
    "ChartTypeSchema",
    ()=>ChartTypeSchema,
    "EncodingMapSchema",
    ()=>EncodingMapSchema,
    "FieldDataTypeSchema",
    ()=>FieldDataTypeSchema,
    "FieldEncodingSchema",
    ()=>FieldEncodingSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-client] (ecmascript) <export * as z>");
;
const ChartTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'line',
    'bar',
    'scatter',
    'histogram',
    'kpi-sparkline'
]);
const FieldDataTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'quantitative',
    'temporal',
    'categorical'
]);
const FieldEncodingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    field: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Field name must not be empty'),
    type: FieldDataTypeSchema.optional(),
    label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const EncodingMapSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    x: FieldEncodingSchema.optional(),
    y: FieldEncodingSchema.optional(),
    color: FieldEncodingSchema.optional(),
    size: FieldEncodingSchema.optional(),
    orientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'vertical',
        'horizontal'
    ]).optional(),
    bins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional()
});
const ChartConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional().default(600),
    height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional().default(400),
    margin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        top: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(20),
        right: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(20),
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(40),
        left: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(50)
    }).optional(),
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'light',
        'dark'
    ]).optional().default('light'),
    showGrid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true),
    showLegend: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true),
    showTooltip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true)
});
const ChartSpecSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    $schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('0.1.0'),
    type: ChartTypeSchema,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    subtitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).min(1, 'ChartSpec data array must contain at least 1 record'),
    encoding: EncodingMapSchema,
    config: ChartConfigSchema.optional()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/spec/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/spec/validate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartSpecValidationError",
    ()=>ChartSpecValidationError,
    "validateChartSpec",
    ()=>validateChartSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/schema.ts [app-client] (ecmascript)");
;
class ChartSpecValidationError extends Error {
    issues;
    constructor(issues){
        super(`ChartSpec validation failed:\n - ${issues.join('\n - ')}`);
        this.name = 'ChartSpecValidationError';
        this.issues = issues;
    }
}
function validateChartSpec(spec) {
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartSpecSchema"].safeParse(spec);
    if (!result.success) {
        const issues = result.error.issues.map((issue)=>`${issue.path.join('.') || 'root'}: ${issue.message}`);
        throw new ChartSpecValidationError(issues);
    }
    return result.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/core/src/transforms/bin.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "binValues",
    ()=>binValues
]);
function binValues(values, numBins = 5) {
    if (values.length === 0) return [];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const step = (max - min) / (numBins || 1) || 1;
    const bins = Array.from({
        length: numBins
    }, (_, i)=>{
        const binMin = min + i * step;
        const binMax = binMin + step;
        return {
            binMin,
            binMax,
            count: 0,
            label: `${binMin.toFixed(1)} - ${binMax.toFixed(1)}`
        };
    });
    for (const v of values){
        let index = Math.floor((v - min) / step);
        if (index >= numBins) index = numBins - 1;
        if (index < 0) index = 0;
        bins[index].count++;
    }
    return bins;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/intelligence/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/recommender.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/intelligence/src/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "profileField",
    ()=>profileField
]);
function profileField(data, field) {
    const values = data.map((d)=>d[field]).filter((v)=>v !== undefined && v !== null);
    const distinct = new Set(values);
    if (values.length === 0) {
        return {
            field,
            type: 'categorical',
            distinctCount: 0
        };
    }
    const sample = values[0];
    if (sample instanceof Date) {
        return {
            field,
            type: 'temporal',
            distinctCount: distinct.size
        };
    }
    if (typeof sample === 'number') {
        return {
            field,
            type: 'quantitative',
            distinctCount: distinct.size
        };
    }
    if (typeof sample === 'string') {
        const isDateStr = !isNaN(Date.parse(sample)) && isNaN(Number(sample));
        if (isDateStr) {
            return {
                field,
                type: 'temporal',
                distinctCount: distinct.size
            };
        }
    }
    return {
        field,
        type: 'categorical',
        distinctCount: distinct.size
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/intelligence/src/recommender.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recommendChartSpec",
    ()=>recommendChartSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/profile.ts [app-client] (ecmascript)");
;
function recommendChartSpec(data) {
    if (!data || data.length === 0) {
        throw new Error('Cannot recommend ChartSpec for empty dataset');
    }
    const fields = Object.keys(data[0]);
    const profiles = fields.map((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileField"])(data, f));
    const temporalFields = profiles.filter((p)=>p.type === 'temporal');
    const quantFields = profiles.filter((p)=>p.type === 'quantitative');
    const catFields = profiles.filter((p)=>p.type === 'categorical');
    let chosenType = 'bar';
    let xField = fields[0];
    let yField = fields[1] || fields[0];
    if (temporalFields.length >= 1 && quantFields.length >= 1) {
        chosenType = 'line';
        xField = temporalFields[0].field;
        yField = quantFields[0].field;
    } else if (catFields.length >= 1 && quantFields.length >= 1) {
        chosenType = 'bar';
        xField = catFields[0].field;
        yField = quantFields[0].field;
    } else if (quantFields.length >= 2) {
        chosenType = 'scatter';
        xField = quantFields[0].field;
        yField = quantFields[1].field;
    } else if (quantFields.length === 1 && catFields.length === 0 && temporalFields.length === 0) {
        chosenType = 'histogram';
        xField = quantFields[0].field;
    }
    return {
        version: '0.1.0',
        type: chosenType,
        data,
        encoding: {
            x: {
                field: xField,
                type: profiles.find((p)=>p.field === xField)?.type
            },
            y: {
                field: yField,
                type: profiles.find((p)=>p.field === yField)?.type
            }
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/react/src/AutoChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoChart",
    ()=>AutoChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/useChartSpec.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/SVGContainer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const AutoChart = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "0184dac91534155914e65880d0c71497acd50bd38e5f0f125e3da77db9decf98") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0184dac91534155914e65880d0c71497acd50bd38e5f0f125e3da77db9decf98";
    }
    const { data, title } = t0;
    let t1;
    if ($[1] !== data || $[2] !== title) {
        t1 = {
            data,
            title
        };
        $[1] = data;
        $[2] = title;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartSpec"])(t1);
    let t2;
    if ($[4] !== spec) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGContainer"], {
            spec: spec
        }, void 0, false, {
            fileName: "[project]/packages/react/src/AutoChart.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = spec;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
};
_s(AutoChart, "SLRrabDZqikStRthdVsEa/KsJJI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartSpec"]
    ];
});
_c = AutoChart;
var _c;
__turbopack_context__.k.register(_c, "AutoChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/react/src/Chart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chart",
    ()=>Chart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/useChartSpec.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/SVGContainer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Chart = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "c1bed54d281b4d03a2199a97fc796cf5a1ccfb26a5606ff95a9241ebc31caae4") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c1bed54d281b4d03a2199a97fc796cf5a1ccfb26a5606ff95a9241ebc31caae4";
    }
    const { data, type, x, y, color, orientation, title } = t0;
    let t1;
    if ($[1] !== color || $[2] !== data || $[3] !== orientation || $[4] !== title || $[5] !== type || $[6] !== x || $[7] !== y) {
        t1 = {
            data,
            type,
            x,
            y,
            color,
            orientation,
            title
        };
        $[1] = color;
        $[2] = data;
        $[3] = orientation;
        $[4] = title;
        $[5] = type;
        $[6] = x;
        $[7] = y;
        $[8] = t1;
    } else {
        t1 = $[8];
    }
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartSpec"])(t1);
    let t2;
    if ($[9] !== spec) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SVGContainer"], {
            spec: spec
        }, void 0, false, {
            fileName: "[project]/packages/react/src/Chart.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = spec;
        $[10] = t2;
    } else {
        t2 = $[10];
    }
    return t2;
};
_s(Chart, "SLRrabDZqikStRthdVsEa/KsJJI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartSpec"]
    ];
});
_c = Chart;
var _c;
__turbopack_context__.k.register(_c, "Chart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/react/src/SVGContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SVGContainer",
    ()=>SVGContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$layout$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/layout/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/render-svg/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$renderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/render-svg/src/renderer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$accessibility$2f$table$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/render-svg/src/accessibility/table.ts [app-client] (ecmascript)");
;
;
;
;
const SVGContainer = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "3443300f3493ba116b22851f3344f2d24bb8a0f04a07f1f04c74fa8ea3d06250") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3443300f3493ba116b22851f3344f2d24bb8a0f04a07f1f04c74fa8ea3d06250";
    }
    const { spec } = t0;
    let t1;
    if ($[1] !== spec) {
        const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$layout$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSceneGraph"])(spec);
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$renderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderSceneGraphToSVGString"])(scene);
        $[1] = spec;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const svgMarkup = t1;
    let t2;
    if ($[3] !== spec) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$accessibility$2f$table$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderAccessibleDataTable"])(spec);
        $[3] = spec;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const tableMarkup = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            position: "relative",
            display: "inline-block"
        };
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== svgMarkup) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vizora-svg-wrapper",
            dangerouslySetInnerHTML: {
                __html: svgMarkup
            }
        }, void 0, false, {
            fileName: "[project]/packages/react/src/SVGContainer.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = svgMarkup;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== tableMarkup) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vizora-accessible-wrapper",
            dangerouslySetInnerHTML: {
                __html: tableMarkup
            }
        }, void 0, false, {
            fileName: "[project]/packages/react/src/SVGContainer.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = tableMarkup;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "vizora-chart-container",
            style: t3,
            children: [
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/packages/react/src/SVGContainer.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
};
_c = SVGContainer;
var _c;
__turbopack_context__.k.register(_c, "SVGContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/react/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/Chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/AutoChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/useChartSpec.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/SVGContainer.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/react/src/useChartSpec.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChartSpec",
    ()=>useChartSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/intelligence/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/recommender.ts [app-client] (ecmascript)");
;
;
function useChartSpec(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "3eeffe3a02e7613385314e1068cb32c6365059bd5d7bbc3f17c2c83195658fd5") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3eeffe3a02e7613385314e1068cb32c6365059bd5d7bbc3f17c2c83195658fd5";
    }
    const { data, type, x, y, color, orientation, title } = t0;
    let t1;
    bb0: {
        if (!type && !x && !y) {
            let recommended;
            if ($[1] !== data || $[2] !== orientation || $[3] !== title) {
                recommended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recommendChartSpec"])(data);
                if (title) {
                    recommended.title = title;
                }
                if (orientation) {
                    recommended.encoding.orientation = orientation;
                }
                $[1] = data;
                $[2] = orientation;
                $[3] = title;
                $[4] = recommended;
            } else {
                recommended = $[4];
            }
            t1 = recommended;
            break bb0;
        }
        const t2 = type || "bar";
        let t3;
        if ($[5] !== x) {
            t3 = x ? {
                field: x
            } : undefined;
            $[5] = x;
            $[6] = t3;
        } else {
            t3 = $[6];
        }
        let t4;
        if ($[7] !== y) {
            t4 = y ? {
                field: y
            } : undefined;
            $[7] = y;
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        let t5;
        if ($[9] !== color) {
            t5 = color ? {
                field: color
            } : undefined;
            $[9] = color;
            $[10] = t5;
        } else {
            t5 = $[10];
        }
        let t6;
        if ($[11] !== orientation || $[12] !== t3 || $[13] !== t4 || $[14] !== t5) {
            t6 = {
                x: t3,
                y: t4,
                color: t5,
                orientation
            };
            $[11] = orientation;
            $[12] = t3;
            $[13] = t4;
            $[14] = t5;
            $[15] = t6;
        } else {
            t6 = $[15];
        }
        let t7;
        if ($[16] !== data || $[17] !== t2 || $[18] !== t6 || $[19] !== title) {
            t7 = {
                version: "0.1.0",
                type: t2,
                title,
                data,
                encoding: t6
            };
            $[16] = data;
            $[17] = t2;
            $[18] = t6;
            $[19] = title;
            $[20] = t7;
        } else {
            t7 = $[20];
        }
        t1 = t7;
    }
    return t1;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/render-svg/src/accessibility/table.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderAccessibleDataTable",
    ()=>renderAccessibleDataTable
]);
function renderAccessibleDataTable(spec) {
    if (!spec.data || spec.data.length === 0) return '';
    const fields = Object.keys(spec.data[0]);
    const headers = fields.map((f)=>`<th>${f}</th>`).join('');
    const rows = spec.data.map((row)=>`<tr>${fields.map((f)=>`<td>${String(row[f] ?? '')}</td>`).join('')}</tr>`).join('');
    return `
    <table class="vizora-aria-table" style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;">
      <caption>${spec.title || 'Chart Data Fallback Table'}</caption>
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `.trim();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/render-svg/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$renderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/render-svg/src/renderer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$accessibility$2f$table$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/render-svg/src/accessibility/table.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/render-svg/src/renderer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "renderSceneGraphToSVGString",
    ()=>renderSceneGraphToSVGString,
    "renderSceneNodeToString",
    ()=>renderSceneNodeToString
]);
function renderSceneNodeToString(node) {
    const attrs = Object.entries(node.attributes).map(([k, v])=>`${k}="${v}"`).join(' ');
    if (node.type === 'group') {
        const childrenStr = (node.children || []).map((c)=>renderSceneNodeToString(c)).join('');
        return `<g ${attrs}>${childrenStr}</g>`;
    }
    return `<${node.type} ${attrs} />`;
}
function renderSceneGraphToSVGString(scene) {
    const childrenStr = scene.children.map((node)=>renderSceneNodeToString(node)).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${scene.viewBox}" width="${scene.width}" height="${scene.height}">${childrenStr}</svg>`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1b40i13._.js.map
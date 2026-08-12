module.exports = [
"[project]/apps/web/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/react/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/AutoChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/Chart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/intelligence/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/recommender.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CompassDial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/CompassDial.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LegendBand$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/LegendBand.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CartoButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/components/CartoButton.tsx [app-ssr] (ecmascript)");
'use client';
;
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
    const [activePresetKey, setActivePresetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('sales');
    const [selectedChartType, setSelectedChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('bar');
    const [orientation, setOrientation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('vertical');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [customJson, setCustomJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentPreset = PRESETS[activePresetKey];
    // Live parsed data array
    const currentData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!customJson.trim()) return currentPreset.data;
        try {
            const parsed = JSON.parse(customJson);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch  {
        // Invalid JSON fallback
        }
        return currentPreset.data;
    }, [
        customJson,
        currentPreset.data
    ]);
    // Recommended spec from intelligence package
    const autoSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const rec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recommendChartSpec"])(currentData);
        rec.title = `${currentPreset.name} (AutoChart)`;
        return rec;
    }, [
        currentData,
        currentPreset.name
    ]);
    // Active computed spec
    const computedSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
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
    }, [
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
    const maxItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!currentData || currentData.length === 0) return null;
        const yKey = currentPreset.y || currentPreset.x;
        let maxVal = -Infinity;
        let item = null;
        currentData.forEach((d)=>{
            const val = Number(d[yKey] ?? 0);
            if (!isNaN(val) && val > maxVal) {
                maxVal = val;
                item = d;
            }
        });
        return {
            key: yKey,
            val: maxVal,
            item
        };
    }, [
        currentData,
        currentPreset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#ecefea] text-[#1e2a22] p-4 md:p-8 carto-grid-bg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "max-w-7xl mx-auto mb-8 carto-panel p-6 bg-[#f7faf5]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1e2a22] pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-data-spec text-[#6e756a] text-xs mb-1",
                                    children: "SURVEY NO. 1894 // INSTRUMENTAL MINIMALISM // CHART RUNTIME"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display-hero text-3xl md:text-4xl text-[#1e2a22] tracking-tight",
                                    children: "Vizora : Cartography of Data"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] text-sm mt-1 max-w-2xl",
                                    children: [
                                        "Framework-agnostic chart runtime + deterministic data profiling + automatic chart recommendation. Rendering pure SVG scene graphs derived from validated ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "font-data-spec bg-[#dee5d7] px-1 border border-[#1e2a22]",
                                            children: "ChartSpec"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 70
                                        }, this),
                                        " contracts."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-end gap-1.5 font-data-spec text-xs text-[#6e756a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-2.5 py-1 bg-[#dee5d7] border border-[#1e2a22] text-[#1e2a22] font-semibold flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "h-2 w-2 bg-[#c2872e]"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        "lat : 45.0n / lon : 93.2w"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "datum : geodetic-1894 / engine : svg-ssr"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label-caps text-[#1e2a22]",
                                                children: "Execution Mode"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-data-spec text-[#6e756a] text-xs",
                                                children: [
                                                    "mode : ",
                                                    mode
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode('auto'),
                                                className: `py-2 px-3 border text-xs font-mono transition-all text-center ${mode === 'auto' ? 'bg-[#c2872e] text-[#1e2a22] border-[#1e2a22] font-bold' : 'bg-[#f7faf5] text-[#6e756a] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                                children: "AutoChart (Heuristic)"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setMode('explicit'),
                                                className: `py-2 px-3 border text-xs font-mono transition-all text-center ${mode === 'explicit' ? 'bg-[#c2872e] text-[#1e2a22] border-[#1e2a22] font-bold' : 'bg-[#f7faf5] text-[#6e756a] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                                children: "Explicit <Chart />"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CompassDial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompassDial"], {
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
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label-caps text-[#1e2a22]",
                                                children: "Sample Geodetic Datasets"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 251,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-data-spec text-[#6e756a] text-xs",
                                                children: [
                                                    "n = ",
                                                    Object.keys(PRESETS).length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-1.5",
                                        children: Object.keys(PRESETS).map((key)=>{
                                            const preset = PRESETS[key];
                                            const isActive = activePresetKey === key;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSelectPreset(key),
                                                className: `px-3 py-2 border text-left text-xs font-mono flex items-center justify-between transition-all ${isActive ? 'bg-[#1e2a22] text-[#f7faf5] border-[#1e2a22]' : 'bg-[#f7faf5] text-[#1e2a22] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: preset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] opacity-75",
                                                        children: [
                                                            "[",
                                                            preset.type,
                                                            "]"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            mode === 'explicit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3 bg-[#dee5d7]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-label-caps text-[#1e2a22] border-b border-[#1e2a22] pb-2",
                                        children: "Explicit Encoding Controls"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "Chart Type:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: selectedChartType,
                                                onChange: (e)=>setSelectedChartType(e.target.value),
                                                className: "bg-[#f7faf5] border border-[#1e2a22] px-2 py-1 text-[#1e2a22] outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "bar",
                                                        children: "Bar Survey"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "line",
                                                        children: "Temporal Line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "scatter",
                                                        children: "Scatter Plot"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "histogram",
                                                        children: "Histogram"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "kpi-sparkline",
                                                        children: "KPI Sparkline"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    selectedChartType === 'bar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs font-mono pt-2 border-t border-[#1e2a22]/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "Bar Orientation:"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CartoButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartoButton"], {
                                                variant: "secondary",
                                                onClick: ()=>setOrientation(orientation === 'vertical' ? 'horizontal' : 'vertical'),
                                                children: orientation === 'vertical' ? 'Vertical [↕]' : 'Horizontal [↔]'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-label-caps text-[#1e2a22]",
                                                children: "Raw JSON Data Input"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this),
                                            customJson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCustomJson(''),
                                                className: "font-data-spec text-[#d6502b] hover:underline",
                                                children: "reset"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 4,
                                        value: customJson,
                                        onChange: (e)=>setCustomJson(e.target.value),
                                        placeholder: `Paste tabular JSON array:\n[{"region": "US", "sales": 100}, {"region": "EU", "sales": 80}]`,
                                        className: "w-full bg-[#f7faf5] border border-[#6e756a] p-2.5 font-data-spec text-xs text-[#1e2a22] outline-none focus:border-[#c2872e]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel bg-[#f7faf5]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 border-b border-[#1e2a22] flex items-center justify-between bg-[#ecefea]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-data-spec text-xs text-[#6e756a]",
                                                        children: mode === 'auto' ? `autochart : inferred [${computedSpec.type}]` : `explicit : bound [x=${currentPreset.x}, y=${currentPreset.y || ''}]`
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-headline-md text-lg text-[#1e2a22]",
                                                        children: currentPreset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 344,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1 bg-[#c2872e] text-[#1e2a22] border border-[#1e2a22] font-label-caps text-[10px]",
                                                children: "Determinism Verified"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 343,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 bg-[#f7faf5] flex justify-center items-center min-h-[400px]",
                                        children: mode === 'auto' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoChart"], {
                                            data: currentData,
                                            title: `${currentPreset.name}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chart"], {
                                            data: currentData,
                                            type: selectedChartType,
                                            x: currentPreset.x,
                                            y: currentPreset.y,
                                            orientation: orientation,
                                            title: `${currentPreset.name}`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LegendBand$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LegendBand"], {
                                        spec: computedSpec,
                                        dataCount: currentData.length
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this),
                            maxItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 bg-[#dee5d7] flex items-center justify-between border-l-4 border-l-[#d6502b]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 bg-[#d6502b]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-label-caps text-[#d6502b]",
                                                        children: "Flag Pin Anomaly Detected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-data-spec text-xs text-[#1e2a22]",
                                                        children: [
                                                            "max datum point : ",
                                                            String(maxItem.item?.[currentPreset.x] || maxItem.item?.[currentPreset.y || '']),
                                                            " = ",
                                                            maxItem.val
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-data-spec text-xs text-[#6e756a]",
                                        children: "status : flag-pin-active"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-[#1e2a22] pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-label-caps text-[#1e2a22]",
                                                        children: "ChartSpec JSON Contract"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-data-spec text-[#6e756a] text-xs block",
                                                        children: "zod runtime validated IR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CartoButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartoButton"], {
                                                variant: "secondary",
                                                onClick: handleCopySpec,
                                                children: copied ? '✓ Copied' : 'Copy Spec JSON'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "bg-[#1e2a22] text-[#ecefea] p-4 font-data-spec text-xs overflow-x-auto max-h-[320px] border border-[#1e2a22]",
                                        children: JSON.stringify(computedSpec, null, 2)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-4 space-y-2 bg-[#f7faf5]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-label-caps text-[#1e2a22]",
                                        children: "React Integration (< 4 Lines)"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "bg-[#ecefea] p-3 border border-[#1e2a22] font-data-spec text-xs text-[#1e2a22]",
                                        children: mode === 'auto' ? `import { AutoChart } from '@vizora/react';\n\n<AutoChart data={data} />` : `import { Chart } from '@vizora/react';\n\n<Chart data={data} type="${selectedChartType}" x="${currentPreset.x}" y="${currentPreset.y || ''}" />`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 413,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/web/src/components/CartoButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartoButton",
    ()=>CartoButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const CartoButton = ({ variant = 'primary', children, className = '', ...props })=>{
    const baseClass = variant === 'primary' ? 'carto-btn-primary' : 'carto-btn-secondary';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseClass} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/components/CartoButton.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/src/components/CompassDial.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompassDial",
    ()=>CompassDial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
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
const CompassDial = ({ recommendedType, selectedType, onSelectType, className = '' })=>{
    const activeWaypoint = CHART_WAYPOINTS.find((w)=>w.type === selectedType) || CHART_WAYPOINTS[0];
    const bearingAngle = activeWaypoint.angle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full aspect-square max-w-[340px] mx-auto bg-[#ecefea]/60 border border-[#1e2a22]/30 carto-grid-bg p-6 flex items-center justify-center ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-2 left-2 font-mono text-xs text-[#1e2a22]/40 select-none",
                children: "┌"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-2 right-2 font-mono text-xs text-[#1e2a22]/40 select-none",
                children: "┐"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-2 left-2 font-mono text-xs text-[#1e2a22]/40 select-none",
                children: "└"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-2 right-2 font-mono text-xs text-[#1e2a22]/40 select-none",
                children: "┘"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full max-w-[280px] max-h-[280px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 240 240",
                    className: "w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "120",
                            cy: "120",
                            r: "105",
                            fill: "#f7faf5",
                            stroke: "#1e2a22",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "120",
                            cy: "120",
                            r: "96",
                            fill: "none",
                            stroke: "#6e756a",
                            strokeWidth: "0.75",
                            strokeDasharray: "2 3"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "120",
                            cy: "120",
                            r: "50",
                            fill: "none",
                            stroke: "rgba(110, 117, 106, 0.15)",
                            strokeWidth: "1"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        Array.from({
                            length: 36
                        }).map((_, i)=>{
                            const deg = i * 10;
                            const rad = (deg - 90) * (Math.PI / 180);
                            const isMajor = deg % 90 === 0;
                            const len = isMajor ? 8 : 4;
                            const x1 = 120 + (96 - len) * Math.cos(rad);
                            const y1 = 120 + (96 - len) * Math.sin(rad);
                            const x2 = 120 + 96 * Math.cos(rad);
                            const y2 = 120 + 96 * Math.sin(rad);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: x1,
                                y1: y1,
                                x2: x2,
                                y2: y2,
                                stroke: "#1e2a22",
                                strokeWidth: isMajor ? 1.25 : 0.6
                            }, deg, false, {
                                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }),
                        CHART_WAYPOINTS.map((wp)=>{
                            const rad = (wp.angle - 90) * (Math.PI / 180);
                            const tx = 120 + 72 * Math.cos(rad);
                            const ty = 120 + 72 * Math.sin(rad);
                            const isSelected = selectedType === wp.type;
                            const isRecommended = recommendedType === wp.type;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                className: "cursor-pointer group",
                                onClick: ()=>onSelectType(wp.type),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                        x: tx,
                                        y: ty + 4,
                                        textAnchor: "middle",
                                        fill: isSelected ? '#c2872e' : '#1e2a22',
                                        fontSize: "11",
                                        fontFamily: "IBM Plex Mono, monospace",
                                        fontWeight: isSelected ? 'bold' : '500',
                                        className: "transition-colors group-hover:fill-[#c2872e]",
                                        children: wp.label
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                        lineNumber: 85,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isRecommended && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: tx,
                                        cy: ty - 10,
                                        r: "2",
                                        fill: "#d6502b"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, wp.type, true, {
                                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            style: {
                                transform: `rotate(${bearingAngle}deg)`,
                                transformOrigin: '120px 120px',
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "120",
                                    y1: "120",
                                    x2: "120",
                                    y2: "34",
                                    stroke: "#c2872e",
                                    strokeWidth: "2.5",
                                    strokeLinecap: "square"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                    points: "120,26 125,38 115,38",
                                    fill: "#c2872e",
                                    stroke: "#1e2a22",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "120",
                                    y1: "120",
                                    x2: "120",
                                    y2: "175",
                                    stroke: "#1e2a22",
                                    strokeWidth: "1"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "120",
                                    cy: "175",
                                    r: "3",
                                    fill: "#1e2a22"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "120",
                                    cy: "120",
                                    r: "7",
                                    fill: "#1e2a22"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "120",
                                    cy: "120",
                                    r: "3",
                                    fill: "#c2872e"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/components/CompassDial.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/CompassDial.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/apps/web/src/components/LegendBand.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LegendBand",
    ()=>LegendBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const LegendBand = ({ spec })=>{
    const xField = spec.encoding.x?.field || 'time_series';
    const yField = spec.encoding.y?.field || 'amplitude';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-10 px-5 bg-[#dee5d7] border-t border-[#1e2a22] font-data-spec text-xs text-[#1e2a22] flex items-center justify-between overflow-x-auto whitespace-nowrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-semibold text-[#6e756a]",
                                children: "X_AXIS |"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                                lineNumber: 18,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            xField
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#6e756a]",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-semibold text-[#6e756a]",
                                children: "Y_AXIS |"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                                lineNumber: 20,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            yField
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#6e756a]",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-semibold text-[#6e756a]",
                                children: "TYPE |"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                                lineNumber: 22,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            spec.type,
                            "_plot"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-[#d6502b] font-mono text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block w-2.5 h-2.5 bg-[#d6502b]"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Outlier_Threshold | > 0.8"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/components/LegendBand.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/components/LegendBand.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/core/src/format/date.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/core/src/format/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
}),
"[project]/packages/core/src/format/number.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/schema.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$validate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/validate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/scales/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/format/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$layout$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/layout/scene.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/packages/core/src/layout/scene.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSceneGraph",
    ()=>buildSceneGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$validate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/validate.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/linear.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/band.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/scales/time.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$transforms$2f$bin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/transforms/bin.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/format/number.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/format/date.ts [app-ssr] (ecmascript)");
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
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$validate$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateChartSpec"])(inputSpec);
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
        const formattedVal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(currentValue);
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
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
                0,
                values.length - 1
            ], [
                0,
                innerWidth
            ]);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
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
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
                0,
                innerHeight
            ], 0.25);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
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
                                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(t)
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
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
                0,
                innerWidth
            ], 0.25);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
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
                                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(t)
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
        const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
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
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$time$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleTime"])([
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
                    label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$date$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDate"])(dt)
                };
            });
        } else {
            const categories = spec.data.map((d)=>String(d[xField] ?? ''));
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
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
                            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(t)
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
        const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
            minX * 0.9,
            maxX * 1.05
        ], [
            0,
            innerWidth
        ]);
        const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
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
                            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(t)
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
                            text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$format$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatNumber"])(t)
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
        const bins = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$transforms$2f$bin$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["binValues"])(rawValues, spec.encoding.bins || 5);
        const maxCount = Math.max(...bins.map((b)=>b.count), 1);
        const categories = bins.map((b)=>b.label);
        const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$band$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleBand"])(categories, [
            0,
            innerWidth
        ], 0.15);
        const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$scales$2f$linear$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createScaleLinear"])([
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
}),
"[project]/packages/core/src/scales/band.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/core/src/scales/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
}),
"[project]/packages/core/src/scales/linear.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/core/src/scales/time.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/core/src/spec/schema.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/external.js [app-ssr] (ecmascript) <export * as z>");
;
const ChartTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'line',
    'bar',
    'scatter',
    'histogram',
    'kpi-sparkline'
]);
const FieldDataTypeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    'quantitative',
    'temporal',
    'categorical'
]);
const FieldEncodingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    field: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Field name must not be empty'),
    type: FieldDataTypeSchema.optional(),
    label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    format: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
});
const EncodingMapSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    x: FieldEncodingSchema.optional(),
    y: FieldEncodingSchema.optional(),
    color: FieldEncodingSchema.optional(),
    size: FieldEncodingSchema.optional(),
    orientation: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'vertical',
        'horizontal'
    ]).optional(),
    bins: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional()
});
const ChartConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional().default(600),
    height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive().optional().default(400),
    margin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        top: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(20),
        right: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(20),
        bottom: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(40),
        left: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().default(50)
    }).optional(),
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'light',
        'dark'
    ]).optional().default('light'),
    showGrid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true),
    showLegend: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true),
    showTooltip: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().optional().default(true)
});
const ChartSpecSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    $schema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('0.1.0'),
    type: ChartTypeSchema,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    subtitle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    data: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$external$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].unknown())).min(1, 'ChartSpec data array must contain at least 1 record'),
    encoding: EncodingMapSchema,
    config: ChartConfigSchema.optional()
});
}),
"[project]/packages/core/src/spec/validate.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartSpecValidationError",
    ()=>ChartSpecValidationError,
    "validateChartSpec",
    ()=>validateChartSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/spec/schema.ts [app-ssr] (ecmascript)");
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
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$spec$2f$schema$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartSpecSchema"].safeParse(spec);
    if (!result.success) {
        const issues = result.error.issues.map((issue)=>`${issue.path.join('.') || 'root'}: ${issue.message}`);
        throw new ChartSpecValidationError(issues);
    }
    return result.data;
}
}),
"[project]/packages/core/src/transforms/bin.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/intelligence/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/recommender.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/packages/intelligence/src/profile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/intelligence/src/recommender.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recommendChartSpec",
    ()=>recommendChartSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/profile.ts [app-ssr] (ecmascript)");
;
function recommendChartSpec(data) {
    if (!data || data.length === 0) {
        throw new Error('Cannot recommend ChartSpec for empty dataset');
    }
    const fields = Object.keys(data[0]);
    const profiles = fields.map((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$profile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["profileField"])(data, f));
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
}),
"[project]/packages/react/src/AutoChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoChart",
    ()=>AutoChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/useChartSpec.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/SVGContainer.tsx [app-ssr] (ecmascript)");
;
;
;
const AutoChart = ({ data, title })=>{
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChartSpec"])({
        data,
        title
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SVGContainer"], {
        spec: spec
    }, void 0, false, {
        fileName: "[project]/packages/react/src/AutoChart.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/react/src/Chart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chart",
    ()=>Chart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/useChartSpec.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/SVGContainer.tsx [app-ssr] (ecmascript)");
;
;
;
const Chart = ({ data, type, x, y, color, orientation, title })=>{
    const spec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChartSpec"])({
        data,
        type,
        x,
        y,
        color,
        orientation,
        title
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SVGContainer"], {
        spec: spec
    }, void 0, false, {
        fileName: "[project]/packages/react/src/Chart.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/react/src/SVGContainer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SVGContainer",
    ()=>SVGContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/core/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$layout$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/core/src/layout/scene.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/render-svg/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$renderer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/render-svg/src/renderer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$accessibility$2f$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/render-svg/src/accessibility/table.ts [app-ssr] (ecmascript)");
;
;
;
const SVGContainer = ({ spec })=>{
    const scene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$core$2f$src$2f$layout$2f$scene$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildSceneGraph"])(spec);
    const svgMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$renderer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderSceneGraphToSVGString"])(scene);
    const tableMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$render$2d$svg$2f$src$2f$accessibility$2f$table$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["renderAccessibleDataTable"])(spec);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "vizora-chart-container",
        style: {
            position: 'relative',
            display: 'inline-block'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vizora-svg-wrapper",
                dangerouslySetInnerHTML: {
                    __html: svgMarkup
                }
            }, void 0, false, {
                fileName: "[project]/packages/react/src/SVGContainer.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vizora-accessible-wrapper",
                dangerouslySetInnerHTML: {
                    __html: tableMarkup
                }
            }, void 0, false, {
                fileName: "[project]/packages/react/src/SVGContainer.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/packages/react/src/SVGContainer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/packages/react/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/Chart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/AutoChart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$useChartSpec$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/useChartSpec.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$SVGContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/react/src/SVGContainer.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/packages/react/src/useChartSpec.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useChartSpec",
    ()=>useChartSpec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/intelligence/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/intelligence/src/recommender.ts [app-ssr] (ecmascript)");
;
;
function useChartSpec({ data, type, x, y, color, orientation, title }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!type && !x && !y) {
            const recommended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recommendChartSpec"])(data);
            if (title) recommended.title = title;
            if (orientation) recommended.encoding.orientation = orientation;
            return recommended;
        }
        return {
            version: '0.1.0',
            type: type || 'bar',
            title,
            data,
            encoding: {
                x: x ? {
                    field: x
                } : undefined,
                y: y ? {
                    field: y
                } : undefined,
                color: color ? {
                    field: color
                } : undefined,
                orientation
            }
        };
    }, [
        data,
        type,
        x,
        y,
        color,
        orientation,
        title
    ]);
}
}),
"[project]/packages/render-svg/src/accessibility/table.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/packages/render-svg/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
}),
"[project]/packages/render-svg/src/renderer.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=_2008_zx._.js.map
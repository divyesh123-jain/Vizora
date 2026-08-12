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
'use client';
;
;
;
;
;
;
// Datasets
const PRESETS = {
    harmonic: {
        name: 'FIG 1. HARMONIC OSCILLATION SURVEY',
        type: 'line',
        x: 't',
        y: 'amp',
        profile: 'temporal [t] + quantitative [amp]',
        data: [
            {
                t: '1.00',
                amp: 0.35
            },
            {
                t: '2.00',
                amp: 0.52
            },
            {
                t: '3.00',
                amp: 0.28
            },
            {
                t: '4.00',
                amp: 0.68
            },
            {
                t: '5.00',
                amp: 0.54
            },
            {
                t: '6.00',
                amp: 0.24
            },
            {
                t: '7.00',
                amp: 0.88
            },
            {
                t: '8.00',
                amp: 0.62
            },
            {
                t: '9.00',
                amp: 0.18
            },
            {
                t: '10.00',
                amp: 0.58
            },
            {
                t: '11.00',
                amp: 0.44
            }
        ]
    },
    sales: {
        name: 'FIG 2. REGIONAL SALES SURVEY',
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
    scatter: {
        name: 'FIG 3. COORD DISTRIBUTIVE SCATTER',
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
        name: 'FIG 4. ELEVATION FREQUENCY DENSITY',
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
    }
};
function Home() {
    const [activePresetKey, setActivePresetKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('harmonic');
    const [selectedChartType, setSelectedChartType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('line');
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [customJson, setCustomJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [copiedCode, setCopiedCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedSpec, setCopiedSpec] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playgroundOpen, setPlaygroundOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentPreset = PRESETS[activePresetKey];
    // Data processing
    const currentData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!customJson.trim()) return currentPreset.data;
        try {
            const parsed = JSON.parse(customJson);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch  {
        // Fallback
        }
        return currentPreset.data;
    }, [
        customJson,
        currentPreset.data
    ]);
    // Recommended Spec
    const autoSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const rec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$intelligence$2f$src$2f$recommender$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["recommendChartSpec"])(currentData);
        rec.title = currentPreset.name;
        return rec;
    }, [
        currentData,
        currentPreset.name
    ]);
    // Computed Spec
    const computedSpec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (mode === 'auto') return autoSpec;
        return {
            version: '0.1.0',
            type: selectedChartType,
            title: currentPreset.name,
            data: currentData,
            encoding: {
                x: currentPreset.x ? {
                    field: currentPreset.x
                } : undefined,
                y: currentPreset.y ? {
                    field: currentPreset.y
                } : undefined
            },
            config: {
                width: 700,
                height: 360
            }
        };
    }, [
        mode,
        autoSpec,
        selectedChartType,
        currentPreset,
        currentData
    ]);
    const handleSelectPreset = (key)=>{
        setActivePresetKey(key);
        setSelectedChartType(PRESETS[key].type);
        setCustomJson('');
    };
    const handleCopyCode = ()=>{
        const code = `import { AutoChart } from '@vizora/react';\n\n<AutoChart data={surveyData} height={360} flagAnomalies={true} />`;
        navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(()=>setCopiedCode(false), 2000);
    };
    const handleCopySpec = ()=>{
        navigator.clipboard.writeText(JSON.stringify(computedSpec, null, 2));
        setCopiedSpec(true);
        setTimeout(()=>setCopiedSpec(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#ecefea] text-[#1e2a22] font-sans antialiased selection:bg-[#c2872e] selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full bg-[#f7faf5] border-b border-[#1e2a22] sticky top-0 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display-hero text-xl font-bold text-[#1e2a22] tracking-tight",
                                    children: "Vizora"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "hidden md:flex items-center gap-6 font-data-spec text-xs text-[#434844]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#docs",
                                            className: "hover:text-[#1e2a22] transition-colors",
                                            children: "Docs"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#gallery",
                                            className: "hover:text-[#1e2a22] transition-colors",
                                            children: "Gallery"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#playground",
                                            onClick: ()=>setPlaygroundOpen(true),
                                            className: "hover:text-[#1e2a22] transition-colors",
                                            children: "Playground"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#playground",
                            onClick: ()=>setPlaygroundOpen(true),
                            className: "carto-btn-primary px-5 py-2 text-xs",
                            children: "GET STARTED"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-16 md:py-24 border-b border-[#1e2a22]/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-7 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-display-hero italic text-4xl sm:text-5xl md:text-6xl text-[#1e2a22] leading-[1.15] tracking-tight",
                                    children: [
                                        "Give it data.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 28
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "not-italic",
                                            children: "It finds the bearing."
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-doc text-[#434844] text-base md:text-lg max-w-xl leading-relaxed",
                                    children: "The intelligent visualization engine designed for analytical rigor. We treat your data as a landscape to be surveyed, yielding precision cartography rather than mere stylistic charts."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-center gap-4 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#demo",
                                            className: "carto-btn-primary px-6 py-3 text-xs flex items-center gap-2",
                                            children: "INITIALIZE ENGINE"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#docs",
                                            className: "carto-btn-secondary px-6 py-3 text-xs flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-[#1e2a22]",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "square",
                                                        strokeWidth: "1.5",
                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this),
                                                "View Documentation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$CompassDial$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompassDial"], {
                                recommendedType: autoSpec.type,
                                selectedType: mode === 'auto' ? autoSpec.type : selectedChartType,
                                onSelectType: (type)=>{
                                    setSelectedChartType(type);
                                    setMode('explicit');
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20 bg-[#f7faf5]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline-lg text-2xl md:text-3xl text-[#1e2a22]",
                                    children: "The Engine of Insight"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] leading-relaxed text-sm md:text-base",
                                    children: "Our Compass recommendation engine operates on a simple principle: form follows data. By analyzing the shape, cardinality, and distribution of your dataset, it calculates the optimal visualization bearing."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] leading-relaxed text-sm md:text-base",
                                    children: "No more guessing which chart to use. The engine autonomously navigates through a multidimensional space of possibilities, selecting the precise cartographic representation that maximizes analytical clarity."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-[320px] aspect-square bg-[#ecefea]/60 border border-[#1e2a22]/30 carto-grid-bg p-4 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 200 200",
                                    className: "w-full h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "85",
                                            fill: "none",
                                            stroke: "#1e2a22",
                                            strokeWidth: "0.75"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "60",
                                            fill: "none",
                                            stroke: "#6e756a",
                                            strokeWidth: "0.5",
                                            strokeDasharray: "2 3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "35",
                                            fill: "none",
                                            stroke: "rgba(110, 117, 106, 0.2)",
                                            strokeWidth: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "15",
                                            y1: "100",
                                            x2: "185",
                                            y2: "100",
                                            stroke: "#6e756a",
                                            strokeWidth: "0.5",
                                            strokeDasharray: "3 3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "100",
                                            y1: "15",
                                            x2: "100",
                                            y2: "185",
                                            stroke: "#6e756a",
                                            strokeWidth: "0.5",
                                            strokeDasharray: "3 3"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "40",
                                            y1: "40",
                                            x2: "160",
                                            y2: "160",
                                            stroke: "rgba(110, 117, 106, 0.25)",
                                            strokeWidth: "0.5",
                                            strokeDasharray: "2 2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "100",
                                            y1: "100",
                                            x2: "155",
                                            y2: "142",
                                            stroke: "#c2872e",
                                            strokeWidth: "2",
                                            strokeLinecap: "square"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "155",
                                            cy: "142",
                                            r: "4",
                                            fill: "#c2872e",
                                            stroke: "#1e2a22",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "100",
                                            cy: "100",
                                            r: "3",
                                            fill: "#1e2a22"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "demo",
                className: "max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex flex-wrap items-center justify-between gap-3 font-data-spec text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6e756a]",
                                        children: "SURVEY PRESETS:"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    Object.keys(PRESETS).map((key)=>{
                                        const isActive = activePresetKey === key;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelectPreset(key),
                                            className: `px-3 py-1 border transition-all ${isActive ? 'bg-[#1e2a22] text-[#f7faf5] border-[#1e2a22] font-semibold' : 'bg-[#f7faf5] text-[#1e2a22] border-[#6e756a]/30 hover:border-[#1e2a22]'}`,
                                            children: PRESETS[key].name.split('.')[1] || PRESETS[key].name
                                        }, key, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMode(mode === 'auto' ? 'explicit' : 'auto'),
                                    className: "px-3 py-1 bg-[#dee5d7] border border-[#1e2a22] text-[#1e2a22] font-mono text-xs hover:bg-[#c2872e] transition-colors",
                                    children: [
                                        "MODE: ",
                                        mode.toUpperCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "carto-panel bg-[#f7faf5]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 border-b border-[#1e2a22] flex items-center justify-between bg-[#ecefea]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-data-spec text-xs text-[#1e2a22] tracking-wider font-semibold",
                                        children: currentPreset.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-data-spec text-[11px] text-[#1e2a22] px-2.5 py-0.5 border border-[#1e2a22] bg-[#f7faf5]",
                                        children: [
                                            "REC: ",
                                            computedSpec.type.toUpperCase(),
                                            "-A"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 md:p-8 bg-[#f7faf5] flex justify-center items-center overflow-x-auto min-h-[380px]",
                                children: mode === 'auto' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$AutoChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AutoChart"], {
                                    data: currentData,
                                    title: ""
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$react$2f$src$2f$Chart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chart"], {
                                    data: currentData,
                                    type: selectedChartType,
                                    x: currentPreset.x,
                                    y: currentPreset.y,
                                    title: ""
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$components$2f$LegendBand$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LegendBand"], {
                                spec: computedSpec,
                                dataCount: currentData.length
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 329,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20 bg-[#f7faf5]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-2xl mx-auto space-y-4 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-headline-lg text-2xl md:text-3xl text-[#1e2a22]",
                                children: "Surveyor's Precision"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body-ui text-[#434844] text-sm md:text-base leading-relaxed",
                                children: "Every cartographic output is anchored by a deterministic, coordinate-style specification. The Legend Band provides immediate, rigorous context to the surveyor, mapping raw data types to their visual representation without ambiguity."
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl mx-auto carto-panel bg-[#f7faf5] mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 p-3 bg-[#dee5d7] border-b border-[#1e2a22] font-data-spec text-xs font-semibold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "SPEC PROPERTY"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-right",
                                        children: "RENDERED VALUE"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-[#1e2a22]/20 font-data-spec text-xs text-[#1e2a22]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "domain"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right",
                                                children: "[0.0, 100.0]"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "scale_type"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right",
                                                children: "linear_continuous"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#6e756a]",
                                                children: "projection"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-right",
                                                children: "cartesian_2d"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 350,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-3 bg-[#f7faf5] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-data-spec text-[10px] text-[#6e756a] uppercase",
                                        children: "PROFIT ANALYSIS"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-[#ecefea] border border-[#1e2a22]/20 flex items-center justify-center p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 160 60",
                                            className: "w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M 10 40 L 40 30 L 70 50 L 100 20 L 130 35 L 150 15",
                                                    fill: "none",
                                                    stroke: "#1e2a22",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 374,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "97",
                                                    y: "17",
                                                    width: "6",
                                                    height: "6",
                                                    fill: "#c2872e",
                                                    stroke: "#1e2a22",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-data-spec text-[10px] text-[#6e756a] flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "type: line"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "rec: 0.98"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 380,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-3 bg-[#f7faf5] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-data-spec text-[10px] text-[#6e756a] uppercase",
                                        children: "VOLUME DISTRIBUTION"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 386,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-[#ecefea] border border-[#1e2a22]/20 flex items-center justify-center p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 160 60",
                                            className: "w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "15",
                                                    y: "35",
                                                    width: "20",
                                                    height: "25",
                                                    fill: "#1e2a22"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "45",
                                                    y: "15",
                                                    width: "20",
                                                    height: "45",
                                                    fill: "#1e2a22"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "75",
                                                    y: "10",
                                                    width: "20",
                                                    height: "50",
                                                    fill: "#c2872e"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "105",
                                                    y: "28",
                                                    width: "20",
                                                    height: "32",
                                                    fill: "#1e2a22"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "135",
                                                    y: "42",
                                                    width: "20",
                                                    height: "18",
                                                    fill: "#1e2a22"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-data-spec text-[10px] text-[#6e756a] flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "type: bar"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "rec: 0.95"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 398,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel p-3 bg-[#f7faf5] space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-data-spec text-[10px] text-[#6e756a] uppercase",
                                        children: "CLUSTER FREQUENCY"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 404,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-[#ecefea] border border-[#1e2a22]/20 flex items-center justify-center p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 160 60",
                                            className: "w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "120",
                                                    cy: "35",
                                                    r: "15",
                                                    fill: "none",
                                                    stroke: "#c2872e",
                                                    strokeWidth: "0.75",
                                                    strokeDasharray: "2 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "30",
                                                    y: "40",
                                                    width: "4",
                                                    height: "4",
                                                    fill: "#1e2a22"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "50",
                                                    y: "25",
                                                    width: "4",
                                                    height: "4",
                                                    fill: "#1e2a22"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "115",
                                                    y: "32",
                                                    width: "4",
                                                    height: "4",
                                                    fill: "#c2872e"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "122",
                                                    y: "38",
                                                    width: "4",
                                                    height: "4",
                                                    fill: "#c2872e"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "125",
                                                    y: "28",
                                                    width: "4",
                                                    height: "4",
                                                    fill: "#c2872e"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                                    lineNumber: 412,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 406,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-data-spec text-[10px] text-[#6e756a] flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "type: scatter"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "rec: 0.94"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 417,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel bg-[#f7faf5] p-6 carto-grid-bg relative h-64 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 300 160",
                                    className: "w-full h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 20 120 Q 90 20 160 110 T 280 40",
                                            fill: "none",
                                            stroke: "#6e756a",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "160",
                                            cy: "110",
                                            r: "22",
                                            fill: "rgba(214, 80, 43, 0.15)",
                                            stroke: "#d6502b",
                                            strokeWidth: "1.5"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "160",
                                            cy: "110",
                                            r: "6",
                                            fill: "#d6502b"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "160",
                                            y1: "110",
                                            x2: "205",
                                            y2: "70",
                                            stroke: "#d6502b",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "205",
                                            y: "58",
                                            width: "64",
                                            height: "20",
                                            fill: "#f7faf5",
                                            stroke: "#d6502b",
                                            strokeWidth: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                            x: "237",
                                            y: "72",
                                            textAnchor: "middle",
                                            fill: "#d6502b",
                                            fontSize: "10",
                                            fontFamily: "IBM Plex Mono, monospace",
                                            fontWeight: "bold",
                                            children: "DEV > 1.2"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/page.tsx",
                                            lineNumber: 440,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 428,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline-lg text-2xl md:text-3xl text-[#1e2a22]",
                                    children: "Anomalies in the Field"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 449,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] text-sm md:text-base leading-relaxed",
                                    children: "The terrain of data is rarely perfectly smooth. Our 'Flare' detection system continuously surveys the landscape for irregularities, flagging statistical outliers like landmarks on a topographic map."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] text-sm md:text-base leading-relaxed",
                                    children: "These anomalies are highlighted with distinct cartographic markers, ensuring that critical deviations are never lost in the noise of the broader dataset."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 448,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 425,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 424,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20 bg-[#f7faf5]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-headline-lg text-2xl md:text-3xl text-[#1e2a22]",
                                    children: "Technical Integration"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body-ui text-[#434844] text-sm md:text-base leading-relaxed",
                                    children: "The instrument is operated via a precise, minimal API. Feed the coordinate data; the engine derives the optimal cartographic representation autonomously, applying appropriate scales and datum constraints."
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/page.tsx",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "carto-panel bg-[#1e2a22] text-[#ecefea] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2 bg-[#121e17] border-b border-[#ecefea]/20 font-data-spec text-xs text-[#849287] flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "survey_data.tsx"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopyCode,
                                                className: "hover:text-white transition-colors",
                                                children: copiedCode ? '✓ Copied' : 'Copy'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 481,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "p-5 font-data-spec text-xs leading-relaxed overflow-x-auto text-[#dee5d7]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#c2872e]",
                                                children: "import"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 17
                                            }, this),
                                            " { AutoChart } ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#c2872e]",
                                                children: "from"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 88
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#bd822a]",
                                                children: "'@vizora/react'"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 133
                                            }, this),
                                            ";",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 189
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 490,
                                                columnNumber: 195
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#849287]",
                                                children: "// Engine handles auto-generation, datum scaling,"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 106
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#849287]",
                                                children: "// and anomaly detection autonomously."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 95
                                            }, this),
                                            "<",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#c2872e]",
                                                children: "AutoChart"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 493,
                                                columnNumber: 70
                                            }, this),
                                            "  ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#bccabe]",
                                                children: "data"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 29
                                            }, this),
                                            "={surveyData}",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 96
                                            }, this),
                                            "  ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#bccabe]",
                                                children: "height"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 29
                                            }, this),
                                            "={",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#fdba5c]",
                                                children: "360"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 82
                                            }, this),
                                            "}",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 131
                                            }, this),
                                            "  ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#bccabe]",
                                                children: "flagAnomalies"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 29
                                            }, this),
                                            "={",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#fdba5c]",
                                                children: "true"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 89
                                            }, this),
                                            "}",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 496,
                                                columnNumber: 139
                                            }, this),
                                            "  ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#bccabe]",
                                                children: "datumUnits"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 29
                                            }, this),
                                            "=",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#bd822a]",
                                                children: '"0.15"'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 80
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 126
                                            }, this),
                                            "/>"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 478,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/page.tsx",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/page.tsx",
                    lineNumber: 464,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "playground",
                className: "max-w-7xl mx-auto px-6 py-16 md:py-20 border-b border-[#1e2a22]/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-data-spec text-xs text-[#6e756a]",
                                        children: "LIVE EXPERIMENTAL LABORATORY"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-headline-lg text-2xl text-[#1e2a22]",
                                        children: "Interactive Data Playground"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 508,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setPlaygroundOpen(!playgroundOpen),
                                className: "carto-btn-secondary",
                                children: playgroundOpen ? 'Collapse Drawer [-]' : 'Expand Inspector [+]'
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    playgroundOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 carto-panel p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center border-b border-[#1e2a22] pb-2 font-label-caps",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Tabular Data Input (JSON)"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 17
                                            }, this),
                                            customJson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCustomJson(''),
                                                className: "text-[#d6502b] text-xs lowercase",
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 8,
                                        value: customJson,
                                        onChange: (e)=>setCustomJson(e.target.value),
                                        placeholder: `[{"region": "US", "sales": 100}, {"region": "EU", "sales": 80}]`,
                                        className: "w-full bg-[#f7faf5] border border-[#6e756a] p-3 font-data-spec text-xs text-[#1e2a22] outline-none focus:border-[#c2872e]"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 523,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-6 carto-panel p-4 space-y-3 bg-[#f7faf5]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center border-b border-[#1e2a22] pb-2 font-label-caps",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "ChartSpec JSON Output"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 544,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopySpec,
                                                className: "text-[#1e2a22] text-xs font-mono",
                                                children: copiedSpec ? '✓ Copied' : 'Copy Spec'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/page.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 543,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "bg-[#1e2a22] text-[#ecefea] p-3 font-data-spec text-xs overflow-x-auto max-h-[220px]",
                                        children: JSON.stringify(computedSpec, null, 2)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 542,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 506,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-7xl mx-auto px-6 py-12 border-b border-[#1e2a22]/20 text-center space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-data-spec text-xs text-[#6e756a] uppercase tracking-widest",
                        children: "DEPLOYED IN THE FIELD BY"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center gap-10 font-data-spec text-xs text-[#1e2a22] font-semibold tracking-wider opacity-75",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "ACME_CORP"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 564,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "GLOBEX_INC"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SOYUZ_SYSTEMS"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "MASSIVE_DYNAMIC"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "INITECH"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 font-data-spec text-xs text-[#6e756a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "© 1894 GEODETIC VISUALIZATION SYSTEMS. INSTRUMENTAL MINIMALISM."
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 574,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#docs",
                                className: "hover:text-[#1e2a22]",
                                children: "Documentation"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 579,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#changelog",
                                className: "hover:text-[#1e2a22]",
                                children: "Changelog"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 580,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#terms",
                                className: "hover:text-[#1e2a22]",
                                children: "Terms of Survey"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "hover:text-[#1e2a22]",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/page.tsx",
                                lineNumber: 582,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/page.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/page.tsx",
                lineNumber: 573,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/page.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
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

//# sourceMappingURL=_1l5nd24._.js.map
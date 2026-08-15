"use client";

import * as React from "react";
import {
  Chart as VizoraChart,
  AutoChart as VizoraAutoChart,
  ChartContainer as VizoraChartContainer,
  ChartTooltip as VizoraChartTooltip,
  ChartLegend as VizoraChartLegend,
  ChartConfig,
} from "@vizora/react";

export type { ChartConfig };

export const ChartContainer = VizoraChartContainer;
export const ChartTooltip = VizoraChartTooltip;
export const ChartLegend = VizoraChartLegend;
export const Chart = VizoraChart;
export const AutoChart = VizoraAutoChart;

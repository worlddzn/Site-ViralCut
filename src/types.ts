/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Benefit {
  id: string;
  iconName: string;
  text: string;
}

export interface ComparisonItem {
  text: string;
}

export interface LibraryFeature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TargetAudience {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface VideoCategory {
  id: string;
  title: string;
  duration: string;
  tag: string;
  aspectRatio: string;
  videoSimulatorUrl?: string;
  gradient: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

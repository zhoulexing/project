// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/zhoulexing/Documents/项目/project/carbon/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/apps",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'@/layouts/BasicLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/apps",
        "redirect": "/apps/home",
        "exact": true
      },
      {
        "name": "hemo",
        "path": "/apps/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'@/pages/home'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "redirect": "/apps",
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

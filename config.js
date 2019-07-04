var CONFIG = {
 "data": {
  "_lastModified": 1562170250015,
  "hasNameColumn": false,
  "lastModified": 1562170250015,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/FInal of Happiness Index 2012-2017  - Final Final-2.csv",
  "reader": "ext-csv",
  "sheet": "",
  "timeInColumns": true,
  "ddfPath": "./data/FInal of Happiness Index 2012-2017  - Final Final-2.csv"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "Country",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "Country",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 0,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "Happiness Index Score",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "axis_y": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 1,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "HDI",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "0": "#4cd843",
     "1": "#e83739",
     "2": "#ff7f00",
     "3": "#c027d4",
     "4": "#d66425",
     "5": "#0ab8d8",
     "6": "#bcfa83",
     "7": "#ff8684",
     "8": "#ffb04b",
     "9": "#f599f5",
     "10": "#f4f459",
     "11": "#7fb5ed",
     "_default": "#ffb600"
    },
    "paletteLabels": null,
    "scaleType": "ordinal",
    "spaceRef": "entities",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "Country"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "Country"
   },
   "limit": 5000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 0.46,
   "opacitySelectDim": 0.54,
   "select": [
    {
     "Country": "Nepal",
     "labelOffset": [
      0.019,
      -0.02
     ]
    },
    {
     "Country": "China",
     "labelOffset": [
      0.025,
      -0.032
     ]
    },
    {
     "Country": "Pakistan",
     "labelOffset": [
      0.031,
      -0.025
     ]
    },
    {
     "Country": "Rwanda",
     "labelOffset": [
      0.011,
      0.03
     ]
    },
    {
     "Country": "Tanzania",
     "labelOffset": [
      0.027,
      -0.019
     ]
    },
    {
     "Country": "Turkey",
     "labelOffset": [
      0.028,
      -0.038
     ]
    },
    {
     "Country": "Zimbabwe",
     "labelOffset": [
      0.032,
      0.031
     ]
    },
    {
     "Country": "Costa Rica",
     "labelOffset": [
      0.039,
      -0.032
     ]
    },
    {
     "Country": "Japan",
     "labelOffset": [
      0.029,
      -0.049
     ]
    },
    {
     "Country": "Norway"
    },
    {
     "Country": "Switzerland"
    }
   ],
   "size": {
    "allow": {
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "autoconfig": {
     "index": 2,
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0,
     0.65
    ],
    "fixBaseline": 0,
    "scaleType": "ordinal",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "GDP- Per Capita (PPP)",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "size_label": {
    "_important": false,
    "allow": {
     "names": [
      "_default"
     ],
     "scales": [
      "ordinal",
      "linear",
      "log",
      "genericLog",
      "pow"
     ]
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "extent": [
     0.17,
     0.53
    ],
    "fixBaseline": 0,
    "scaleType": "linear",
    "spaceRef": null,
    "syncModels": [],
    "use": "indicator",
    "which": "GDP- Per Capita (PPP)",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 2200,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2017",
   "endBeforeForecast": "2019",
   "endOrigin": null,
   "endSelected": "2017",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": false,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": false,
   "start": "2012",
   "startOrigin": null,
   "startSelected": "2012",
   "step": 1,
   "unit": "year",
   "value": "2017"
  }
 },
 "ui": {
  "adaptMinMaxZoom": false,
  "buttons": [
   "colors",
   "find",
   "zoom",
   "trails",
   "lock",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "decorations": {
    "enabled": true,
    "xAxisGroups": null
   },
   "labels": {
    "dragging": true,
    "removeLabelBox": true
   },
   "lockNonSelected": "2017",
   "margin": {
    "left": 86.85000000000001,
    "top": 0
   },
   "showForecastOverlay": false,
   "superhighlightOnMinimapHover": true,
   "trails": false,
   "whenHovering": {
    "higlightValueX": true,
    "higlightValueY": true,
    "showProjectionLineX": true,
    "showProjectionLineY": true
   }
  },
  "cursorMode": "arrow",
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": false
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "axes",
    "size",
    "colors",
    "label",
    "zoom",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "colors",
    "find",
    "size",
    "zoom",
    "moreoptions"
   ],
   "sidebar": [
    "colors",
    "find",
    "size",
    "zoom"
   ]
  },
  "panWithArrow": false,
  "presentation": false,
  "show_ticks": true,
  "sidebarCollapse": false,
  "splash": false,
  "zoomOnScrolling": false
 },
 "chartType": "BubbleChart"
};
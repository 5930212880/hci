jQuery("#simulation")
.on("click", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .click", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Ellipse_16")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_17" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "9"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_16" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "-15"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_18" ]
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Ellipse_17")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_17" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_16" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_17" ]
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_14")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/256607f7-f80a-405d-b950-4e91ea6ac060"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_7")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/93adc9b4-1cb7-4464-bb78-d94bfcb2c10a"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_13")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/2f196579-398b-4690-abe0-9d1c4d4940a3"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_10")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/955a66e0-7c60-41f9-8b29-78f13e80d90c"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_3")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/b31de7dc-0f47-4319-ab94-d43ca10f64d8"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
} else if(jFirer.is("#s-Image_4")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimNavigation",
"parameter": {
"target": "screens/78916770-54d9-4169-bd93-ea0cee1b53f9"
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("drag", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .drag", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getDirectEventFirer(this);
if(jFirer.is("#s-Ellipse_5")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Group_4" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movewithcursor",
"value": null
},
"containment": false
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("dragend", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .drag", function(event, data) {
jimEvent(event).jimRestoreDrag(jQuery(this));
})
.on("dragend", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .drag", function(event, data) {
jimEvent(event).jimDestroyDrag(jQuery(this));
})
.on("pageload", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .pageload", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Label_31")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimSetValue",
"parameter": {
"target": [ "#s-Label_31" ],
"value": {
"action": "jimConcat",
"parameter": [ {
"action": "jimSubstring",
"parameter": [ {
"action": "jimSystemTime"
},"0","5" ]
}," PM" ]
}
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("swipeleft", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .swipeleft", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Ellipse_16")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_17" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "9"
},
"containment": false
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_16" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movebyoffset",
"value": "-15"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_18" ]
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
})
.on("swiperight", ".s-93adc9b4-1cb7-4464-bb78-d94bfcb2c10a .swiperight", function(event, data) {
var jEvent, jFirer, cases;
if(data === undefined) { data = event; }
jEvent = jimEvent(event);
jFirer = jEvent.getEventFirer();
if(jFirer.is("#s-Ellipse_17")) {
cases = [
{
"blocks": [
{
"actions": [
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_17" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimMove",
"parameter": {
"target": [ "#s-Ellipse_16" ],
"top": {
"type": "nomove"
},
"left": {
"type": "movetoposition",
"value": "26"
},
"containment": false,
"effect": {
"type": "none",
"easing": "linear",
"duration": 200
}
},
"exectype": "serial",
"delay": 0
},
{
"action": "jimShow",
"parameter": {
"target": [ "#s-Panel_17" ]
},
"exectype": "serial",
"delay": 0
}
]
}
],
"exectype": "serial",
"delay": 0
}
];
event.data = data;
jEvent.launchCases(cases);
}
});
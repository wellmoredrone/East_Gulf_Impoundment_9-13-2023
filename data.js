var APP_DATA = {
  "scenes": [
    {
      "id": "0-area-1",
      "name": "Area 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.15296953948210756,
        "pitch": 0.7196126855500751,
        "fov": 1.2867007017959413
      },
      "linkHotspots": [
        {
          "yaw": 0.04511232525021214,
          "pitch": -0.011066331868107682,
          "rotation": 0,
          "target": "1-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-area-2",
      "name": "Area 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.2396871688337683,
        "pitch": 0.738149265132785,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": -1.8660666020052012,
          "pitch": -0.050501218336373555,
          "rotation": 0,
          "target": "0-area-1"
        },
        {
          "yaw": 0.05569243728855433,
          "pitch": 0.032032793300135864,
          "rotation": 0,
          "target": "2-area-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-area-3",
      "name": "Area 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.699829623518376,
        "pitch": 0.8900852244194333,
        "fov": 1.352817585576841
      },
      "linkHotspots": [
        {
          "yaw": -3.0813587882993545,
          "pitch": -0.0008744374974138935,
          "rotation": 0,
          "target": "1-area-2"
        },
        {
          "yaw": -2.3540038785201354,
          "pitch": -0.0353362270569022,
          "rotation": 0,
          "target": "0-area-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "East Gulf Impoundment 9-13-2023",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};

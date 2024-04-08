var myConfig = {
    graphset: [
      {
        shapes: [
          {
            type: "zingchart.maps",
            options: {
              name: "usa",
              style: {
                label: {
                  visible: true
                },
                items: {
                  SD: {
                    "background-color": "#9e9e9e"
                  },
                  TX: {
                    "background-color": "#9e9e9e"
                  },
                  AZ: {
                    "background-color": "#9e9e9e"
                  },
                  OH: {
                    "background-color": "#9e9e9e"
                  },
                  SC: {
                    "background-color": "#9e9e9e"
                  },
                  IL: {
                    "background-color": "#9e9e9e"
                  },
                  GA: {
                    "background-color": "#9e9e9e"
                  },
                  IN: {
                    "background-color": "#9e9e9e"
                  },
                  NC: {
                    "background-color": "#9e9e9e"
                  },
                }
              }
            }
          },
          {
            type: "circle",
            id: "Austin", // id is OPTIONAL
            x: "-97.733330lon", // hook shape based on lon/lat
            y: "30.266666lat", // hook shape based on lon/lat
            map: "usa", // assigning to map name or id is necessary
            size: 9,
            "background-color": "#4dd0e1",
            cursor: "pointer",
            target: "_blank",
            tooltip: {
              backgroundColor: "#ff9800",
              borderColor: "#333",
              borderRadius: 4,
              fontSize: 16,
              text: "Austin, TX"
            }
          },
          {
            type: "circle",
            id: "Amarillo", // id is OPTIONAL
            x: "-101.84527lon", // hook shape based on lon/lat
            y: "35.199165lat", // hook shape based on lon/lat
            map: "usa", // assigning to map name or id is necessary
            size: 9,
            "background-color": "#4dd0e1",
            cursor: "pointer",
            target: "_blank",
            tooltip: {
              backgroundColor: "#ff9800",
              borderColor: "#333",
              borderRadius: 4,
              fontSize: 16,
              text: "Amarillo, TX"
            }
          },
          {
            type: "circle",
            id: "Phoenix",
  
            x: "-112.074036lon",
            y: "33.448376lat",
  
            map: "usa",
            item: "AZ", // <----- this is needed
  
            size: 9,
            "background-color": "#4dd0e1",
            cursor: "pointer",
            target: "_blank",
            tooltip: {
              backgroundColor: "#ff9800",
              borderColor: "#333",
              borderRadius: 4,
              fontSize: 16,
              text: "Phoenix, AZ"
            }
          },
          {
            type: "circle",
            id: "alaska", // id is OPTIONAL
            x: "-149.4937lon", // hook shape based on lon/lat
            y: "64.2008lat", // hook shape based on lon/lat
            map: "usa", // assigning to map name or id is necessary
            item: "AK",
            size: 15,
            "background-color": "#4dd0e1",
            cursor: "pointer",
            target: "_blank",
            tooltip: {
              backgroundColor: "#ff9800",
              borderColor: "#333",
              borderRadius: 4,
              fontSize: 16,
              text: "We're located right in Alaska!"
            }
          }
        ]
      }
    ]
  };
  
  zingchart.loadModules("maps, maps-usa", function() {
    zingchart.render({
      id: "myChart",
      data: myConfig,
      height: "100%",
      width: "100%"
    });
  });
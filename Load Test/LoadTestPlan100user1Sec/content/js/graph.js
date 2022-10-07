/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 15077.0, "minX": 0.0, "maxY": 30995.0, "series": [{"data": [[0.0, 15077.0], [0.1, 15077.0], [0.2, 15077.0], [0.3, 15077.0], [0.4, 15077.0], [0.5, 15077.0], [0.6, 15077.0], [0.7, 15077.0], [0.8, 15077.0], [0.9, 15077.0], [1.0, 15232.0], [1.1, 15232.0], [1.2, 15232.0], [1.3, 15232.0], [1.4, 15232.0], [1.5, 15232.0], [1.6, 15232.0], [1.7, 15232.0], [1.8, 15232.0], [1.9, 15232.0], [2.0, 15494.0], [2.1, 15494.0], [2.2, 15494.0], [2.3, 15494.0], [2.4, 15494.0], [2.5, 15494.0], [2.6, 15494.0], [2.7, 15494.0], [2.8, 15494.0], [2.9, 15494.0], [3.0, 15502.0], [3.1, 15502.0], [3.2, 15502.0], [3.3, 15502.0], [3.4, 15502.0], [3.5, 15502.0], [3.6, 15502.0], [3.7, 15502.0], [3.8, 15502.0], [3.9, 15502.0], [4.0, 15944.0], [4.1, 15944.0], [4.2, 15944.0], [4.3, 15944.0], [4.4, 15944.0], [4.5, 15944.0], [4.6, 15944.0], [4.7, 15944.0], [4.8, 15944.0], [4.9, 15944.0], [5.0, 16080.0], [5.1, 16080.0], [5.2, 16080.0], [5.3, 16080.0], [5.4, 16080.0], [5.5, 16080.0], [5.6, 16080.0], [5.7, 16080.0], [5.8, 16080.0], [5.9, 16080.0], [6.0, 16593.0], [6.1, 16593.0], [6.2, 16593.0], [6.3, 16593.0], [6.4, 16593.0], [6.5, 16593.0], [6.6, 16593.0], [6.7, 16593.0], [6.8, 16593.0], [6.9, 16593.0], [7.0, 16615.0], [7.1, 16615.0], [7.2, 16615.0], [7.3, 16615.0], [7.4, 16615.0], [7.5, 16615.0], [7.6, 16615.0], [7.7, 16615.0], [7.8, 16615.0], [7.9, 16615.0], [8.0, 16634.0], [8.1, 16634.0], [8.2, 16634.0], [8.3, 16634.0], [8.4, 16634.0], [8.5, 16634.0], [8.6, 16634.0], [8.7, 16634.0], [8.8, 16634.0], [8.9, 16634.0], [9.0, 17088.0], [9.1, 17088.0], [9.2, 17088.0], [9.3, 17088.0], [9.4, 17088.0], [9.5, 17088.0], [9.6, 17088.0], [9.7, 17088.0], [9.8, 17088.0], [9.9, 17088.0], [10.0, 17199.0], [10.1, 17199.0], [10.2, 17199.0], [10.3, 17199.0], [10.4, 17199.0], [10.5, 17199.0], [10.6, 17199.0], [10.7, 17199.0], [10.8, 17199.0], [10.9, 17199.0], [11.0, 17374.0], [11.1, 17374.0], [11.2, 17374.0], [11.3, 17374.0], [11.4, 17374.0], [11.5, 17374.0], [11.6, 17374.0], [11.7, 17374.0], [11.8, 17374.0], [11.9, 17374.0], [12.0, 17846.0], [12.1, 17846.0], [12.2, 17846.0], [12.3, 17846.0], [12.4, 17846.0], [12.5, 17846.0], [12.6, 17846.0], [12.7, 17846.0], [12.8, 17846.0], [12.9, 17846.0], [13.0, 17929.0], [13.1, 17929.0], [13.2, 17929.0], [13.3, 17929.0], [13.4, 17929.0], [13.5, 17929.0], [13.6, 17929.0], [13.7, 17929.0], [13.8, 17929.0], [13.9, 17929.0], [14.0, 18196.0], [14.1, 18196.0], [14.2, 18196.0], [14.3, 18196.0], [14.4, 18196.0], [14.5, 18196.0], [14.6, 18196.0], [14.7, 18196.0], [14.8, 18196.0], [14.9, 18196.0], [15.0, 18481.0], [15.1, 18481.0], [15.2, 18481.0], [15.3, 18481.0], [15.4, 18481.0], [15.5, 18481.0], [15.6, 18481.0], [15.7, 18481.0], [15.8, 18481.0], [15.9, 18481.0], [16.0, 18732.0], [16.1, 18732.0], [16.2, 18732.0], [16.3, 18732.0], [16.4, 18732.0], [16.5, 18732.0], [16.6, 18732.0], [16.7, 18732.0], [16.8, 18732.0], [16.9, 18732.0], [17.0, 18839.0], [17.1, 18839.0], [17.2, 18839.0], [17.3, 18839.0], [17.4, 18839.0], [17.5, 18839.0], [17.6, 18839.0], [17.7, 18839.0], [17.8, 18839.0], [17.9, 18839.0], [18.0, 18847.0], [18.1, 18847.0], [18.2, 18847.0], [18.3, 18847.0], [18.4, 18847.0], [18.5, 18847.0], [18.6, 18847.0], [18.7, 18847.0], [18.8, 18847.0], [18.9, 18847.0], [19.0, 19937.0], [19.1, 19937.0], [19.2, 19937.0], [19.3, 19937.0], [19.4, 19937.0], [19.5, 19937.0], [19.6, 19937.0], [19.7, 19937.0], [19.8, 19937.0], [19.9, 19937.0], [20.0, 19992.0], [20.1, 19992.0], [20.2, 19992.0], [20.3, 19992.0], [20.4, 19992.0], [20.5, 19992.0], [20.6, 19992.0], [20.7, 19992.0], [20.8, 19992.0], [20.9, 19992.0], [21.0, 20187.0], [21.1, 20187.0], [21.2, 20187.0], [21.3, 20187.0], [21.4, 20187.0], [21.5, 20187.0], [21.6, 20187.0], [21.7, 20187.0], [21.8, 20187.0], [21.9, 20187.0], [22.0, 20196.0], [22.1, 20196.0], [22.2, 20196.0], [22.3, 20196.0], [22.4, 20196.0], [22.5, 20196.0], [22.6, 20196.0], [22.7, 20196.0], [22.8, 20196.0], [22.9, 20196.0], [23.0, 20384.0], [23.1, 20384.0], [23.2, 20384.0], [23.3, 20384.0], [23.4, 20384.0], [23.5, 20384.0], [23.6, 20384.0], [23.7, 20384.0], [23.8, 20384.0], [23.9, 20384.0], [24.0, 20819.0], [24.1, 20819.0], [24.2, 20819.0], [24.3, 20819.0], [24.4, 20819.0], [24.5, 20819.0], [24.6, 20819.0], [24.7, 20819.0], [24.8, 20819.0], [24.9, 20819.0], [25.0, 21041.0], [25.1, 21041.0], [25.2, 21041.0], [25.3, 21041.0], [25.4, 21041.0], [25.5, 21041.0], [25.6, 21041.0], [25.7, 21041.0], [25.8, 21041.0], [25.9, 21041.0], [26.0, 21087.0], [26.1, 21087.0], [26.2, 21087.0], [26.3, 21087.0], [26.4, 21087.0], [26.5, 21087.0], [26.6, 21087.0], [26.7, 21087.0], [26.8, 21087.0], [26.9, 21087.0], [27.0, 21615.0], [27.1, 21615.0], [27.2, 21615.0], [27.3, 21615.0], [27.4, 21615.0], [27.5, 21615.0], [27.6, 21615.0], [27.7, 21615.0], [27.8, 21615.0], [27.9, 21615.0], [28.0, 21617.0], [28.1, 21617.0], [28.2, 21617.0], [28.3, 21617.0], [28.4, 21617.0], [28.5, 21617.0], [28.6, 21617.0], [28.7, 21617.0], [28.8, 21617.0], [28.9, 21617.0], [29.0, 21994.0], [29.1, 21994.0], [29.2, 21994.0], [29.3, 21994.0], [29.4, 21994.0], [29.5, 21994.0], [29.6, 21994.0], [29.7, 21994.0], [29.8, 21994.0], [29.9, 21994.0], [30.0, 22170.0], [30.1, 22170.0], [30.2, 22170.0], [30.3, 22170.0], [30.4, 22170.0], [30.5, 22170.0], [30.6, 22170.0], [30.7, 22170.0], [30.8, 22170.0], [30.9, 22170.0], [31.0, 22403.0], [31.1, 22403.0], [31.2, 22403.0], [31.3, 22403.0], [31.4, 22403.0], [31.5, 22403.0], [31.6, 22403.0], [31.7, 22403.0], [31.8, 22403.0], [31.9, 22403.0], [32.0, 22972.0], [32.1, 22972.0], [32.2, 22972.0], [32.3, 22972.0], [32.4, 22972.0], [32.5, 22972.0], [32.6, 22972.0], [32.7, 22972.0], [32.8, 22972.0], [32.9, 22972.0], [33.0, 23353.0], [33.1, 23353.0], [33.2, 23353.0], [33.3, 23353.0], [33.4, 23353.0], [33.5, 23353.0], [33.6, 23353.0], [33.7, 23353.0], [33.8, 23353.0], [33.9, 23353.0], [34.0, 24199.0], [34.1, 24199.0], [34.2, 24199.0], [34.3, 24199.0], [34.4, 24199.0], [34.5, 24199.0], [34.6, 24199.0], [34.7, 24199.0], [34.8, 24199.0], [34.9, 24199.0], [35.0, 24393.0], [35.1, 24393.0], [35.2, 24393.0], [35.3, 24393.0], [35.4, 24393.0], [35.5, 24393.0], [35.6, 24393.0], [35.7, 24393.0], [35.8, 24393.0], [35.9, 24393.0], [36.0, 24535.0], [36.1, 24535.0], [36.2, 24535.0], [36.3, 24535.0], [36.4, 24535.0], [36.5, 24535.0], [36.6, 24535.0], [36.7, 24535.0], [36.8, 24535.0], [36.9, 24535.0], [37.0, 24579.0], [37.1, 24579.0], [37.2, 24579.0], [37.3, 24579.0], [37.4, 24579.0], [37.5, 24579.0], [37.6, 24579.0], [37.7, 24579.0], [37.8, 24579.0], [37.9, 24579.0], [38.0, 24695.0], [38.1, 24695.0], [38.2, 24695.0], [38.3, 24695.0], [38.4, 24695.0], [38.5, 24695.0], [38.6, 24695.0], [38.7, 24695.0], [38.8, 24695.0], [38.9, 24695.0], [39.0, 25171.0], [39.1, 25171.0], [39.2, 25171.0], [39.3, 25171.0], [39.4, 25171.0], [39.5, 25171.0], [39.6, 25171.0], [39.7, 25171.0], [39.8, 25171.0], [39.9, 25171.0], [40.0, 25668.0], [40.1, 25668.0], [40.2, 25668.0], [40.3, 25668.0], [40.4, 25668.0], [40.5, 25668.0], [40.6, 25668.0], [40.7, 25668.0], [40.8, 25668.0], [40.9, 25668.0], [41.0, 25722.0], [41.1, 25722.0], [41.2, 25722.0], [41.3, 25722.0], [41.4, 25722.0], [41.5, 25722.0], [41.6, 25722.0], [41.7, 25722.0], [41.8, 25722.0], [41.9, 25722.0], [42.0, 25776.0], [42.1, 25776.0], [42.2, 25776.0], [42.3, 25776.0], [42.4, 25776.0], [42.5, 25776.0], [42.6, 25776.0], [42.7, 25776.0], [42.8, 25776.0], [42.9, 25776.0], [43.0, 25823.0], [43.1, 25823.0], [43.2, 25823.0], [43.3, 25823.0], [43.4, 25823.0], [43.5, 25823.0], [43.6, 25823.0], [43.7, 25823.0], [43.8, 25823.0], [43.9, 25823.0], [44.0, 26406.0], [44.1, 26406.0], [44.2, 26406.0], [44.3, 26406.0], [44.4, 26406.0], [44.5, 26406.0], [44.6, 26406.0], [44.7, 26406.0], [44.8, 26406.0], [44.9, 26406.0], [45.0, 26925.0], [45.1, 26925.0], [45.2, 26925.0], [45.3, 26925.0], [45.4, 26925.0], [45.5, 26925.0], [45.6, 26925.0], [45.7, 26925.0], [45.8, 26925.0], [45.9, 26925.0], [46.0, 27029.0], [46.1, 27029.0], [46.2, 27029.0], [46.3, 27029.0], [46.4, 27029.0], [46.5, 27029.0], [46.6, 27029.0], [46.7, 27029.0], [46.8, 27029.0], [46.9, 27029.0], [47.0, 27167.0], [47.1, 27167.0], [47.2, 27167.0], [47.3, 27167.0], [47.4, 27167.0], [47.5, 27167.0], [47.6, 27167.0], [47.7, 27167.0], [47.8, 27167.0], [47.9, 27167.0], [48.0, 27556.0], [48.1, 27556.0], [48.2, 27556.0], [48.3, 27556.0], [48.4, 27556.0], [48.5, 27556.0], [48.6, 27556.0], [48.7, 27556.0], [48.8, 27556.0], [48.9, 27556.0], [49.0, 27719.0], [49.1, 27719.0], [49.2, 27719.0], [49.3, 27719.0], [49.4, 27719.0], [49.5, 27719.0], [49.6, 27719.0], [49.7, 27719.0], [49.8, 27719.0], [49.9, 27719.0], [50.0, 28388.0], [50.1, 28388.0], [50.2, 28388.0], [50.3, 28388.0], [50.4, 28388.0], [50.5, 28388.0], [50.6, 28388.0], [50.7, 28388.0], [50.8, 28388.0], [50.9, 28388.0], [51.0, 28414.0], [51.1, 28414.0], [51.2, 28414.0], [51.3, 28414.0], [51.4, 28414.0], [51.5, 28414.0], [51.6, 28414.0], [51.7, 28414.0], [51.8, 28414.0], [51.9, 28414.0], [52.0, 28444.0], [52.1, 28444.0], [52.2, 28444.0], [52.3, 28444.0], [52.4, 28444.0], [52.5, 28444.0], [52.6, 28444.0], [52.7, 28444.0], [52.8, 28444.0], [52.9, 28444.0], [53.0, 28507.0], [53.1, 28507.0], [53.2, 28507.0], [53.3, 28507.0], [53.4, 28507.0], [53.5, 28507.0], [53.6, 28507.0], [53.7, 28507.0], [53.8, 28507.0], [53.9, 28507.0], [54.0, 28962.0], [54.1, 28962.0], [54.2, 28962.0], [54.3, 28962.0], [54.4, 28962.0], [54.5, 28962.0], [54.6, 28962.0], [54.7, 28962.0], [54.8, 28962.0], [54.9, 28962.0], [55.0, 29087.0], [55.1, 29087.0], [55.2, 29087.0], [55.3, 29087.0], [55.4, 29087.0], [55.5, 29087.0], [55.6, 29087.0], [55.7, 29087.0], [55.8, 29087.0], [55.9, 29087.0], [56.0, 29136.0], [56.1, 29136.0], [56.2, 29136.0], [56.3, 29136.0], [56.4, 29136.0], [56.5, 29136.0], [56.6, 29136.0], [56.7, 29136.0], [56.8, 29136.0], [56.9, 29136.0], [57.0, 29412.0], [57.1, 29412.0], [57.2, 29412.0], [57.3, 29412.0], [57.4, 29412.0], [57.5, 29412.0], [57.6, 29412.0], [57.7, 29412.0], [57.8, 29412.0], [57.9, 29412.0], [58.0, 29467.0], [58.1, 29467.0], [58.2, 29467.0], [58.3, 29467.0], [58.4, 29467.0], [58.5, 29467.0], [58.6, 29467.0], [58.7, 29467.0], [58.8, 29467.0], [58.9, 29467.0], [59.0, 29595.0], [59.1, 29595.0], [59.2, 29595.0], [59.3, 29595.0], [59.4, 29595.0], [59.5, 29595.0], [59.6, 29595.0], [59.7, 29595.0], [59.8, 29595.0], [59.9, 29595.0], [60.0, 29626.0], [60.1, 29626.0], [60.2, 29626.0], [60.3, 29626.0], [60.4, 29626.0], [60.5, 29626.0], [60.6, 29626.0], [60.7, 29626.0], [60.8, 29626.0], [60.9, 29626.0], [61.0, 29643.0], [61.1, 29643.0], [61.2, 29643.0], [61.3, 29643.0], [61.4, 29643.0], [61.5, 29643.0], [61.6, 29643.0], [61.7, 29643.0], [61.8, 29643.0], [61.9, 29643.0], [62.0, 29647.0], [62.1, 29647.0], [62.2, 29647.0], [62.3, 29647.0], [62.4, 29647.0], [62.5, 29647.0], [62.6, 29647.0], [62.7, 29647.0], [62.8, 29647.0], [62.9, 29647.0], [63.0, 29670.0], [63.1, 29670.0], [63.2, 29670.0], [63.3, 29670.0], [63.4, 29670.0], [63.5, 29670.0], [63.6, 29670.0], [63.7, 29670.0], [63.8, 29670.0], [63.9, 29670.0], [64.0, 29719.0], [64.1, 29719.0], [64.2, 29719.0], [64.3, 29719.0], [64.4, 29719.0], [64.5, 29719.0], [64.6, 29719.0], [64.7, 29719.0], [64.8, 29719.0], [64.9, 29719.0], [65.0, 29730.0], [65.1, 29730.0], [65.2, 29730.0], [65.3, 29730.0], [65.4, 29730.0], [65.5, 29730.0], [65.6, 29730.0], [65.7, 29730.0], [65.8, 29730.0], [65.9, 29730.0], [66.0, 29766.0], [66.1, 29766.0], [66.2, 29766.0], [66.3, 29766.0], [66.4, 29766.0], [66.5, 29766.0], [66.6, 29766.0], [66.7, 29766.0], [66.8, 29766.0], [66.9, 29766.0], [67.0, 29865.0], [67.1, 29865.0], [67.2, 29865.0], [67.3, 29865.0], [67.4, 29865.0], [67.5, 29865.0], [67.6, 29865.0], [67.7, 29865.0], [67.8, 29865.0], [67.9, 29865.0], [68.0, 29919.0], [68.1, 29919.0], [68.2, 29919.0], [68.3, 29919.0], [68.4, 29919.0], [68.5, 29919.0], [68.6, 29919.0], [68.7, 29919.0], [68.8, 29919.0], [68.9, 29919.0], [69.0, 29943.0], [69.1, 29943.0], [69.2, 29943.0], [69.3, 29943.0], [69.4, 29943.0], [69.5, 29943.0], [69.6, 29943.0], [69.7, 29943.0], [69.8, 29943.0], [69.9, 29943.0], [70.0, 29980.0], [70.1, 29980.0], [70.2, 29980.0], [70.3, 29980.0], [70.4, 29980.0], [70.5, 29980.0], [70.6, 29980.0], [70.7, 29980.0], [70.8, 29980.0], [70.9, 29980.0], [71.0, 29988.0], [71.1, 29988.0], [71.2, 29988.0], [71.3, 29988.0], [71.4, 29988.0], [71.5, 29988.0], [71.6, 29988.0], [71.7, 29988.0], [71.8, 29988.0], [71.9, 29988.0], [72.0, 29995.0], [72.1, 29995.0], [72.2, 29995.0], [72.3, 29995.0], [72.4, 29995.0], [72.5, 29995.0], [72.6, 29995.0], [72.7, 29995.0], [72.8, 29995.0], [72.9, 29995.0], [73.0, 29999.0], [73.1, 29999.0], [73.2, 29999.0], [73.3, 29999.0], [73.4, 29999.0], [73.5, 29999.0], [73.6, 29999.0], [73.7, 29999.0], [73.8, 29999.0], [73.9, 29999.0], [74.0, 30005.0], [74.1, 30005.0], [74.2, 30005.0], [74.3, 30005.0], [74.4, 30005.0], [74.5, 30005.0], [74.6, 30005.0], [74.7, 30005.0], [74.8, 30005.0], [74.9, 30005.0], [75.0, 30039.0], [75.1, 30039.0], [75.2, 30039.0], [75.3, 30039.0], [75.4, 30039.0], [75.5, 30039.0], [75.6, 30039.0], [75.7, 30039.0], [75.8, 30039.0], [75.9, 30039.0], [76.0, 30055.0], [76.1, 30055.0], [76.2, 30055.0], [76.3, 30055.0], [76.4, 30055.0], [76.5, 30055.0], [76.6, 30055.0], [76.7, 30055.0], [76.8, 30055.0], [76.9, 30055.0], [77.0, 30059.0], [77.1, 30059.0], [77.2, 30059.0], [77.3, 30059.0], [77.4, 30059.0], [77.5, 30059.0], [77.6, 30059.0], [77.7, 30059.0], [77.8, 30059.0], [77.9, 30059.0], [78.0, 30157.0], [78.1, 30157.0], [78.2, 30157.0], [78.3, 30157.0], [78.4, 30157.0], [78.5, 30157.0], [78.6, 30157.0], [78.7, 30157.0], [78.8, 30157.0], [78.9, 30157.0], [79.0, 30182.0], [79.1, 30182.0], [79.2, 30182.0], [79.3, 30182.0], [79.4, 30182.0], [79.5, 30182.0], [79.6, 30182.0], [79.7, 30182.0], [79.8, 30182.0], [79.9, 30182.0], [80.0, 30234.0], [80.1, 30234.0], [80.2, 30234.0], [80.3, 30234.0], [80.4, 30234.0], [80.5, 30234.0], [80.6, 30234.0], [80.7, 30234.0], [80.8, 30234.0], [80.9, 30234.0], [81.0, 30238.0], [81.1, 30238.0], [81.2, 30238.0], [81.3, 30238.0], [81.4, 30238.0], [81.5, 30238.0], [81.6, 30238.0], [81.7, 30238.0], [81.8, 30238.0], [81.9, 30238.0], [82.0, 30266.0], [82.1, 30266.0], [82.2, 30266.0], [82.3, 30266.0], [82.4, 30266.0], [82.5, 30266.0], [82.6, 30266.0], [82.7, 30266.0], [82.8, 30266.0], [82.9, 30266.0], [83.0, 30333.0], [83.1, 30333.0], [83.2, 30333.0], [83.3, 30333.0], [83.4, 30333.0], [83.5, 30333.0], [83.6, 30333.0], [83.7, 30333.0], [83.8, 30333.0], [83.9, 30333.0], [84.0, 30336.0], [84.1, 30336.0], [84.2, 30336.0], [84.3, 30336.0], [84.4, 30336.0], [84.5, 30336.0], [84.6, 30336.0], [84.7, 30336.0], [84.8, 30336.0], [84.9, 30336.0], [85.0, 30354.0], [85.1, 30354.0], [85.2, 30354.0], [85.3, 30354.0], [85.4, 30354.0], [85.5, 30354.0], [85.6, 30354.0], [85.7, 30354.0], [85.8, 30354.0], [85.9, 30354.0], [86.0, 30364.0], [86.1, 30364.0], [86.2, 30364.0], [86.3, 30364.0], [86.4, 30364.0], [86.5, 30364.0], [86.6, 30364.0], [86.7, 30364.0], [86.8, 30364.0], [86.9, 30364.0], [87.0, 30383.0], [87.1, 30383.0], [87.2, 30383.0], [87.3, 30383.0], [87.4, 30383.0], [87.5, 30383.0], [87.6, 30383.0], [87.7, 30383.0], [87.8, 30383.0], [87.9, 30383.0], [88.0, 30394.0], [88.1, 30394.0], [88.2, 30394.0], [88.3, 30394.0], [88.4, 30394.0], [88.5, 30394.0], [88.6, 30394.0], [88.7, 30394.0], [88.8, 30394.0], [88.9, 30394.0], [89.0, 30463.0], [89.1, 30463.0], [89.2, 30463.0], [89.3, 30463.0], [89.4, 30463.0], [89.5, 30463.0], [89.6, 30463.0], [89.7, 30463.0], [89.8, 30463.0], [89.9, 30463.0], [90.0, 30511.0], [90.1, 30511.0], [90.2, 30511.0], [90.3, 30511.0], [90.4, 30511.0], [90.5, 30511.0], [90.6, 30511.0], [90.7, 30511.0], [90.8, 30511.0], [90.9, 30511.0], [91.0, 30519.0], [91.1, 30519.0], [91.2, 30519.0], [91.3, 30519.0], [91.4, 30519.0], [91.5, 30519.0], [91.6, 30519.0], [91.7, 30519.0], [91.8, 30519.0], [91.9, 30519.0], [92.0, 30573.0], [92.1, 30573.0], [92.2, 30573.0], [92.3, 30573.0], [92.4, 30573.0], [92.5, 30573.0], [92.6, 30573.0], [92.7, 30573.0], [92.8, 30573.0], [92.9, 30573.0], [93.0, 30676.0], [93.1, 30676.0], [93.2, 30676.0], [93.3, 30676.0], [93.4, 30676.0], [93.5, 30676.0], [93.6, 30676.0], [93.7, 30676.0], [93.8, 30676.0], [93.9, 30676.0], [94.0, 30739.0], [94.1, 30739.0], [94.2, 30739.0], [94.3, 30739.0], [94.4, 30739.0], [94.5, 30739.0], [94.6, 30739.0], [94.7, 30739.0], [94.8, 30739.0], [94.9, 30739.0], [95.0, 30745.0], [95.1, 30745.0], [95.2, 30745.0], [95.3, 30745.0], [95.4, 30745.0], [95.5, 30745.0], [95.6, 30745.0], [95.7, 30745.0], [95.8, 30745.0], [95.9, 30745.0], [96.0, 30791.0], [96.1, 30791.0], [96.2, 30791.0], [96.3, 30791.0], [96.4, 30791.0], [96.5, 30791.0], [96.6, 30791.0], [96.7, 30791.0], [96.8, 30791.0], [96.9, 30791.0], [97.0, 30858.0], [97.1, 30858.0], [97.2, 30858.0], [97.3, 30858.0], [97.4, 30858.0], [97.5, 30858.0], [97.6, 30858.0], [97.7, 30858.0], [97.8, 30858.0], [97.9, 30858.0], [98.0, 30969.0], [98.1, 30969.0], [98.2, 30969.0], [98.3, 30969.0], [98.4, 30969.0], [98.5, 30969.0], [98.6, 30969.0], [98.7, 30969.0], [98.8, 30969.0], [98.9, 30969.0], [99.0, 30995.0], [99.1, 30995.0], [99.2, 30995.0], [99.3, 30995.0], [99.4, 30995.0], [99.5, 30995.0], [99.6, 30995.0], [99.7, 30995.0], [99.8, 30995.0], [99.9, 30995.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 15000.0, "maxY": 6.0, "series": [{"data": [[15200.0, 1.0], [15000.0, 1.0], [15400.0, 1.0], [15500.0, 1.0], [15900.0, 1.0], [16000.0, 1.0], [16500.0, 1.0], [16600.0, 2.0], [17000.0, 1.0], [17300.0, 1.0], [17100.0, 1.0], [17900.0, 1.0], [17800.0, 1.0], [18100.0, 1.0], [18400.0, 1.0], [18700.0, 1.0], [18800.0, 2.0], [19900.0, 2.0], [20100.0, 2.0], [20300.0, 1.0], [20800.0, 1.0], [21000.0, 2.0], [21900.0, 1.0], [21600.0, 2.0], [22100.0, 1.0], [22400.0, 1.0], [23300.0, 1.0], [22900.0, 1.0], [24100.0, 1.0], [24300.0, 1.0], [24500.0, 2.0], [24600.0, 1.0], [25100.0, 1.0], [25600.0, 1.0], [25700.0, 2.0], [25800.0, 1.0], [26400.0, 1.0], [27000.0, 1.0], [26900.0, 1.0], [27500.0, 1.0], [27100.0, 1.0], [27700.0, 1.0], [28300.0, 1.0], [28500.0, 1.0], [28400.0, 2.0], [29000.0, 1.0], [29100.0, 1.0], [28900.0, 1.0], [29600.0, 4.0], [29500.0, 1.0], [29400.0, 2.0], [29900.0, 6.0], [29700.0, 3.0], [30000.0, 4.0], [30100.0, 2.0], [30300.0, 6.0], [30400.0, 1.0], [30200.0, 3.0], [29800.0, 1.0], [30500.0, 3.0], [30600.0, 1.0], [30700.0, 3.0], [30900.0, 2.0], [30800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 30900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 100.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 46.532608695652165, "minX": 1.65985638E12, "maxY": 96.5, "series": [{"data": [[1.65985644E12, 46.532608695652165], [1.65985638E12, 96.5]], "isOverall": false, "label": "ThreadGroup100user1Sec", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65985644E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 15077.0, "minX": 2.0, "maxY": 30995.0, "series": [{"data": [[2.0, 30374.0], [3.0, 30995.0], [4.0, 30745.0], [5.0, 30463.0], [6.0, 30858.0], [7.0, 30969.0], [8.0, 30519.0], [9.0, 30364.0], [10.0, 30676.0], [11.0, 29988.0], [12.0, 30157.0], [13.0, 30739.0], [14.0, 30238.0], [15.0, 30573.0], [16.0, 29980.0], [17.0, 30791.0], [18.0, 30383.0], [19.0, 30234.0], [20.0, 30511.0], [21.0, 29626.0], [22.0, 29919.0], [23.0, 29865.0], [24.0, 30266.0], [25.0, 30333.0], [26.0, 30336.0], [27.0, 29719.0], [29.0, 30182.0], [30.0, 29793.0], [31.0, 29670.0], [33.0, 29467.0], [32.0, 29412.0], [35.0, 30059.0], [34.0, 29999.0], [37.0, 29730.0], [36.0, 30055.0], [39.0, 29595.0], [38.0, 29995.0], [41.0, 30039.0], [40.0, 29766.0], [43.0, 29647.0], [42.0, 30005.0], [45.0, 29136.0], [44.0, 28962.0], [47.0, 28444.0], [46.0, 29087.0], [49.0, 28507.0], [48.0, 28414.0], [51.0, 27719.0], [50.0, 28388.0], [53.0, 27556.0], [52.0, 27167.0], [55.0, 27029.0], [54.0, 26925.0], [57.0, 25823.0], [56.0, 26406.0], [59.0, 25722.0], [58.0, 25776.0], [61.0, 25171.0], [60.0, 25668.0], [63.0, 24695.0], [62.0, 24579.0], [67.0, 22972.0], [66.0, 24199.0], [65.0, 24393.0], [64.0, 24535.0], [71.0, 21617.0], [70.0, 22170.0], [69.0, 22403.0], [68.0, 23353.0], [75.0, 21041.0], [74.0, 21087.0], [73.0, 21994.0], [72.0, 21615.0], [79.0, 19992.0], [78.0, 20384.0], [77.0, 20187.0], [76.0, 20819.0], [83.0, 18481.0], [82.0, 18839.0], [81.0, 19937.0], [80.0, 20196.0], [87.0, 17846.0], [86.0, 18196.0], [85.0, 18732.0], [84.0, 18847.0], [91.0, 16615.0], [90.0, 17374.0], [89.0, 17199.0], [88.0, 17929.0], [95.0, 16593.0], [94.0, 16080.0], [93.0, 16634.0], [92.0, 17088.0], [99.0, 15494.0], [98.0, 15077.0], [97.0, 15502.0], [96.0, 15944.0], [100.0, 15232.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.529999999999994, 25549.719999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.65985638E12, "maxY": 4493.65, "series": [{"data": [[1.65985644E12, 4493.65], [1.65985638E12, 376.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65985644E12, 0.0], [1.65985638E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65985644E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 15819.5, "minX": 1.65985638E12, "maxY": 26395.82608695653, "series": [{"data": [[1.65985644E12, 26395.82608695653], [1.65985638E12, 15819.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65985644E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.65985638E12, "maxY": 4.9E-324, "series": [{"data": [[1.65985644E12, 0.0], [1.65985638E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65985644E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 15819.5, "minX": 1.65985638E12, "maxY": 26395.53260869566, "series": [{"data": [[1.65985644E12, 26395.53260869566], [1.65985638E12, 15819.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65985644E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 20191.5, "minX": 3.0, "maxY": 30604.0, "series": [{"data": [[4.0, 20191.5], [36.0, 30047.0], [5.0, 28414.0], [3.0, 22972.0], [6.0, 30604.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 3.0, "maxY": 4.9E-324, "series": [{"data": [[4.0, 0.0], [36.0, 0.0], [5.0, 0.0], [3.0, 0.0], [6.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 36.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.65985638E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.65985638E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65985638E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.65985638E12, "maxY": 1.4166666666666667, "series": [{"data": [[1.65985644E12, 0.11666666666666667]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.65985644E12, 1.4166666666666667], [1.65985638E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65985644E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.65985638E12, "maxY": 1.5333333333333334, "series": [{"data": [[1.65985644E12, 1.5333333333333334], [1.65985638E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65985644E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.65985638E12, "maxY": 1.5333333333333334, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65985644E12, 1.5333333333333334], [1.65985638E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65985644E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


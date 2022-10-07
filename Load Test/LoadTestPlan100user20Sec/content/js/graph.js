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
        data: {"result": {"minY": 3576.0, "minX": 0.0, "maxY": 23849.0, "series": [{"data": [[0.0, 3576.0], [0.1, 3576.0], [0.2, 3576.0], [0.3, 3576.0], [0.4, 3576.0], [0.5, 3576.0], [0.6, 3576.0], [0.7, 3576.0], [0.8, 3576.0], [0.9, 3576.0], [1.0, 4226.0], [1.1, 4226.0], [1.2, 4226.0], [1.3, 4226.0], [1.4, 4226.0], [1.5, 4226.0], [1.6, 4226.0], [1.7, 4226.0], [1.8, 4226.0], [1.9, 4226.0], [2.0, 4343.0], [2.1, 4343.0], [2.2, 4343.0], [2.3, 4343.0], [2.4, 4343.0], [2.5, 4343.0], [2.6, 4343.0], [2.7, 4343.0], [2.8, 4343.0], [2.9, 4343.0], [3.0, 4354.0], [3.1, 4354.0], [3.2, 4354.0], [3.3, 4354.0], [3.4, 4354.0], [3.5, 4354.0], [3.6, 4354.0], [3.7, 4354.0], [3.8, 4354.0], [3.9, 4354.0], [4.0, 4462.0], [4.1, 4462.0], [4.2, 4462.0], [4.3, 4462.0], [4.4, 4462.0], [4.5, 4462.0], [4.6, 4462.0], [4.7, 4462.0], [4.8, 4462.0], [4.9, 4462.0], [5.0, 4762.0], [5.1, 4762.0], [5.2, 4762.0], [5.3, 4762.0], [5.4, 4762.0], [5.5, 4762.0], [5.6, 4762.0], [5.7, 4762.0], [5.8, 4762.0], [5.9, 4762.0], [6.0, 5314.0], [6.1, 5314.0], [6.2, 5314.0], [6.3, 5314.0], [6.4, 5314.0], [6.5, 5314.0], [6.6, 5314.0], [6.7, 5314.0], [6.8, 5314.0], [6.9, 5314.0], [7.0, 5326.0], [7.1, 5326.0], [7.2, 5326.0], [7.3, 5326.0], [7.4, 5326.0], [7.5, 5326.0], [7.6, 5326.0], [7.7, 5326.0], [7.8, 5326.0], [7.9, 5326.0], [8.0, 5360.0], [8.1, 5360.0], [8.2, 5360.0], [8.3, 5360.0], [8.4, 5360.0], [8.5, 5360.0], [8.6, 5360.0], [8.7, 5360.0], [8.8, 5360.0], [8.9, 5360.0], [9.0, 5566.0], [9.1, 5566.0], [9.2, 5566.0], [9.3, 5566.0], [9.4, 5566.0], [9.5, 5566.0], [9.6, 5566.0], [9.7, 5566.0], [9.8, 5566.0], [9.9, 5566.0], [10.0, 6001.0], [10.1, 6001.0], [10.2, 6001.0], [10.3, 6001.0], [10.4, 6001.0], [10.5, 6001.0], [10.6, 6001.0], [10.7, 6001.0], [10.8, 6001.0], [10.9, 6001.0], [11.0, 6020.0], [11.1, 6020.0], [11.2, 6020.0], [11.3, 6020.0], [11.4, 6020.0], [11.5, 6020.0], [11.6, 6020.0], [11.7, 6020.0], [11.8, 6020.0], [11.9, 6020.0], [12.0, 6121.0], [12.1, 6121.0], [12.2, 6121.0], [12.3, 6121.0], [12.4, 6121.0], [12.5, 6121.0], [12.6, 6121.0], [12.7, 6121.0], [12.8, 6121.0], [12.9, 6121.0], [13.0, 6144.0], [13.1, 6144.0], [13.2, 6144.0], [13.3, 6144.0], [13.4, 6144.0], [13.5, 6144.0], [13.6, 6144.0], [13.7, 6144.0], [13.8, 6144.0], [13.9, 6144.0], [14.0, 6146.0], [14.1, 6146.0], [14.2, 6146.0], [14.3, 6146.0], [14.4, 6146.0], [14.5, 6146.0], [14.6, 6146.0], [14.7, 6146.0], [14.8, 6146.0], [14.9, 6146.0], [15.0, 6162.0], [15.1, 6162.0], [15.2, 6162.0], [15.3, 6162.0], [15.4, 6162.0], [15.5, 6162.0], [15.6, 6162.0], [15.7, 6162.0], [15.8, 6162.0], [15.9, 6162.0], [16.0, 6204.0], [16.1, 6204.0], [16.2, 6204.0], [16.3, 6204.0], [16.4, 6204.0], [16.5, 6204.0], [16.6, 6204.0], [16.7, 6204.0], [16.8, 6204.0], [16.9, 6204.0], [17.0, 6204.0], [17.1, 6204.0], [17.2, 6204.0], [17.3, 6204.0], [17.4, 6204.0], [17.5, 6204.0], [17.6, 6204.0], [17.7, 6204.0], [17.8, 6204.0], [17.9, 6204.0], [18.0, 6293.0], [18.1, 6293.0], [18.2, 6293.0], [18.3, 6293.0], [18.4, 6293.0], [18.5, 6293.0], [18.6, 6293.0], [18.7, 6293.0], [18.8, 6293.0], [18.9, 6293.0], [19.0, 6527.0], [19.1, 6527.0], [19.2, 6527.0], [19.3, 6527.0], [19.4, 6527.0], [19.5, 6527.0], [19.6, 6527.0], [19.7, 6527.0], [19.8, 6527.0], [19.9, 6527.0], [20.0, 6538.0], [20.1, 6538.0], [20.2, 6538.0], [20.3, 6538.0], [20.4, 6538.0], [20.5, 6538.0], [20.6, 6538.0], [20.7, 6538.0], [20.8, 6538.0], [20.9, 6538.0], [21.0, 6742.0], [21.1, 6742.0], [21.2, 6742.0], [21.3, 6742.0], [21.4, 6742.0], [21.5, 6742.0], [21.6, 6742.0], [21.7, 6742.0], [21.8, 6742.0], [21.9, 6742.0], [22.0, 6754.0], [22.1, 6754.0], [22.2, 6754.0], [22.3, 6754.0], [22.4, 6754.0], [22.5, 6754.0], [22.6, 6754.0], [22.7, 6754.0], [22.8, 6754.0], [22.9, 6754.0], [23.0, 6799.0], [23.1, 6799.0], [23.2, 6799.0], [23.3, 6799.0], [23.4, 6799.0], [23.5, 6799.0], [23.6, 6799.0], [23.7, 6799.0], [23.8, 6799.0], [23.9, 6799.0], [24.0, 7158.0], [24.1, 7158.0], [24.2, 7158.0], [24.3, 7158.0], [24.4, 7158.0], [24.5, 7158.0], [24.6, 7158.0], [24.7, 7158.0], [24.8, 7158.0], [24.9, 7158.0], [25.0, 7455.0], [25.1, 7455.0], [25.2, 7455.0], [25.3, 7455.0], [25.4, 7455.0], [25.5, 7455.0], [25.6, 7455.0], [25.7, 7455.0], [25.8, 7455.0], [25.9, 7455.0], [26.0, 7528.0], [26.1, 7528.0], [26.2, 7528.0], [26.3, 7528.0], [26.4, 7528.0], [26.5, 7528.0], [26.6, 7528.0], [26.7, 7528.0], [26.8, 7528.0], [26.9, 7528.0], [27.0, 7635.0], [27.1, 7635.0], [27.2, 7635.0], [27.3, 7635.0], [27.4, 7635.0], [27.5, 7635.0], [27.6, 7635.0], [27.7, 7635.0], [27.8, 7635.0], [27.9, 7635.0], [28.0, 7673.0], [28.1, 7673.0], [28.2, 7673.0], [28.3, 7673.0], [28.4, 7673.0], [28.5, 7673.0], [28.6, 7673.0], [28.7, 7673.0], [28.8, 7673.0], [28.9, 7673.0], [29.0, 7826.0], [29.1, 7826.0], [29.2, 7826.0], [29.3, 7826.0], [29.4, 7826.0], [29.5, 7826.0], [29.6, 7826.0], [29.7, 7826.0], [29.8, 7826.0], [29.9, 7826.0], [30.0, 7971.0], [30.1, 7971.0], [30.2, 7971.0], [30.3, 7971.0], [30.4, 7971.0], [30.5, 7971.0], [30.6, 7971.0], [30.7, 7971.0], [30.8, 7971.0], [30.9, 7971.0], [31.0, 8350.0], [31.1, 8350.0], [31.2, 8350.0], [31.3, 8350.0], [31.4, 8350.0], [31.5, 8350.0], [31.6, 8350.0], [31.7, 8350.0], [31.8, 8350.0], [31.9, 8350.0], [32.0, 8635.0], [32.1, 8635.0], [32.2, 8635.0], [32.3, 8635.0], [32.4, 8635.0], [32.5, 8635.0], [32.6, 8635.0], [32.7, 8635.0], [32.8, 8635.0], [32.9, 8635.0], [33.0, 8848.0], [33.1, 8848.0], [33.2, 8848.0], [33.3, 8848.0], [33.4, 8848.0], [33.5, 8848.0], [33.6, 8848.0], [33.7, 8848.0], [33.8, 8848.0], [33.9, 8848.0], [34.0, 9005.0], [34.1, 9005.0], [34.2, 9005.0], [34.3, 9005.0], [34.4, 9005.0], [34.5, 9005.0], [34.6, 9005.0], [34.7, 9005.0], [34.8, 9005.0], [34.9, 9005.0], [35.0, 9087.0], [35.1, 9087.0], [35.2, 9087.0], [35.3, 9087.0], [35.4, 9087.0], [35.5, 9087.0], [35.6, 9087.0], [35.7, 9087.0], [35.8, 9087.0], [35.9, 9087.0], [36.0, 9321.0], [36.1, 9321.0], [36.2, 9321.0], [36.3, 9321.0], [36.4, 9321.0], [36.5, 9321.0], [36.6, 9321.0], [36.7, 9321.0], [36.8, 9321.0], [36.9, 9321.0], [37.0, 9518.0], [37.1, 9518.0], [37.2, 9518.0], [37.3, 9518.0], [37.4, 9518.0], [37.5, 9518.0], [37.6, 9518.0], [37.7, 9518.0], [37.8, 9518.0], [37.9, 9518.0], [38.0, 9598.0], [38.1, 9598.0], [38.2, 9598.0], [38.3, 9598.0], [38.4, 9598.0], [38.5, 9598.0], [38.6, 9598.0], [38.7, 9598.0], [38.8, 9598.0], [38.9, 9598.0], [39.0, 9659.0], [39.1, 9659.0], [39.2, 9659.0], [39.3, 9659.0], [39.4, 9659.0], [39.5, 9659.0], [39.6, 9659.0], [39.7, 9659.0], [39.8, 9659.0], [39.9, 9659.0], [40.0, 10105.0], [40.1, 10105.0], [40.2, 10105.0], [40.3, 10105.0], [40.4, 10105.0], [40.5, 10105.0], [40.6, 10105.0], [40.7, 10105.0], [40.8, 10105.0], [40.9, 10105.0], [41.0, 10179.0], [41.1, 10179.0], [41.2, 10179.0], [41.3, 10179.0], [41.4, 10179.0], [41.5, 10179.0], [41.6, 10179.0], [41.7, 10179.0], [41.8, 10179.0], [41.9, 10179.0], [42.0, 10301.0], [42.1, 10301.0], [42.2, 10301.0], [42.3, 10301.0], [42.4, 10301.0], [42.5, 10301.0], [42.6, 10301.0], [42.7, 10301.0], [42.8, 10301.0], [42.9, 10301.0], [43.0, 10790.0], [43.1, 10790.0], [43.2, 10790.0], [43.3, 10790.0], [43.4, 10790.0], [43.5, 10790.0], [43.6, 10790.0], [43.7, 10790.0], [43.8, 10790.0], [43.9, 10790.0], [44.0, 10873.0], [44.1, 10873.0], [44.2, 10873.0], [44.3, 10873.0], [44.4, 10873.0], [44.5, 10873.0], [44.6, 10873.0], [44.7, 10873.0], [44.8, 10873.0], [44.9, 10873.0], [45.0, 10927.0], [45.1, 10927.0], [45.2, 10927.0], [45.3, 10927.0], [45.4, 10927.0], [45.5, 10927.0], [45.6, 10927.0], [45.7, 10927.0], [45.8, 10927.0], [45.9, 10927.0], [46.0, 11041.0], [46.1, 11041.0], [46.2, 11041.0], [46.3, 11041.0], [46.4, 11041.0], [46.5, 11041.0], [46.6, 11041.0], [46.7, 11041.0], [46.8, 11041.0], [46.9, 11041.0], [47.0, 11225.0], [47.1, 11225.0], [47.2, 11225.0], [47.3, 11225.0], [47.4, 11225.0], [47.5, 11225.0], [47.6, 11225.0], [47.7, 11225.0], [47.8, 11225.0], [47.9, 11225.0], [48.0, 11417.0], [48.1, 11417.0], [48.2, 11417.0], [48.3, 11417.0], [48.4, 11417.0], [48.5, 11417.0], [48.6, 11417.0], [48.7, 11417.0], [48.8, 11417.0], [48.9, 11417.0], [49.0, 11762.0], [49.1, 11762.0], [49.2, 11762.0], [49.3, 11762.0], [49.4, 11762.0], [49.5, 11762.0], [49.6, 11762.0], [49.7, 11762.0], [49.8, 11762.0], [49.9, 11762.0], [50.0, 12148.0], [50.1, 12148.0], [50.2, 12148.0], [50.3, 12148.0], [50.4, 12148.0], [50.5, 12148.0], [50.6, 12148.0], [50.7, 12148.0], [50.8, 12148.0], [50.9, 12148.0], [51.0, 12227.0], [51.1, 12227.0], [51.2, 12227.0], [51.3, 12227.0], [51.4, 12227.0], [51.5, 12227.0], [51.6, 12227.0], [51.7, 12227.0], [51.8, 12227.0], [51.9, 12227.0], [52.0, 13351.0], [52.1, 13351.0], [52.2, 13351.0], [52.3, 13351.0], [52.4, 13351.0], [52.5, 13351.0], [52.6, 13351.0], [52.7, 13351.0], [52.8, 13351.0], [52.9, 13351.0], [53.0, 13744.0], [53.1, 13744.0], [53.2, 13744.0], [53.3, 13744.0], [53.4, 13744.0], [53.5, 13744.0], [53.6, 13744.0], [53.7, 13744.0], [53.8, 13744.0], [53.9, 13744.0], [54.0, 14390.0], [54.1, 14390.0], [54.2, 14390.0], [54.3, 14390.0], [54.4, 14390.0], [54.5, 14390.0], [54.6, 14390.0], [54.7, 14390.0], [54.8, 14390.0], [54.9, 14390.0], [55.0, 14484.0], [55.1, 14484.0], [55.2, 14484.0], [55.3, 14484.0], [55.4, 14484.0], [55.5, 14484.0], [55.6, 14484.0], [55.7, 14484.0], [55.8, 14484.0], [55.9, 14484.0], [56.0, 14545.0], [56.1, 14545.0], [56.2, 14545.0], [56.3, 14545.0], [56.4, 14545.0], [56.5, 14545.0], [56.6, 14545.0], [56.7, 14545.0], [56.8, 14545.0], [56.9, 14545.0], [57.0, 14605.0], [57.1, 14605.0], [57.2, 14605.0], [57.3, 14605.0], [57.4, 14605.0], [57.5, 14605.0], [57.6, 14605.0], [57.7, 14605.0], [57.8, 14605.0], [57.9, 14605.0], [58.0, 15006.0], [58.1, 15006.0], [58.2, 15006.0], [58.3, 15006.0], [58.4, 15006.0], [58.5, 15006.0], [58.6, 15006.0], [58.7, 15006.0], [58.8, 15006.0], [58.9, 15006.0], [59.0, 15031.0], [59.1, 15031.0], [59.2, 15031.0], [59.3, 15031.0], [59.4, 15031.0], [59.5, 15031.0], [59.6, 15031.0], [59.7, 15031.0], [59.8, 15031.0], [59.9, 15031.0], [60.0, 15045.0], [60.1, 15045.0], [60.2, 15045.0], [60.3, 15045.0], [60.4, 15045.0], [60.5, 15045.0], [60.6, 15045.0], [60.7, 15045.0], [60.8, 15045.0], [60.9, 15045.0], [61.0, 15068.0], [61.1, 15068.0], [61.2, 15068.0], [61.3, 15068.0], [61.4, 15068.0], [61.5, 15068.0], [61.6, 15068.0], [61.7, 15068.0], [61.8, 15068.0], [61.9, 15068.0], [62.0, 15245.0], [62.1, 15245.0], [62.2, 15245.0], [62.3, 15245.0], [62.4, 15245.0], [62.5, 15245.0], [62.6, 15245.0], [62.7, 15245.0], [62.8, 15245.0], [62.9, 15245.0], [63.0, 15629.0], [63.1, 15629.0], [63.2, 15629.0], [63.3, 15629.0], [63.4, 15629.0], [63.5, 15629.0], [63.6, 15629.0], [63.7, 15629.0], [63.8, 15629.0], [63.9, 15629.0], [64.0, 15756.0], [64.1, 15756.0], [64.2, 15756.0], [64.3, 15756.0], [64.4, 15756.0], [64.5, 15756.0], [64.6, 15756.0], [64.7, 15756.0], [64.8, 15756.0], [64.9, 15756.0], [65.0, 15876.0], [65.1, 15876.0], [65.2, 15876.0], [65.3, 15876.0], [65.4, 15876.0], [65.5, 15876.0], [65.6, 15876.0], [65.7, 15876.0], [65.8, 15876.0], [65.9, 15876.0], [66.0, 16560.0], [66.1, 16560.0], [66.2, 16560.0], [66.3, 16560.0], [66.4, 16560.0], [66.5, 16560.0], [66.6, 16560.0], [66.7, 16560.0], [66.8, 16560.0], [66.9, 16560.0], [67.0, 16582.0], [67.1, 16582.0], [67.2, 16582.0], [67.3, 16582.0], [67.4, 16582.0], [67.5, 16582.0], [67.6, 16582.0], [67.7, 16582.0], [67.8, 16582.0], [67.9, 16582.0], [68.0, 16666.0], [68.1, 16666.0], [68.2, 16666.0], [68.3, 16666.0], [68.4, 16666.0], [68.5, 16666.0], [68.6, 16666.0], [68.7, 16666.0], [68.8, 16666.0], [68.9, 16666.0], [69.0, 16757.0], [69.1, 16757.0], [69.2, 16757.0], [69.3, 16757.0], [69.4, 16757.0], [69.5, 16757.0], [69.6, 16757.0], [69.7, 16757.0], [69.8, 16757.0], [69.9, 16757.0], [70.0, 16842.0], [70.1, 16842.0], [70.2, 16842.0], [70.3, 16842.0], [70.4, 16842.0], [70.5, 16842.0], [70.6, 16842.0], [70.7, 16842.0], [70.8, 16842.0], [70.9, 16842.0], [71.0, 17015.0], [71.1, 17015.0], [71.2, 17015.0], [71.3, 17015.0], [71.4, 17015.0], [71.5, 17015.0], [71.6, 17015.0], [71.7, 17015.0], [71.8, 17015.0], [71.9, 17015.0], [72.0, 17058.0], [72.1, 17058.0], [72.2, 17058.0], [72.3, 17058.0], [72.4, 17058.0], [72.5, 17058.0], [72.6, 17058.0], [72.7, 17058.0], [72.8, 17058.0], [72.9, 17058.0], [73.0, 17347.0], [73.1, 17347.0], [73.2, 17347.0], [73.3, 17347.0], [73.4, 17347.0], [73.5, 17347.0], [73.6, 17347.0], [73.7, 17347.0], [73.8, 17347.0], [73.9, 17347.0], [74.0, 17651.0], [74.1, 17651.0], [74.2, 17651.0], [74.3, 17651.0], [74.4, 17651.0], [74.5, 17651.0], [74.6, 17651.0], [74.7, 17651.0], [74.8, 17651.0], [74.9, 17651.0], [75.0, 17664.0], [75.1, 17664.0], [75.2, 17664.0], [75.3, 17664.0], [75.4, 17664.0], [75.5, 17664.0], [75.6, 17664.0], [75.7, 17664.0], [75.8, 17664.0], [75.9, 17664.0], [76.0, 17946.0], [76.1, 17946.0], [76.2, 17946.0], [76.3, 17946.0], [76.4, 17946.0], [76.5, 17946.0], [76.6, 17946.0], [76.7, 17946.0], [76.8, 17946.0], [76.9, 17946.0], [77.0, 18081.0], [77.1, 18081.0], [77.2, 18081.0], [77.3, 18081.0], [77.4, 18081.0], [77.5, 18081.0], [77.6, 18081.0], [77.7, 18081.0], [77.8, 18081.0], [77.9, 18081.0], [78.0, 18214.0], [78.1, 18214.0], [78.2, 18214.0], [78.3, 18214.0], [78.4, 18214.0], [78.5, 18214.0], [78.6, 18214.0], [78.7, 18214.0], [78.8, 18214.0], [78.9, 18214.0], [79.0, 18289.0], [79.1, 18289.0], [79.2, 18289.0], [79.3, 18289.0], [79.4, 18289.0], [79.5, 18289.0], [79.6, 18289.0], [79.7, 18289.0], [79.8, 18289.0], [79.9, 18289.0], [80.0, 18456.0], [80.1, 18456.0], [80.2, 18456.0], [80.3, 18456.0], [80.4, 18456.0], [80.5, 18456.0], [80.6, 18456.0], [80.7, 18456.0], [80.8, 18456.0], [80.9, 18456.0], [81.0, 18738.0], [81.1, 18738.0], [81.2, 18738.0], [81.3, 18738.0], [81.4, 18738.0], [81.5, 18738.0], [81.6, 18738.0], [81.7, 18738.0], [81.8, 18738.0], [81.9, 18738.0], [82.0, 18820.0], [82.1, 18820.0], [82.2, 18820.0], [82.3, 18820.0], [82.4, 18820.0], [82.5, 18820.0], [82.6, 18820.0], [82.7, 18820.0], [82.8, 18820.0], [82.9, 18820.0], [83.0, 18901.0], [83.1, 18901.0], [83.2, 18901.0], [83.3, 18901.0], [83.4, 18901.0], [83.5, 18901.0], [83.6, 18901.0], [83.7, 18901.0], [83.8, 18901.0], [83.9, 18901.0], [84.0, 19005.0], [84.1, 19005.0], [84.2, 19005.0], [84.3, 19005.0], [84.4, 19005.0], [84.5, 19005.0], [84.6, 19005.0], [84.7, 19005.0], [84.8, 19005.0], [84.9, 19005.0], [85.0, 19217.0], [85.1, 19217.0], [85.2, 19217.0], [85.3, 19217.0], [85.4, 19217.0], [85.5, 19217.0], [85.6, 19217.0], [85.7, 19217.0], [85.8, 19217.0], [85.9, 19217.0], [86.0, 19341.0], [86.1, 19341.0], [86.2, 19341.0], [86.3, 19341.0], [86.4, 19341.0], [86.5, 19341.0], [86.6, 19341.0], [86.7, 19341.0], [86.8, 19341.0], [86.9, 19341.0], [87.0, 19399.0], [87.1, 19399.0], [87.2, 19399.0], [87.3, 19399.0], [87.4, 19399.0], [87.5, 19399.0], [87.6, 19399.0], [87.7, 19399.0], [87.8, 19399.0], [87.9, 19399.0], [88.0, 19412.0], [88.1, 19412.0], [88.2, 19412.0], [88.3, 19412.0], [88.4, 19412.0], [88.5, 19412.0], [88.6, 19412.0], [88.7, 19412.0], [88.8, 19412.0], [88.9, 19412.0], [89.0, 19538.0], [89.1, 19538.0], [89.2, 19538.0], [89.3, 19538.0], [89.4, 19538.0], [89.5, 19538.0], [89.6, 19538.0], [89.7, 19538.0], [89.8, 19538.0], [89.9, 19538.0], [90.0, 19994.0], [90.1, 19994.0], [90.2, 19994.0], [90.3, 19994.0], [90.4, 19994.0], [90.5, 19994.0], [90.6, 19994.0], [90.7, 19994.0], [90.8, 19994.0], [90.9, 19994.0], [91.0, 20072.0], [91.1, 20072.0], [91.2, 20072.0], [91.3, 20072.0], [91.4, 20072.0], [91.5, 20072.0], [91.6, 20072.0], [91.7, 20072.0], [91.8, 20072.0], [91.9, 20072.0], [92.0, 20781.0], [92.1, 20781.0], [92.2, 20781.0], [92.3, 20781.0], [92.4, 20781.0], [92.5, 20781.0], [92.6, 20781.0], [92.7, 20781.0], [92.8, 20781.0], [92.9, 20781.0], [93.0, 21383.0], [93.1, 21383.0], [93.2, 21383.0], [93.3, 21383.0], [93.4, 21383.0], [93.5, 21383.0], [93.6, 21383.0], [93.7, 21383.0], [93.8, 21383.0], [93.9, 21383.0], [94.0, 21467.0], [94.1, 21467.0], [94.2, 21467.0], [94.3, 21467.0], [94.4, 21467.0], [94.5, 21467.0], [94.6, 21467.0], [94.7, 21467.0], [94.8, 21467.0], [94.9, 21467.0], [95.0, 21787.0], [95.1, 21787.0], [95.2, 21787.0], [95.3, 21787.0], [95.4, 21787.0], [95.5, 21787.0], [95.6, 21787.0], [95.7, 21787.0], [95.8, 21787.0], [95.9, 21787.0], [96.0, 22175.0], [96.1, 22175.0], [96.2, 22175.0], [96.3, 22175.0], [96.4, 22175.0], [96.5, 22175.0], [96.6, 22175.0], [96.7, 22175.0], [96.8, 22175.0], [96.9, 22175.0], [97.0, 22258.0], [97.1, 22258.0], [97.2, 22258.0], [97.3, 22258.0], [97.4, 22258.0], [97.5, 22258.0], [97.6, 22258.0], [97.7, 22258.0], [97.8, 22258.0], [97.9, 22258.0], [98.0, 23048.0], [98.1, 23048.0], [98.2, 23048.0], [98.3, 23048.0], [98.4, 23048.0], [98.5, 23048.0], [98.6, 23048.0], [98.7, 23048.0], [98.8, 23048.0], [98.9, 23048.0], [99.0, 23849.0], [99.1, 23849.0], [99.2, 23849.0], [99.3, 23849.0], [99.4, 23849.0], [99.5, 23849.0], [99.6, 23849.0], [99.7, 23849.0], [99.8, 23849.0], [99.9, 23849.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 3500.0, "maxY": 4.0, "series": [{"data": [[3500.0, 1.0], [4200.0, 1.0], [4300.0, 2.0], [4400.0, 1.0], [4700.0, 1.0], [5300.0, 3.0], [5500.0, 1.0], [6100.0, 4.0], [6000.0, 2.0], [6200.0, 3.0], [6500.0, 2.0], [6700.0, 3.0], [7100.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 2.0], [7800.0, 1.0], [7900.0, 1.0], [8300.0, 1.0], [8600.0, 1.0], [9000.0, 2.0], [8800.0, 1.0], [9500.0, 2.0], [9600.0, 1.0], [9300.0, 1.0], [10100.0, 2.0], [10300.0, 1.0], [10700.0, 1.0], [10900.0, 1.0], [11200.0, 1.0], [11000.0, 1.0], [10800.0, 1.0], [11700.0, 1.0], [11400.0, 1.0], [12200.0, 1.0], [12100.0, 1.0], [13300.0, 1.0], [13700.0, 1.0], [14300.0, 1.0], [14400.0, 1.0], [14500.0, 1.0], [14600.0, 1.0], [15000.0, 4.0], [15200.0, 1.0], [15800.0, 1.0], [15600.0, 1.0], [15700.0, 1.0], [17000.0, 2.0], [16500.0, 2.0], [17300.0, 1.0], [16600.0, 1.0], [16800.0, 1.0], [16700.0, 1.0], [17600.0, 2.0], [18000.0, 1.0], [17900.0, 1.0], [18400.0, 1.0], [18200.0, 2.0], [19300.0, 2.0], [18900.0, 1.0], [18700.0, 1.0], [19000.0, 1.0], [19400.0, 1.0], [18800.0, 1.0], [19200.0, 1.0], [19500.0, 1.0], [20000.0, 1.0], [19900.0, 1.0], [21400.0, 1.0], [20700.0, 1.0], [21300.0, 1.0], [21700.0, 1.0], [22200.0, 1.0], [22100.0, 1.0], [23000.0, 1.0], [23800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 23800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 39.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 61.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 61.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 39.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 32.20000000000001, "minX": 1.6598559E12, "maxY": 32.20000000000001, "series": [{"data": [[1.6598559E12, 32.20000000000001]], "isOverall": false, "label": "ThreadGroup100user20Sec", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6598559E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6248.5, "minX": 1.0, "maxY": 23849.0, "series": [{"data": [[2.0, 18289.0], [3.0, 18820.0], [4.0, 19412.0], [5.0, 18214.0], [6.0, 19005.0], [7.0, 19399.0], [8.0, 19994.0], [9.0, 21383.0], [11.0, 21478.0], [12.0, 20072.0], [13.0, 21467.0], [14.0, 23048.0], [15.0, 22258.0], [16.0, 23849.0], [17.0, 15756.0], [18.0, 16757.0], [19.0, 21787.0], [20.0, 15045.0], [21.0, 15629.0], [22.0, 16842.0], [23.0, 10319.0], [24.0, 10510.0], [25.0, 8286.666666666668], [26.0, 12011.0], [27.0, 9399.333333333332], [28.0, 8114.25], [29.0, 6248.5], [30.0, 17646.5], [31.0, 18738.0], [32.0, 9098.2], [33.0, 11703.5], [34.0, 9452.25], [35.0, 13507.0], [36.0, 10126.333333333334], [37.0, 10882.666666666666], [39.0, 17015.0], [38.0, 15245.0], [41.0, 8793.333333333332], [40.0, 14390.0], [42.0, 11288.0], [43.0, 12274.5], [44.0, 10032.0], [45.0, 10488.0], [47.0, 10344.0], [46.0, 11961.5], [48.0, 12423.0], [49.0, 14484.0], [51.0, 10761.0], [50.0, 10097.0], [53.0, 10656.25], [52.0, 12227.0], [54.0, 9838.0], [1.0, 19217.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[32.20000000000001, 12622.939999999995]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 54.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 183.0, "minX": 1.6598559E12, "maxY": 28202.916666666668, "series": [{"data": [[1.6598559E12, 28202.916666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6598559E12, 183.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6598559E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 12622.939999999995, "minX": 1.6598559E12, "maxY": 12622.939999999995, "series": [{"data": [[1.6598559E12, 12622.939999999995]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6598559E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5344.289999999999, "minX": 1.6598559E12, "maxY": 5344.289999999999, "series": [{"data": [[1.6598559E12, 5344.289999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6598559E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 12419.239999999998, "minX": 1.6598559E12, "maxY": 12419.239999999998, "series": [{"data": [[1.6598559E12, 12419.239999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6598559E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3576.0, "minX": 1.6598559E12, "maxY": 15245.0, "series": [{"data": [[1.6598559E12, 15245.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6598559E12, 14465.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6598559E12, 15245.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6598559E12, 14965.9]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6598559E12, 3576.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6598559E12, 7971.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6598559E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5758.0, "minX": 1.0, "maxY": 21082.0, "series": [{"data": [[2.0, 5758.0], [1.0, 9287.5], [4.0, 7654.0], [5.0, 6121.0], [3.0, 9558.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 18440.5], [8.0, 16754.0], [3.0, 18289.0], [6.0, 18013.5], [12.0, 21082.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 9556.0, "series": [{"data": [[2.0, 5754.0], [1.0, 9284.0], [4.0, 7651.5], [5.0, 6113.0], [3.0, 9556.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [8.0, 0.0], [3.0, 0.0], [6.0, 0.0], [12.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6598559E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6598559E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6598559E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.6598559E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.6598559E12, 1.0166666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6598559E12, 0.16666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}, {"data": [[1.6598559E12, 0.48333333333333334]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6598559E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.6598559E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.6598559E12, 1.0166666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.6598559E12, 0.65]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6598559E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.6598559E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.6598559E12, 1.0166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6598559E12, 0.65]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6598559E12, "title": "Total Transactions Per Second"}},
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


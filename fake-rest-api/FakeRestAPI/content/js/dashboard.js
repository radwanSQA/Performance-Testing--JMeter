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
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.39863013698630134, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.98, 500, 1500, "DELETE User"], "isController": false}, {"data": [0.0, 500, 1500, "POST Books"], "isController": false}, {"data": [1.0, 500, 1500, "UPDATE Cover photo"], "isController": false}, {"data": [0.0, 500, 1500, "POST Activities"], "isController": false}, {"data": [0.0, 500, 1500, "GET Books"], "isController": false}, {"data": [0.97, 500, 1500, "UPDATE Author"], "isController": false}, {"data": [0.2, 500, 1500, "GET Books Cover photo by Id"], "isController": false}, {"data": [0.16, 500, 1500, "GET user by id"], "isController": false}, {"data": [0.08, 500, 1500, "GET Books by id"], "isController": false}, {"data": [0.0, 500, 1500, "GET Activities"], "isController": false}, {"data": [0.0, 500, 1500, "POST Authors"], "isController": false}, {"data": [0.97, 500, 1500, "DELETE Author"], "isController": false}, {"data": [1.0, 500, 1500, "DELETE Activities"], "isController": false}, {"data": [1.0, 500, 1500, "DELETE Cover"], "isController": false}, {"data": [0.0, 500, 1500, "GET users"], "isController": false}, {"data": [0.67, 500, 1500, "GET Author By Id"], "isController": false}, {"data": [0.17, 500, 1500, "GET Author books by id"], "isController": false}, {"data": [0.54, 500, 1500, "UPDATE  Books"], "isController": false}, {"data": [0.0, 500, 1500, "POST User"], "isController": false}, {"data": [0.65, 500, 1500, "PUT User"], "isController": false}, {"data": [0.96, 500, 1500, "DELETE BOOKS"], "isController": false}, {"data": [0.6, 500, 1500, "UPDATE Activities"], "isController": false}, {"data": [0.1, 500, 1500, "GET Activities by Id"], "isController": false}, {"data": [0.0, 500, 1500, "GET Coverphoto"], "isController": false}, {"data": [0.7, 500, 1500, "GET Cover photo by Id"], "isController": false}, {"data": [0.0, 500, 1500, "GET Authors"], "isController": false}, {"data": [0.0, 500, 1500, "POST Coverphoto"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1460, 0, 0.0, 48903.62328767133, 202, 158911, 42765.0, 124029.7, 135920.30000000002, 155454.02, 3.2488484389950822, 22.061683180950844, 0.7229635241660919], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["DELETE User", 100, 0, 0.0, 1509.78, 202, 83867, 211.0, 238.9, 252.44999999999987, 83489.05999999981, 0.31444365484148895, 0.03715593968341813, 0.062335997981271735], "isController": false}, {"data": ["POST Books", 50, 0, 0.0, 86530.1, 40004, 125094, 86296.5, 121149.7, 123032.44999999998, 125094.0, 0.3043121024923161, 0.09420599266607832, 0.10549882459450412], "isController": false}, {"data": ["UPDATE Cover photo", 10, 0, 0.0, 216.5, 206, 236, 210.5, 235.5, 236.0, 236.0, 0.06688918468772784, 0.01495861649754851, 0.016852939110775178], "isController": false}, {"data": ["POST Activities", 10, 0, 0.0, 89349.70000000001, 53892, 116941, 81751.0, 116829.8, 116941.0, 116941.0, 0.059371140875843074, 0.01588641855466895, 0.01779974633680061], "isController": false}, {"data": ["GET Books", 50, 0, 0.0, 120136.27999999998, 92399, 157770, 123133.5, 144340.9, 150434.49999999994, 157770.0, 0.3162375323352877, 29.40014631915324, 0.0552798030156411], "isController": false}, {"data": ["UPDATE Author", 100, 0, 0.0, 2086.94, 203, 82473, 212.0, 242.9, 257.95, 82471.44, 0.30737547451088876, 0.07624352590406812, 0.08524866675887932], "isController": false}, {"data": ["GET Books Cover photo by Id", 10, 0, 0.0, 45402.2, 220, 92794, 52815.0, 90304.1, 92794.0, 92794.0, 0.06759725555142461, 0.0194078057930848, 0.01320258897488762], "isController": false}, {"data": ["GET user by id", 100, 0, 0.0, 44919.240000000005, 212, 87019, 52093.0, 71322.20000000001, 80508.55, 86980.70999999998, 0.5537558490461555, 0.13303119029819752, 0.09788067253647867], "isController": false}, {"data": ["GET Books by id", 50, 0, 0.0, 52844.700000000004, 224, 93045, 52782.0, 84312.0, 89071.34999999999, 93045.0, 0.2975234150927678, 0.193186834663263, 0.05258958801932712], "isController": false}, {"data": ["GET Activities", 10, 0, 0.0, 126669.09999999999, 91993, 144608, 128615.0, 144607.5, 144608.0, 144608.0, 0.06914625123598923, 0.20548726282835825, 0.012424717018966816], "isController": false}, {"data": ["POST Authors", 100, 0, 0.0, 81931.82999999999, 27626, 126863, 83958.5, 115797.1, 121652.45, 126835.01999999999, 0.5717520197140097, 0.14237965334675043, 0.15857184921755735], "isController": false}, {"data": ["DELETE Author", 100, 0, 0.0, 872.0000000000002, 203, 61527, 209.0, 220.8, 251.29999999999984, 60947.189999999704, 0.3042537719861382, 0.03595186172883078, 0.060910178962068684], "isController": false}, {"data": ["DELETE Activities", 10, 0, 0.0, 211.5, 203, 234, 207.5, 233.6, 234.0, 234.0, 0.06987631891551953, 0.00825686971560338, 0.014193627279714903], "isController": false}, {"data": ["DELETE Cover", 10, 0, 0.0, 211.3, 205, 220, 210.5, 219.7, 220.0, 220.0, 0.06689052696357142, 0.007904056408781389, 0.013652461069713307], "isController": false}, {"data": ["GET users", 100, 0, 0.0, 121876.43, 85368, 158911, 122077.5, 154497.5, 155430.9, 158899.00999999998, 0.5929263881889064, 0.4169013666953248, 0.10364631199786546], "isController": false}, {"data": ["GET Author By Id", 100, 0, 0.0, 8755.78, 206, 68461, 246.0, 38755.800000000025, 50368.14999999999, 68460.87, 0.41140581480978655, 0.10686908861269846, 0.07352271885760833], "isController": false}, {"data": ["GET Author books by id", 100, 0, 0.0, 45114.40999999999, 213, 93626, 50749.5, 73157.1, 85641.7, 93625.98, 0.5537374509250185, 0.22218174459136944, 0.10652956819553576], "isController": false}, {"data": ["UPDATE  Books", 50, 0, 0.0, 14038.48, 205, 68451, 255.0, 52521.09999999999, 57833.34999999997, 68451.0, 0.216911270275781, 0.07329228468302756, 0.08176538117817526], "isController": false}, {"data": ["POST User", 100, 0, 0.0, 84315.6, 27906, 124071, 83849.0, 117980.8, 124039.7, 124070.96, 0.5712033541060954, 0.13499141766960457, 0.1472633647304777], "isController": false}, {"data": ["PUT User", 100, 0, 0.0, 10764.35, 206, 65398, 241.0, 48110.30000000001, 51475.94999999999, 65365.429999999986, 0.4166458343749479, 0.09846512882689198, 0.10782338487242304], "isController": false}, {"data": ["DELETE BOOKS", 50, 0, 0.0, 2435.8, 203, 58447, 213.5, 238.39999999999998, 23996.799999999774, 58447.0, 0.17647328723851072, 0.02085280054283183, 0.0349844504974782], "isController": false}, {"data": ["UPDATE Activities", 10, 0, 0.0, 15980.3, 213, 52755, 249.5, 52180.3, 52755.0, 52755.0, 0.06987241297390964, 0.018696329252784416, 0.02101631171480876], "isController": false}, {"data": ["GET Activities by Id", 10, 0, 0.0, 46005.5, 227, 68878, 51041.5, 68466.6, 68878.0, 68878.0, 0.08703144446088372, 0.024477593754623547, 0.015808445966527706], "isController": false}, {"data": ["GET Coverphoto", 10, 0, 0.0, 125836.5, 91844, 157230, 129029.0, 155964.7, 157230.0, 157230.0, 0.06326831459536748, 1.2792927353739474, 0.011430310742327136], "isController": false}, {"data": ["GET Cover photo by Id", 10, 0, 0.0, 6226.300000000001, 211, 40036, 231.0, 37538.40000000001, 40036.0, 40036.0, 0.06689321167687902, 0.019075017392235036, 0.012215850179273808], "isController": false}, {"data": ["GET Authors", 100, 0, 0.0, 120329.73000000001, 83456, 156694, 118393.0, 152155.5, 155859.95, 156693.25, 0.6267824124855057, 29.217094902692033, 0.11078868814441067], "isController": false}, {"data": ["POST Coverphoto", 10, 0, 0.0, 79132.40000000001, 45887, 116972, 75173.0, 116857.0, 116972.0, 116972.0, 0.05947955390334573, 0.013301579925650557, 0.014927973977695167], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1460, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});

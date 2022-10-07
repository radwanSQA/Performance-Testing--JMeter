### <p class="has-line-data" data-line-start="0" data-line-end="2">What Is Performance Testing ?<br>
Performance Testing is a software testing process used for testing the speed, response time,stability,reliability,scalability and resources usages of software application under particular workload.Performance testing also known as a <code>perf testing</code>.</p>
<p class="has-line-data" data-line-start="3" data-line-end="6">Speed - How much time to need application responds quickly<br>
Scalability - Maximum user load the software application can handle<br>
Stability - Is application stable under varying loads</p>

### <p class="has-line-data" data-line-start="7" data-line-end="20">Types of performance testing<br>
- Load Testing<br>
Check the application ability to perform on normal and peak usage.<br>
- Stress Testing<br>
Stress testing has an incremental approach where the load is increased gradually.<br>
- Volume Testing<br>
Under the volume testing large no. of data is populated in a database and the overall software system behavior is monitored.<br>
- Capacity Testing<br>
Capacity Testing is used to determine how many users and/or transactions a given web application will support and still meet performance. During this testing, resources such as processor capacity, network bandwidth, memory usage, disk capacity, etc. are considered and altered to meet the goal.<br>
- Reliability/Recovery<br>
Reliability Testing or Recovery Testing - is to verify whether or not the application is able to return back to its normal state after a failure or abnormal behavior and how long does it take for it to do so (in other words, time estimation).<br>
- Scalability Testing<br>
The objective of scalability testing is to determine the software application’s effectiveness in “scaling up” to support an increase in user load. It helps plan capacity additions to your software system.</p>

### <p class="has-line-data" data-line-start="21" data-line-end="23">What Is JMeter?<br>
JMeter is a powerful automated testing tool with enormous testing capabilities. It is a Java desktop application and the GUI uses the Swing graphical API</p>

### <p class="has-line-data" data-line-start="24" data-line-end="26">Why Do We Use JMeter?<br>
It helps to measure and analyze the performance of web applications and other variety of services.</p>

### <p class="has-line-data" data-line-start="27" data-line-end="28">Installation of JMeter</p>
<p class="has-line-data" data-line-start="29" data-line-end="31">Before Installing JMeter you need to install java on your device. To verify the version of java which version is installed<br>
Go to CMD and write this command</p>

```sh
java -version
```
<p class="has-line-data">Then open https://jmeter.apache.org/download_jmeter.cgi. </p>
Select a .zip file and download the JMeter file<br>
Unzip the folder to your computer<br>
Go to Bin folder inside your JMeter folder and launch the .bat file<br>

<p class="has-line-data">After click bat file wait few seconds jmeter UI will be show </p>

> Note: Make sure that you do not close the .exe file as that will also close JMeter UI.


### JMeter from command Line
#### <p class="has-line-data" data-line-start="0" data-line-end="3">Why use the command line ?<br>
- GUI consumes memory, slower the process
- integrate with any external process CI CD

#### <p class="has-line-data" data-line-start="4" data-line-end="9">How is the process?<br>

<p class="has-line-data" data-line-start="10" data-line-end="11">Step 1: go to JMeter bin folder</p>
<p class="has-line-data" data-line-start="12" data-line-end="13">Step 2: go to the folder address bar, write cmd then enter.you see command window</p>
<p class="has-line-data" data-line-start="18" data-line-end="23">Step 3:run the command like below<br>

```sh
jmeter -n -t “location of your test file” -l “location of results file”
```
-n == non gui mode<br>
-t == your test file<br>
-l == your location result</p>


<p class="has-line-data" data-line-start="34" data-line-end="37">Create report end of the test<br>
Open cmd line go to jmeter bin folder
go to cmd. write below command

```sh
jmeter -n -t “location of your test file” -l “location of results file”  -e  -o “location of report folder”
```
Example: jmeter -n -t "fake-rest-api\FakeRestAPI.jmx" -l "fake-rest-api\FakeRestAPI.jtl" -e -o "fake-rest-api\FakeRestAPI"</p>
<p class="has-line-data" data-line-start="39" data-line-end="41">Create report from standalone csv file</p>

```sh
jmeter -g “location of results file”  -o “location of report folder”
```

### <p class="has-line-data" data-line-start="0" data-line-end="2">How to use blazemeter to record JMeter test</p>
- Create blazemeter account
- Login to blazemeter
- Get blazemeter account
- Add chrome extension
- Record test<br>
  Go to the website you want testing and Click start on blazemeter. Visit a different link or menu you want to pf testing.
- Save jmx<br>
  Stop and save jmx file from blazemeter.After save got tot jamter and run the file
  
### How to get data from csv file
- Add CSV data set from config
```sh
Test Plan-> Config Element -> CSV data set Config
```  
- Create a csv file and add data
- Refer the csv file in JMeter csv data set config 
- Refers values from csv file using syntax ${variableName}
- Run and validate



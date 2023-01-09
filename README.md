# ETARA - Evaluation Toolkit for API and RDF Alignment

## What is ETARA?
ETARA (Evaluation Toolkit for API and RDF Alignment) is a toolkit to support the development and configuration of appropriate alignment tools. Furthermore, the toolkit offers a detailed benchmark to evaluate existing alignment systems and to determine their strengths and weaknesses more precisely. Existing benchmark systems, e.g. MELT, SEALS and HOBBIT, focus only on data sets of the same format. In contrast, ETARA enables the simulation and creation of RESTful Web APIs with the common response formats (e.g., XML and JSON). It provides a variety of existing Web APIs and their response formats such as CrossRef, SciGraph, ArXiv and Semantic Scholar.

## How to use ETARA?
In order to run ETARA several configurations must be done first. The cloned project has to be opened (currently) in an IDE of your choice. This step will be replaced soon by simply providing an executable jar file. Afterwards, two steps need to be performed: (1) Providing all necessary global configurations and (2) providing all configurations needed to simulate the chosen Web APIs, i.e., response templates, data sources and more.

### Global Configurations
```
{
  "port": 8080,
  "config-folder": "configs/webservices",
  "dbPath": "configs/databases.json",
  "apiPath": "configs/apis.json",
  "outputPath": "res/",
  "loglevel": "0"
}
```

### Configuring Web APIs
```
{
    "feed": {
        "entry": {
            "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}",<#else>"",</#if>
            "author": [<#list subject.findValues("authorName") as name>
                {
                  "name": ${toJSONString(name)}
                }<#sep>,</#sep>
            </#list>]
        }
    }
}            
```

```
{
  "webservice" : "/example/publication",
  "errorType": "jsonWithStatus",
  "type": "precise",
  "latency": "1000",
  "maxRequestsPerMinute": "60",
  "maxRequests": "2000",
  "inputs" : [ "arxivId" ],
  "where" : [
    ["?subject", "key", "$arxivId"]
  ],
  "returnTemplate": "arxiv/arxiv.json.ftl",
  "db": "arxiv"
}         
```

### Running and Using ETARA

## Where to find data sets?
[Download](https://shorturl.at/fgqV4 "Link to datasets")

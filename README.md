# ETARA - Evaluation Toolkit for API and RDF Alignment

## What is ETARA?
ETARA (Evaluation Toolkit for API and RDF Alignment) is a toolkit to support the development and configuration of appropriate alignment tools. Furthermore, the toolkit offers a detailed benchmark to evaluate existing alignment systems and to determine their strengths and weaknesses more precisely. Existing benchmark systems, e.g. MELT, SEALS and HOBBIT, focus only on data sets of the same format. In contrast, ETARA enables the simulation and creation of RESTful Web APIs with the common response formats (e.g., XML and JSON). It provides a variety of existing Web APIs and their response formats such as CrossRef, SciGraph, ArXiv and Semantic Scholar.

## Where to find data sets?
[Download](https://shorturl.at/fgqV4 "Link to datasets")

## Quick Start
In order to run ETARA several configurations must be done first. The cloned project has to be opened (currently) in an IDE of your choice. This step will be replaced soon by simply providing an executable jar file. Afterwards, two steps need to be performed: (1) Providing all necessary global configurations and (2) providing all configurations needed to simulate the chosen Web APIs, i.e., response templates, data sources and more.

### Global Configurations
```
{
  "port": 8080,
  "config-folder": "configs/webservices",
  "dbPath": "configs/databases.json",
  "outputPath": "res/",
  "loglevel": "0"
}
```

### Configuring Data Bases
```
{
  "databases": {
    "dblp": {
      "path": "C:\\Databases\\example\\tdb",
      "source": "C:\\Databases\\example\\example.nt",
      "identifierMap": "configs\\identifierMaps\\example.json"
    }
  }
}
```

```
{ 
  "type" : "<http://example/com/arxiv/type>" ,
  "id" : "<http://example/com/arxiv/id>" ,
  "key" : "<http://example/com/arxiv/key>" ,
  "published" : "<http://example/com/arxiv/published>" ,
  "title" : "<http://example/com/arxiv/title>" ,
  "primaryCategoryTerm" : "<http://example/com/arxiv/primaryCategoryTerm>" ,
  "updated" : "<http://example/com/arxiv/updated>" ,
  "authorName" : "<http://example/com/arxiv/authorName>" ,
  "link" : "<http://example/com/arxiv/link>" ,
  "category" : "<http://example/com/arxiv/category>" ,
  "rel" : "<http://example/com/arxiv/rel>" ,
  "href" : "<http://example/com/arxiv/href>" ,
  "scheme" : "<http://example/com/arxiv/scheme>" ,
  "term" : "<http://example/com/arxiv/term>"
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

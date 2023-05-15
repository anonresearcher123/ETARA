# ETARA - Evaluation Toolkit for API and RDF Alignment

## What is ETARA?
ETARA (Evaluation Toolkit for API and RDF Alignment) is a toolkit to support the development and configuration of appropriate alignment tools. Furthermore, the toolkit offers a detailed benchmark to evaluate existing alignment systems and to determine their strengths and weaknesses more precisely. Existing benchmark systems, e.g. MELT, SEALS and HOBBIT, focus only on data sets of the same format. In contrast, ETARA enables the simulation and creation of RESTful Web APIs with the common response formats (e.g., XML and JSON). It provides a variety of existing Web APIs and their response formats such as CrossRef, SciGraph, ArXiv and Semantic Scholar.

## Where to find data sets?
[Download](https://www.dropbox.com/scl/fo/1t7gmh8bzbyieanacdl5a/h?dl=0&rlkey=66rejlyibvjxrb2z3hwsrji4v "Link to datasets")

## Quick Start
In order to run ETARA several configurations must be done first. The cloned project has to be opened (currently) in an IDE of your choice. This step will be replaced soon by simply providing an executable jar file. Afterwards, two steps need to be performed: (1) Providing all necessary global configurations and (2) providing all configurations needed to simulate the chosen Web APIs, i.e., response templates, data sources and more.

### Global Configurations
ETARA's global configuration is located in the file `clobal-config.json` and includes specifications about the port to be used, a path to the response templates, the configuration files of each Web API to be simulated, and more. The path to the response templates and the configuration files of each simulated API is specified under `config-folder` and points by default to [config/webservices](https://github.com/anonresearcher123/ETARA/tree/master/configs/webservices "Link to the API Configuration Folder"). The folder contains for each API to be simulated a subfolder with the name of the API and contains on the one hand all important configurations of the API (e.g. rate limit, latency, etc.) and a response template. Since the APIs simulated in this case are to return a response to requests, they must be connected to data sources. These data sources are specified in the global configuration under `dbPath` and stores for each database used a label and the location of the database index. Thus, ETARA can query these indices during runtime and return the requested data in form of the response templates.

```
{
  "port": 8080,
  "config-folder": "configs/webservices",
  "dbPath": "configs/databases.json",
  "loglevel": "0"
}
```

### Configuring Data Bases
The previously described configuration file for the databases used by ETARA looks like the following example.

```
{
  "databases": {
    "example": {
      "path": "C:\\Databases\\example\\tdb",
      "source": "C:\\Databases\\example\\example.nt",
      "identifierMap": "configs\\identifierMaps\\example.json"
    }
  }
}
```

The JSON object `databases` consists of entries, also JSON objects, which store all the information that needs to be specified for a database. In this example, only one database is stored with the label `example`. Here `path` describes the path to the database index, in this case a TDB index. The entry `source` points to the raw text file of the database, typically a .nt or .ttl file. The access to the raw data is needed because ETARA initially generates a so-called identifier map. This is a mapping between the URI formatted relations (predicates) of an RDF file and a short keyword. Typically, the suffix specifies the keyword, but this can be renamed by the user. The identifier map is only created when ETARA is run for the first time, if it does not already exist.  An example for an identifier map looks as following:

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

The purpose of such an identifier map is to be able to use short keywords when configuring a response template, instead of using sperring and possibly incomprehensible URLs. A more detailed explanation of its use can be found in the next section of this documentation.

### Configuring Web APIs
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

### Running and Using ETARA
After all configurations have been made, ETARA can be executed using an IDE (for example IntelliJ or Eclipse). All APIs specified by default under `configs/webservices` are then started and simulated. An example of such a simulation can be seen in the following screenshot.

![Screenshot 2023-05-15 170136](https://github.com/anonresearcher123/ETARA/assets/120786910/f7b29cd7-71c8-48cd-a4a0-d17e7019028f)

The simulated APIs are located under the base domain `http://localhost:8080` and can be requested via the respective paths, for example `http://localhost:8080/webservices/a0/work`. Executing a GET request (for example `http://localhost:8080/webservices/a0/work?orcid=0000-0003-2514-9306`) causes the simulated API a0 to issue a query to the database used, parse the query result and respond according to the template specifications. An example of such a response looks like the following:

![Screenshot 2023-05-15 171242](https://github.com/anonresearcher123/ETARA/assets/120786910/636b055c-03f7-410e-9d06-5461c6a0f13d)


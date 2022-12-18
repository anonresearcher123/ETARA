{
    "commonName": "${subject.findValue("hasCommonName")?json_string}",
    "officialName": "${subject.findValue("label")?json_string}",
    "tld": [<#list subject.findValues("hasTld") as tld>
        ${toJSONString(tld)}<#sep>,</#sep>
    </#list>],
    "cca2": "${subject.findValue("hasCca2")?json_string}",
    "cca3": "${subject.findValue("hasCca3")?json_string}",
    "ccn3": "${subject.findValue("hasCcn3")?json_string}",
    "cioc": "${subject.findValue("hasCioc")?json_string}",
    "currencies": [<#list subject.find("hasCurrency") as currency>
        {
            "name": "${currency.findValue("label")?keep_before_last("@")}",
            "symbol": "${currency.findValue("hasCurrencySymbol")?json_string}"
        }<#sep>,</#sep>
    </#list>],
    "idd": {<#list subject.find("hasIdd") as idd>
        "root": "<#list idd.find("belongsToIddZone") as zone>${zone.findValue("hasIddRoot")?json_string}</#list>",
        "suffixes": [<#list idd.findValues("hasIddSuffix") as suffix>
            "${(suffix)?json_string}"<#sep>,</#sep>
        </#list>]
    </#list>},

    "capitalInfo": {<#list subject.find("hasCapital") as capital>
        "name": [<#list subject.find("hasCapital") as capital>
            "${capital.findValue("label")}"<#sep>,</#sep>
        </#list>],
        "latlng": [
            ${capital.findValue("hasLatitude")},
            ${capital.findValue("hasLongitude")}
        ]
    </#list>}
    "altSpellings": [<#list subject.findValues("hasAlternativeSpelling") as spelling>
        ${toJSONString(spelling)}<#sep>,</#sep>
    </#list>]
    "region": "${subject.findValue("hasRegion")?json_string}",
    "subregion": "${subject.findValue("hasSubRegion")?json_string}",
    "languages": [<#list subject.find("hasLanguage") as language>
        "${language.findValue("label")?keep_before_last("@")}"<#sep>,</#sep>
    </#list>],
    "latlng": [
        ${subject.findValue("hasLatitude")},
        ${subject.findValue("hasLongitude")}
    ],
    "borders": [<#list subject.find("hasBorderWith") as border>
        "${border.findValue("hasCca3")?json_string}"<#sep>,</#sep>
    </#list>],
    "area": ${subject.findValue("hasArea")},
    "population": ${subject.findValue("hasPopulation")},
    "gini": {<#list subject.find("hasGiniIndex") as index>
        "${index.findValue("hasYear")?json_string}": ${index.findValue("hasIndexValue")}<#sep>,</#sep>
    </#list>},
    "fifa": "${subject.findValue("hasFifaCountryCode")?json_string}",
    "car": {<#list subject.find("hasTrafficInformation") as traffic>
        "signs": [<#list traffic.findValues("hasTrafficSign") as sign>
            ${toJSONString(sign)}<#sep>,</#sep>
        </#list>],
        "side": "${traffic.findValue("hasTrafficSide")}"
    </#list>},
    "timezones": [<#list subject.find("hasTimeZone") as zone>
        "${zone.findValue("label")?json_string}"<#sep>,</#sep>
    </#list>],
    "continents": [<#list subject.findValues("belongsToContinent") as continent>
        ${toJSONString(continent)}<#sep>,</#sep>
    </#list>],
    "startOfWeek": "${subject.findValue("startOfWeek")?json_string}"
}
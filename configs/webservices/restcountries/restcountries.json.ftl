{
    "name": {
        "common": "${subject.findValue("hasCommonName")?json_string}",
        "official": "${subject.findValue("label")?json_string}",
        "nativeName": {<#list subject.find("hasNativeName") as nName>
        "${nName.findValue("hasNativeOfficialName")?keep_after_last("@")}": {
            "official": "${nName.findValue("hasNativeOfficialName")?keep_before_last("@")}",
            "common": "${nName.findValue("hasNativeCommonName")?keep_before_last("@")}"
            }<#sep>,</#sep>
        </#list>}
    },
    "tld": [<#list subject.findValues("hasTld") as tld>
        ${toJSONString(tld)}<#sep>,</#sep>
    </#list>],
    "cca2": "${subject.findValue("hasCca2")?json_string}",
    "cca3": "${subject.findValue("hasCca3")?json_string}",
    "ccn3": "${subject.findValue("hasCcn3")?json_string}",
    "cioc": "${subject.findValue("hasCioc")?json_string}",
    "independent": ${subject.findValues("type")?seq_contains("http://example/com/rc/IndependentCountry")?string("true","false")},
    "unMember": ${subject.findValues("type")?seq_contains("http://example/com/rc/UnCountry")?string("true","false")},
    "currencies": {<#list subject.find("hasCurrency") as currency>
        "${currency.findValue("label")?keep_after_last("@")}": {
            "name": "${currency.findValue("label")?keep_before_last("@")}",
            "symbol": "${currency.findValue("hasCurrencySymbol")?json_string}"
        }<#sep>,</#sep>
    </#list>},
    "idd": {<#list subject.find("hasIdd") as idd>
        "root": "<#list idd.find("belongsToIddZone") as zone>${zone.findValue("hasIddRoot")?json_string}</#list>",
        "suffixes": [<#list idd.findValues("hasIddSuffix") as suffix>
            "${(suffix)?json_string}"<#sep>,</#sep>
        </#list>]
    </#list>},
    "capital": [<#list subject.find("hasCapital") as capital>
        "${capital.findValue("label")}"<#sep>,</#sep>
    </#list>],
    "altSpellings": [<#list subject.findValues("hasAlternativeSpelling") as spelling>
        ${toJSONString(spelling)}<#sep>,</#sep>
    </#list>]
    "region": "${subject.findValue("hasRegion")?json_string}",
    "subregion": "${subject.findValue("hasSubRegion")?json_string}",
    "languages": {<#list subject.find("hasLanguage") as language>
        "${language.findValue("label")?keep_after_last("@")}": "${language.findValue("label")?keep_before_last("@")}"<#sep>,</#sep>
    </#list>},
    "translations": {<#list subject.find("hasTranslation") as language>
        "${language.findValue("label")?keep_after_last("@")}": {
            "official": "${language.findValue("label")?keep_before_last("@")}",
            "common": "${language.findValue("hasCommonTranslation")?keep_before_last("@")}"
        }<#sep>,</#sep>
    </#list>},
    "latlng": [
        ${subject.findValue("hasLatitude")},
        ${subject.findValue("hasLongitude")}
    ],
    "landlocked": ${subject.findValues("type")?seq_contains("http://example/com/rc/LandlockedCountry")?string("true","false")},
    "borders": [<#list subject.find("hasBorderWith") as border>
        "${border.findValue("hasCca3")?json_string}"<#sep>,</#sep>
    </#list>],
    "area": ${subject.findValue("hasArea")},
    "demonyms": {<#list subject.find("hasDemonym") as demonym>
        "${demonym.findValue("hasFemaleDescription")?keep_after_last("@")}": {
            "f": "${demonym.findValue("hasFemaleDescription")?keep_before_last("@")}",
            "m": "${demonym.findValue("hasMaleDescription")?keep_before_last("@")}"
        }<#sep>,</#sep>
    </#list>},
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
    "startOfWeek": "${subject.findValue("startOfWeek")?json_string}",
    "capitalInfo": {<#list subject.find("hasCapital") as capital>
        "latlng": [
            ${capital.findValue("hasLatitude")},
            ${capital.findValue("hasLongitude")}
        ]
    </#list>}
}
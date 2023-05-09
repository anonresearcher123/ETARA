{
    "movie": {<#list subject.find("produced_in") as country>
        "country": <#if country.findValue("country_name")??>"${country.findValue("country_name")?json_string}"<#else>""</#if>
    </#list>}
}

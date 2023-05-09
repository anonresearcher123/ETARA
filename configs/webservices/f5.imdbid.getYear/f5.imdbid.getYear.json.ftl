{
    "movie": {
        "year": <#if subject.findValue("release_year")??>"${subject.findValue("release_year")?json_string}"<#else>""</#if>
    }
}

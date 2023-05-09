{
    "movie": {
        "year": <#if subject.findValue("date")??>"${subject.findValue("date")?json_string}"<#else>""</#if>
    }
}

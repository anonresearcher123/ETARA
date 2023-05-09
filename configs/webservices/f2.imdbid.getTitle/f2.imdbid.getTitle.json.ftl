{
    "movie": {
        "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}"<#else>""</#if>
    }
}

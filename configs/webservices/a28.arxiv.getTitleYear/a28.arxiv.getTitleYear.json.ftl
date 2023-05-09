{
    "feed": {
        "entry": {
            "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}",<#else>"",</#if>
            "year": <#if subject.findValue("year")??>"${subject.findValue("year")?json_string}",<#else>"",</#if>
        }
    }
}

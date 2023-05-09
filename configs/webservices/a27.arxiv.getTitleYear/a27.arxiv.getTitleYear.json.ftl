{
    "feed": {
        "entry": {
            "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}",<#else>"",</#if>
            "year": <#if subject.findValue("published")??>"${subject.findValue("published")?keep_before("T")?json_string}",<#else>"",</#if>
        }
    }
}

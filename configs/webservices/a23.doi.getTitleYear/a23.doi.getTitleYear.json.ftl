{
    "feed": {
        "entry": {
            "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}",<#else>"",</#if>
            "date": <#if subject.findValue("publicationDate")??>"${subject.findValue("publicationDate")?json_string}"<#else>""</#if>
        }
    }
}

{
    "feed": {
        "entry": {
            "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}",<#else>"",</#if>
            "year": <#if subject.findValue("yearOfPublication")??>"${subject.findValue("yearOfPublication")?json_string}"<#else>""</#if>
        }
    }
}

{
    "feed": {
        "entry": {
            "title": <#if subject.findValue("title")??>"${subject.findValue("title")?json_string}",<#else>"",</#if>
            "year": <#if subject.findValue("publishedPrintDatePartsYear")??>"${subject.findValue("publishedPrintDatePartsYear")?json_string}"<#else>""</#if>
        }
    }
}

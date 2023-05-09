{
    "feed": {
        "entry": {
            "year": <#if subject.findValue("publishedPrintDatePartsYear")??>"${subject.findValue("publishedPrintDatePartsYear")?json_string}"<#else>""</#if>
        }
    }
}

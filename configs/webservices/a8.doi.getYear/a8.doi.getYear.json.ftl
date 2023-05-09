{
    "feed": {
        "entry": {
            "year": <#if subject.findValue("publicationDate")??>"${subject.findValue("publicationDate")?json_string}"<#else>""</#if>
        }
    }
}

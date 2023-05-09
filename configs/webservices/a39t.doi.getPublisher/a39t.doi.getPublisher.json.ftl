{
    "feed": {
        "entry": {
            "publisher": <#if subject.findValue("publishedBy")??>"${subject.findValue("publishedBy")?json_string}"<#else>""</#if>
        }
    }
}

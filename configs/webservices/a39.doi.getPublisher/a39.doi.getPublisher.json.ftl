{
    "feed": {
        "entry": {
            "publisher": <#if subject.findValue("publisher")??>"${subject.findValue("publisher")?json_string}"<#else>""</#if>
        }
    }
}

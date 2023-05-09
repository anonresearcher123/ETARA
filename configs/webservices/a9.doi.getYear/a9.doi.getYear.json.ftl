{
    "feed": {
        "entry": {
            "date": <#if subject.findValue("year")??>"${subject.findValue("year")?json_string}"<#else>""</#if>
        }
    }
}
